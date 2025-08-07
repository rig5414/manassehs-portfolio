// Environment Configuration with Validation
export const config = {
  // EmailJS Configuration
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
  
  // Site Configuration
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  },
  
  // Security Configuration
  security: {
    rateLimitMaxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  },
  
  // Analytics Configuration (for future use)
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
  },
} as const

// Validation function to ensure required environment variables are present
export function validateConfig() {
  const requiredConfigs = {
    emailjs: [
      { key: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID', value: config.emailjs.serviceId },
      { key: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', value: config.emailjs.templateId },
      { key: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', value: config.emailjs.publicKey },
    ],
    site: [
      { key: 'NEXT_PUBLIC_SITE_URL', value: config.site.url },
      { key: 'NEXT_PUBLIC_CONTACT_EMAIL', value: config.site.contactEmail },
    ],
  }
  
  let isValid = true
  const missingVars: string[] = []
  
  // Check EmailJS configuration
  requiredConfigs.emailjs.forEach(({ key, value }) => {
    if (!value) {
      console.error(`❌ Missing EmailJS configuration: ${key}`)
      missingVars.push(key)
      isValid = false
    }
  })
  
  // Check Site configuration
  requiredConfigs.site.forEach(({ key, value }) => {
    if (!value) {
      console.error(`❌ Missing Site configuration: ${key}`)
      missingVars.push(key)
      isValid = false
    }
  })
  
  if (!isValid) {
    console.error(
      '❌ Configuration Error:\n' +
      `Missing environment variables: ${missingVars.join(', ')}\n` +
      'Please add these variables to your .env.local file.\n' +
      'If you need help, check the .env.example file for reference.'
    )
    return false
  }
  
  return true
}

// Type-safe environment variable access
export function getEnvVar(key: keyof typeof process.env, fallback?: string): string {
  const value = process.env[key]
  if (!value && !fallback) {
    throw new Error(`Environment variable ${key} is required but not set`)
  }
  return value || fallback || ''
}
