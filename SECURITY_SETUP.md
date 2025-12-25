# 🔒 Security Setup Guide

## 🚀 Quick Setup

### 1. Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in your EmailJS credentials:
   \`\`\`bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact_form
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
   \`\`\`

### 2. EmailJS Template Setup
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to "Email Templates"
3. Click "Create New Template"
4. Use template ID: `template_contact_form`
5. Copy the HTML content from `emailjs-template.json`

### 3. Template Variables
Set up these variables in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (auto-filled)
- `{{sent_date}}` - Timestamp (auto-filled)

## 🛡️ Security Features Implemented

### ✅ **Environment Security**
- All sensitive data in environment variables
- No hardcoded API keys in source code
- Separate example file for documentation
- Git ignores all environment files

### ✅ **Input Validation & Sanitization**
- XSS protection with input sanitization
- Email format validation
- Field length limits
- Required field validation
- Real-time error feedback

### ✅ **Rate Limiting**
- Client-side rate limiting (3 requests per 5 minutes)
- Prevents spam and abuse
- User-friendly rate limit messages
- Configurable limits via environment variables

### ✅ **Error Handling**
- Graceful error handling for all scenarios
- User-friendly error messages
- Development vs production error details
- Comprehensive logging

### ✅ **Form Security**
- CSRF protection through form validation
- Input length restrictions
- Content sanitization
- Secure form submission

## 🧪 Testing the Contact Form

### Local Testing:
1. Start development server: `npm run dev`
2. Navigate to contact section
3. Fill out the form with test data
4. Submit and check for success message
5. Verify email delivery in your inbox

### Production Testing:
1. Deploy to your hosting platform
2. Test form submission from live site
3. Verify email delivery
4. Test rate limiting by submitting multiple times

## 🔧 Configuration Options

### Rate Limiting:
\`\`\`env
RATE_LIMIT_MAX_REQUESTS=5        # Max requests per window
RATE_LIMIT_WINDOW_MS=900000      # Window size (15 minutes)
\`\`\`

### Email Configuration:
\`\`\`env
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## 🚨 Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Use strong, unique API keys** - Rotate them regularly
3. **Monitor email usage** - Check EmailJS dashboard for usage
4. **Test regularly** - Ensure form works after updates
5. **Keep dependencies updated** - Run `npm audit` regularly

## 🔍 Troubleshooting

### Common Issues:
1. **"Email service not initialized"** - Check your public key
2. **"Rate limited"** - Wait 5 minutes or adjust limits
3. **"Invalid email format"** - Check email validation
4. **Template not found** - Verify template ID matches

### Debug Mode:
Set `NODE_ENV=development` to see detailed error logs.
