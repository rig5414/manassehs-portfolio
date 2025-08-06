// Environment Configuration with Validation
export const config = {
  // EmailJS Configuration
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  
  // Site Configuration
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'manassehtelle90@gmail.com',
  },
  
  // Security Configuration
  security: {
    rateLimitMaxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  },
  
  // Analytics Configuration (for future use)
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
  },
} as const

// Validation function to ensure required environment variables are present
export function validateConfig() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 
    'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
  ]
  
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  )
  
  if (missingVars.length > 0) {
    console.warn(
      `⚠️  Missing environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
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
