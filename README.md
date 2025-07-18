# 🚀 Portfolio - Umarbek Rakhmatov

A modern, responsive portfolio website built with React and Vite, showcasing my full-stack development projects and skills.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Projects**: Detailed project showcases with live demos
- **Contact Form**: EmailJS integration for direct communication
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS3, EmailJS
- **Build Tool**: Vite
- **Deployment**: Hostinger with Git integration
- **Icons**: Custom SVG icons and favicons

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment to Hostinger

Since Hostinger serves from the root directory, use this deployment process:

```bash
# Quick deploy (use the script)
./deploy.sh

# Manual deployment
npm run build
cp dist/index.html .
cp -r dist/assets .
git add .
git commit -m "Deploy: your changes"
git push origin main
```

See [DEPLOY.md](DEPLOY.md) for detailed deployment instructions.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── data/          # Portfolio data
│   ├── assets/        # Images and static files
│   └── styles/        # CSS styles
├── public/            # Public assets
├── dist/              # Build output (ignored)
├── index.html         # Production HTML (deployed)
├── assets/           # Production assets (deployed)
└── .htaccess         # Server configuration
```

## 🔧 Adding New Projects

1. Add project data to `src/data/portfolio.js`
2. Add project images to `src/assets/images/`
3. Run deployment process
4. Portfolio automatically updates

## 📧 Environment Variables

For the contact form to work, add these in Hostinger's environment variables panel:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🌐 Live Demo

[View Portfolio](https://peachpuff-caterpillar-677873.hostingersite.com/)

---

Built with ❤️ by Umarbek Rakhmatov
