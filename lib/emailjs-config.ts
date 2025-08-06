// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
}

// Email template variables that will be sent
export interface EmailTemplateParams {
  name: string
  email: string
  subject: string
  message: string
  to_email: string // Your email where you want to receive messages
}
