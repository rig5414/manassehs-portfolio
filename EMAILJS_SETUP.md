# EmailJS Setup Instructions

## Step 1: Get Your Public Key
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to "Account" → "General"
3. Copy your **Public Key**
4. Replace `YOUR_PUBLIC_KEY` in `.env` with your actual public key

## Step 2: Create Email Template
1. In EmailJS Dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Use template ID: `template_contact`
4. Set up your template with these variables:

### Template Content:
\`\`\`
Subject: New Contact Form Message: {{subject}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
\`\`\`

### Template Variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Step 3: Configure Email Service
1. Make sure your email service is properly configured
2. Test the service in EmailJS dashboard
3. Ensure your service ID `service_zy9l23i` is active

## Step 4: Update Configuration
Replace the placeholder values in `components/contact.tsx`:
- Line 45: Replace `'YOUR_PUBLIC_KEY'` with your actual public key
- Optionally update the template ID if you use a different name

## Step 5: Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting
- Check browser console for any errors
- Verify all EmailJS credentials are correct
- Ensure your email service is active
- Check EmailJS dashboard for delivery status
