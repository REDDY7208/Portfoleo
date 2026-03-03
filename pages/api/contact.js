import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Create transporter with more robust configuration for serverless
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use service instead of host for better reliability
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS instead of SSL
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to you (receiving the contact form)
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.EMAIL_USER,
      to: process.env.SMTP_TO_EMAIL || process.env.EMAIL_FROM || process.env.SMTP_USER || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e838cc; border-bottom: 2px solid #e838cc; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #e838cc; border-radius: 5px;">
              <p style="margin: 0;"><strong style="color: #333;">Message:</strong></p>
              <p style="margin: 10px 0; line-height: 1.6; color: #555;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
              <p>This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EBUSY' || error.code === 'ENOTFOUND') {
      errorMessage = 'Network connectivity issue. Please try again in a moment.';
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email service timeout. Please try again.';
    }
    
    return res.status(500).json({ 
      message: errorMessage,
      error: error.message,
      code: error.code 
    });
  }
}
