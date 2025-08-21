# Digital Solutions - Creative Agency Website

A modern, cinematic, fully responsive static website for Digital Solutions, a creative agency specializing in digital marketing, website/web app development, and graphic design.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with neon accents and subtle animations
- **Responsive**: Fully responsive design that works on all devices
- **Cinematic Animations**: Smooth scroll-triggered animations using Framer Motion
- **3D Hero Section**: Interactive 3D hero section powered by Spline
- **SEO Optimized**: Comprehensive SEO management with dynamic meta tags
- **Performance Optimized**: Built for speed with Lighthouse scores ≥ 90
- **Admin Dashboard**: SEO management dashboard for updating meta tags
- **Static Content**: All content stored in JSON files for easy management

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Spline
- **SEO**: React Helmet Async
- **Code Quality**: ESLint + Prettier
- **Deployment**: Firebase Hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── PatternBackground.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── HeroSpline.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── CTASection.tsx
│   │   ├── SEOHelmet.tsx
│   │   └── Modal.tsx
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/               # UI components
│       └── Modal.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Testimonials.tsx
│   ├── CaseStudies.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── SEODashboard.tsx
├── data/                # Static JSON data
│   ├── services.json
│   ├── projects.json
│   ├── testimonials.json
│   ├── posts.json
│   ├── faqs.json
│   └── seo.json
├── hooks/               # Custom hooks
├── utils/               # Utility functions
└── assets/              # Static assets
    ├── images/
    └── styles/
```

## 🎨 Design System

### Color Palette
- **Primary**: Neon gradients (pink, purple, blue)
- **Background**: Dark theme with subtle gradients
- **Text**: White with gray variations
- **Accent**: Neon highlights for interactive elements

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)
- **UI**: Consistent font weights and sizes

### Components
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Neon Glow**: Subtle neon borders and hover effects
- **Smooth Animations**: Page transitions and micro-interactions
- **Responsive Grid**: Flexible layouts for all screen sizes

## 📱 Pages

1. **Home** - Cinematic scroll storytelling with pinned hero
2. **About** - Company vision, mission, history, and team
3. **Services** - Service grid with detail modals
4. **Portfolio** - Filterable project gallery with case studies
5. **Blog** - Blog listing and single post pages
6. **Testimonials** - Client reviews with ratings
7. **Case Studies** - Detailed project breakdowns
8. **FAQ** - Accordion-style Q&A
9. **Contact** - Contact form with map and WhatsApp integration
10. **Privacy Policy** - Static privacy policy page
11. **Terms of Service** - Static terms page
12. **SEO Dashboard** - Admin panel for SEO management

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Local Development
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## 🚀 Deployment

### Firebase Setup
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase project:
```bash
firebase init
```

4. Deploy to Firebase Hosting:
```bash
firebase deploy
```

### Deployment Notes
- The project is configured for static deployment
- React Router is handled via Firebase rewrite rules
- All assets are optimized for production
- SEO meta tags are dynamically managed

## 📊 SEO Management

### SEO Dashboard
- Accessible at `/admin/seo`
- Protected by login (demo: admin/password)
- Manage page titles, descriptions, keywords, and canonical URLs
- Real-time preview of character counts
- Bulk editing capabilities

### SEO Features
- Dynamic meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URL management
- Robots.txt configuration
- Sitemap generation

## 🎯 Performance Optimization

### Implemented Optimizations
- **Lazy Loading**: Images and 3D models are loaded on demand
- **Code Splitting**: Routes are split for optimal loading
- **Image Optimization**: Placeholder images with lazy loading
- **Bundle Analysis**: Optimized bundle size
- **Caching**: Strategic caching headers
- **Minification**: CSS and JS minification

### Expected Lighthouse Scores
- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## 🔧 Customization

### Content Management
All content is stored in JSON files in the `src/data/` directory:
- `services.json` - Service offerings
- `projects.json` - Portfolio projects
- `testimonials.json` - Client testimonials
- `posts.json` - Blog posts
- `faqs.json` - FAQ items
- `seo.json` - SEO meta data

### Styling Customization
- Modify `tailwind.config.js` for theme customization
- Update CSS variables in `src/assets/styles/index.css`
- Add custom animations in the same file

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add SEO data in `src/data/seo.json`
4. Update navigation if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@digitalsolutions.com
- GitHub Issues: Create an issue for bugs or feature requests

## 🎉 Acknowledgments

- Design inspiration from Apple.com, RNO1, KOTA, and Madwell
- Built with modern web technologies and best practices
- Optimized for performance, accessibility, and SEO