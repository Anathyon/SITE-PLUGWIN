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
      console.error('HCAPTCHA_SECRET is not defined');
      // For fallback or during setup, we might want to skip or fail
      // But for security, we should fail if expected.
    }

    const verifyUrl = `https://hcaptcha.com/siteverify`;
    
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${captchaSecret}&response=${captchaToken}`,
    });

    const captchaData = await response.json() as { success: boolean };
    if (!captchaData.success) {
      return res.status(400).json({ error: 'Captcha validation failed' });
    }
  } catch (error) {
    console.error('Error verifying hCaptcha:', error);
    return res.status(500).json({ error: 'Failed to verify captcha' });
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
