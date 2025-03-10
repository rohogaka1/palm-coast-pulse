import { NextResponse } from 'next/server'
import { sendEmail, emailTemplates } from '@/services/sendgrid/config'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create a custom email template for contact form
    const template = {
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email to admin
    const result = await sendEmail('admin@palmcoasthub.com', template)

    if (!result.success) {
      throw new Error('Failed to send email')
    }

    // Send confirmation email to user
    const confirmationTemplate = {
      subject: 'Thank you for contacting Palm Coast Business Hub',
      text: `Dear ${name},\n\nThank you for contacting Palm Coast Business Hub. We have received your message and will get back to you shortly.\n\nBest regards,\nPalm Coast Business Hub Team`,
      html: `
        <h2>Thank you for contacting Palm Coast Business Hub</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Palm Coast Business Hub. We have received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,</p>
        <p>Palm Coast Business Hub Team</p>
      `,
    }

    await sendEmail(email, confirmationTemplate)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 