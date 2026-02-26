import nodemailer from 'nodemailer';
import { z } from 'zod';

// Schema de validação (deve ser o mesmo do frontend para consistência)
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres').max(200),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(2000),
  'h-captcha-response': z.string().min(1, 'Captcha token is required'),
});

/**
 * Sanitizador simples para evitar injeção de tags HTML básicas.
 */
function sanitize(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1. Validação Estrutural com Zod
  const validation = contactSchema.safeParse(req.body);
  
  if (!validation.success) {
    return res.status(400).json({ 
      error: 'Dados inválidos', 
      details: validation.error.flatten().fieldErrors 
    });
  }

  const { name, email, subject, message, 'h-captcha-response': captchaToken } = validation.data;

  // 2. Validar hCaptcha
  try {
    const captchaSecret = process.env.HCAPTCHA_SECRET;
    if (!captchaSecret) {
      console.error('CRITICAL: HCAPTCHA_SECRET is not defined');
      return res.status(500).json({ error: 'Erro interno de configuração' });
    }

    const verifyUrl = 'https://hcaptcha.com/siteverify';
    const params = new URLSearchParams();
    params.append('secret', captchaSecret);
    params.append('response', captchaToken);
    
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const captchaData = await response.json() as { success: boolean };

    if (!captchaData.success) {
      return res.status(400).json({ error: 'Validação do Captcha falhou' });
    }
  } catch (error) {
    console.error('Error verifying hCaptcha:', error);
    return res.status(500).json({ error: 'Erro ao verificar o captcha' });
  }

  // 3. Sanitização dos inputs
  const safeName = sanitize(name);
  const safeSubject = sanitize(subject);
  const safeMessage = sanitize(message);

  // 4. Configurar transportador SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 5. Enviar e-mail com conteúdo sanitizado
    await transporter.sendMail({
      from: `"${safeName}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_DESTINATION,
      replyTo: email,
      subject: `Novo Contato: ${safeSubject}`,
      text: safeMessage,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333;">Novo Contato Recebido</h2>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${safeSubject}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Falha ao enviar e-mail' });
  }
}
