// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_zy9l23i',
  TEMPLATE_ID: 'template_contact', // You'll need to create this template
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // You'll need to get this from EmailJS dashboard
}

// Email template variables that will be sent
export interface EmailTemplateParams {
  name: string
  email: string
  subject: string
  message: string
  to_email: string // Your email where you want to receive messages
}
