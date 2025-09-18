# EmailJS Setup Guide (Alternative to Formspree)

## Why EmailJS?
- More reliable than Formspree
- Better uptime and accessibility
- 200 emails/month free (vs 50 for Formspree)
- More customization options

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID** (starts with "service_")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Reply to: {{from_email}}
```

4. Save and note down your **Template ID** (starts with "template_")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact.jsx
Replace these lines in `src/pages/Contact.jsx`:

```javascript
const EMAILJS_SERVICE_ID = 'service_your_service_id';
const EMAILJS_TEMPLATE_ID = 'template_your_template_id';
const EMAILJS_PUBLIC_KEY = 'qK4T0Z9HfKSxRhIva';
```

With your actual credentials:

```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx';
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx';
```

## Alternative: Simple Mailto Link (No Setup Required)
If you want a quick solution without any service setup:

```javascript
// Simple mailto link - works immediately
const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent(`Message from ${formData.name}`);
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
  window.open(`mailto:${cvData.email}?subject=${subject}&body=${body}`);
  setSubmitStatus('success');
};
```

## Alternative: Netlify Forms (If using Netlify)
If you deploy to Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to your form
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. No additional setup needed!

## Current Status
- EmailJS is now active in your code
- You just need to configure the credentials
- The form will work on your live site once configured
