# Hostinger Deployment Configuration

## Build Settings
- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x or 20.x

## Environment Variables (Add these in Hostinger panel)
```
VITE_EMAILJS_SERVICE_ID=service_3fhladt
VITE_EMAILJS_TEMPLATE_ID=template_46da76a
VITE_EMAILJS_PUBLIC_KEY=E4XfNlStY_IW8Vaz4
```

## Post-deployment Steps
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
