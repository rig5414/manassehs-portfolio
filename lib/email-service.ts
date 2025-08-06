import emailjs from '@emailjs/browser'
import { config, validateConfig } from './config'

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  subject: string
  message: string
  to_email: string
  reply_to: string
}

// Email service class for better organization and error handling
export class EmailService {
  private static instance: EmailService
  private isInitialized = false
  
  private constructor() {
    this.initialize()
  }
  
  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService()
    }
    return EmailService.instance
  }
  
  private initialize() {
    if (!validateConfig()) {
      console.error('❌ EmailJS configuration is invalid')
      return
    }
    
    if (config.emailjs.publicKey) {
      emailjs.init(config.emailjs.publicKey)
      this.isInitialized = true
      console.log('✅ EmailJS initialized successfully')
    } else {
      console.error('❌ EmailJS public key is missing')
    }
  }
  
  public async sendContactEmail(params: Omit<EmailTemplateParams, 'to_email' | 'reply_to'>): Promise<{
    success: boolean
    message: string
    error?: any
  }> {
    if (!this.isInitialized) {
      return {
        success: false,
        message: 'Email service is not properly initialized. Please check your configuration.',
      }
    }
    
    try {
      // Validate input parameters
      if (!params.from_name || !params.from_email || !params.message) {
        return {
          success: false,
          message: 'Please fill in all required fields.',
        }
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(params.from_email)) {
        return {
          success: false,
          message: 'Please enter a valid email address.',
        }
      }
      
      // Prepare template parameters
      const templateParams: EmailTemplateParams = {
        ...params,
        to_email: config.site.contactEmail,
        reply_to: params.from_email,
      }
      
      // Send email via EmailJS
      const result = await emailjs.send(
        config.emailjs.serviceId!,
        config.emailjs.templateId!,
        templateParams as unknown as Record<string, unknown>
      )
      
      console.log('✅ Email sent successfully:', result.text)
      
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.',
      }
      
    } catch (error: any) {
      console.error('❌ Failed to send email:', error)
      
      // Handle specific EmailJS errors
      let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      
      if (error.status === 400) {
        errorMessage = 'Invalid email format. Please check your email address and try again.'
      } else if (error.status === 402) {
        errorMessage = 'Email service quota exceeded. Please contact me directly via email.'
      } else if (error.status === 403) {
        errorMessage = 'Email service access denied. Please contact me directly via email.'
      }
      
      return {
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? error : undefined,
      }
    }
  }
  
  // Method to test email service configuration
  public async testConfiguration(): Promise<boolean> {
    if (!this.isInitialized) {
      console.error('❌ Email service not initialized')
      return false
    }
    
    try {
      // This is a dry run to test if the service is properly configured
      console.log('🧪 Testing EmailJS configuration...')
      console.log('Service ID:', config.emailjs.serviceId)
      console.log('Template ID:', config.emailjs.templateId)
      console.log('Public Key:', config.emailjs.publicKey ? '✅ Set' : '❌ Missing')
      
      return true
    } catch (error) {
      console.error('❌ EmailJS configuration test failed:', error)
      return false
    }
  }
}

// Export singleton instance
export const emailService = EmailService.getInstance()
