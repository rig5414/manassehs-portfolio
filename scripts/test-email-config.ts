// Test EmailJS configuration
import { emailService } from '../lib/email-service'

async function testEmailConfig() {
  const result = await emailService.testConfiguration()
  if (result) {
    console.log('✅ EmailJS configuration is valid')
  } else {
    console.log('❌ EmailJS configuration is invalid')
  }
}

testEmailConfig()
