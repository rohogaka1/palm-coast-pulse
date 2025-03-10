import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('Missing SendGrid API key')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export interface EmailTemplate {
  subject: string
  text: string
  html: string
}

export const sendEmail = async (
  to: string,
  template: EmailTemplate,
  from: string = 'noreply@palmcoasthub.com'
) => {
  try {
    await sgMail.send({
      to,
      from,
      subject: template.subject,
      text: template.text,
      html: template.html,
    })
    return { success: true }
  } catch (error) {
    console.error('SendGrid error:', error)
    return { success: false, error }
  }
}

export const emailTemplates = {
  welcomeBusiness: (businessName: string): EmailTemplate => ({
    subject: `Welcome to Palm Coast Business Hub, ${businessName}!`,
    text: `Welcome to Palm Coast Business Hub!\n\nThank you for joining our business directory. We're excited to help you grow your business presence in Palm Coast.\n\nYour business listing is now being reviewed and will be live soon.\n\nBest regards,\nPalm Coast Business Hub Team`,
    html: `
      <h1>Welcome to Palm Coast Business Hub!</h1>
      <p>Dear ${businessName},</p>
      <p>Thank you for joining our business directory. We're excited to help you grow your business presence in Palm Coast.</p>
      <p>Your business listing is now being reviewed and will be live soon.</p>
      <br/>
      <p>Best regards,</p>
      <p>Palm Coast Business Hub Team</p>
    `
  }),
  
  leadNotification: (
    businessName: string,
    customerName: string,
    customerEmail: string,
    message: string
  ): EmailTemplate => ({
    subject: `New Lead from Palm Coast Business Hub - ${customerName}`,
    text: `You have a new lead from Palm Coast Business Hub!\n\nCustomer Details:\nName: ${customerName}\nEmail: ${customerEmail}\nMessage: ${message}\n\nPlease respond to this lead within 24 hours.\n\nBest regards,\nPalm Coast Business Hub Team`,
    html: `
      <h1>New Lead from Palm Coast Business Hub</h1>
      <p>Dear ${businessName},</p>
      <p>You have a new lead from Palm Coast Business Hub!</p>
      <h2>Customer Details:</h2>
      <ul>
        <li><strong>Name:</strong> ${customerName}</li>
        <li><strong>Email:</strong> ${customerEmail}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p>Please respond to this lead within 24 hours.</p>
      <br/>
      <p>Best regards,</p>
      <p>Palm Coast Business Hub Team</p>
    `
  })
} 