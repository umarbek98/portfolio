# Hostinger Deployment Configuration

## Build Settings

- **Build Command**: `npm ci && npm run build`
- **Output Directory**: Leave empty (serves from root)
- **Node.js Version**: 18.x or 20.x

## Environment Variables (Add these in Hostinger panel)

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**⚠️ IMPORTANT: Never commit actual keys to GitHub! Add these values directly in Hostinger's environment variables panel.**

## Deployment Process

1. Push changes to GitHub main branch
2. Hostinger auto-deploys from root directory
3. Portfolio is live at your domain

## File Structure

```
root/
├── index.html (built portfolio)
├── assets/ (compiled JS/CSS)
├── .htaccess (server config)
└── favicon files
```

1. Set up custom domain SSL certificate
2. Configure email forwarding
3. Test contact form functionality

## Files Structure After Deployment

```
/public_html/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── images/
├── favicon.svg
├── favicon-16x16.svg
└── apple-touch-icon.svg
```
