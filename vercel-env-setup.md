# Setting up Environment Variables for Production

## Method 1: Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable:
   - SMTP_HOST: smtp.gmail.com
   - SMTP_PORT: 465
   - SMTP_SECURE: true
   - SMTP_USER: mosambikala@gmail.com
   - SMTP_PASS: bxti xjqh uvfh xvud
   - SMTP_FROM_EMAIL: mosambikala@gmail.com
   - SMTP_TO_EMAIL: praveenkumarreddy9866@gmail.com

## Method 2: Vercel CLI
Run these commands in your terminal:

```bash
vercel env add SMTP_HOST
# Enter: smtp.gmail.com

vercel env add SMTP_PORT
# Enter: 465

vercel env add SMTP_SECURE
# Enter: true

vercel env add SMTP_USER
# Enter: mosambikala@gmail.com

vercel env add SMTP_PASS
# Enter: bxti xjqh uvfh xvud

vercel env add SMTP_FROM_EMAIL
# Enter: mosambikala@gmail.com

vercel env add SMTP_TO_EMAIL
# Enter: praveenkumarreddy9866@gmail.com
```

## After adding variables:
1. Redeploy: `vercel --prod`
2. Or trigger a new deployment from the dashboard

## Security Note:
- Never commit .env.local to git
- Use App Passwords for Gmail (which you're already doing)
- Consider using a dedicated email service like SendGrid for production