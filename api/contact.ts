import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message, 'h-captcha-response': captchaToken } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!captchaToken) {
    return res.status(400).json({ error: 'Captcha token is required' });
  }

  // 1. Validar hCaptcha
  try {
    const captchaSecret = process.env.HCAPTCHA_SECRET;
    if (!captchaSecret) {
      console.error('CRITICAL: HCAPTCHA_SECRET is not defined in environment variables');
      return res.status(500).json({ error: 'Configuração do servidor incompleta (Captcha Secret missing)' });
    }

    const verifyUrl = 'https://hcaptcha.com/siteverify';
    const params = new URLSearchParams();
    params.append('secret', captchaSecret);
    params.append('response', captchaToken);
    
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const captchaData = await response.json() as { 
      success: boolean; 
      'error-codes'?: string[];
    };

    if (!captchaData.success) {
      console.error('hCaptcha validation failed:', captchaData['error-codes']);
      return res.status(400).json({ 
        error: 'Validação do Captcha falhou. Por favor, tente novamente.',
        details: captchaData['error-codes']
      });
    }
  } catch (error) {
    console.error('Error verifying hCaptcha:', error);
    return res.status(500).json({ error: 'Erro ao verificar o captcha' });
  }

  // 2. Configurar o transportador SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true para porta 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 3. Enviar o e-mail
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Enviado pelo noreply
      to: process.env.CONTACT_DESTINATION,         // Destino final
      replyTo: email,                              // Para você responder direto ao cliente
      subject: `Novo Contato: ${subject}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #333;">Novo Contato Recebido</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
