# Citrix Consulting Services Website

A modern, responsive, and premium website for Citrix Consulting Services built with React, TypeScript, and Tailwind CSS. This website showcases professional compliance and safety solutions with smooth animations and excellent user experience.

![Citrix Consulting Services](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 **Premium Design & Animations**
- **Smooth scroll animations** with Intersection Observer
- **3D card hover effects** with transform styles
- **Gradient animations** and shimmer effects
- **Micro-interactions** on every element
- **Glass morphism effects** for modern UI
- **Floating background elements** for visual interest

### 📱 **Responsive & Accessible**
- **Mobile-first design** optimized for all devices
- **Accessibility compliant** with reduced motion support
- **Keyboard navigation** support
- **Screen reader friendly** with proper ARIA labels
- **Cross-browser compatibility**

### 🚀 **Performance Optimized**
- **60fps animations** throughout the application
- **CSS transforms** for hardware acceleration
- **Optimized bundle size** with Vite
- **Lazy loading** for better performance
- **Efficient state management**

### 📄 **Multi-Page Application**
- **Home Page**: Hero section, services preview, testimonials
- **Services Page**: Comprehensive service listings
- **Service Detail Pages**: Individual service information
- **About Page**: Company information and team
- **Contact Page**: Contact forms and information
- **Testimonials Page**: Client reviews and feedback
- **Policies Page**: Company policies and procedures
- **Jobs Page**: Career opportunities and listings

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **React Hook Form** for form management

### **Styling & UI**
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible components
- **Lucide React** for beautiful icons
- **Class Variance Authority** for component variants

### **Development Tools**
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd citrix-consulting-services-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
citrix-consulting-services-website/
├── components/                 # React components
│   ├── ui/                    # Reusable UI components (Radix UI)
│   ├── data/                  # Data files (services, jobs)
│   ├── HomePage.tsx           # Landing page component
│   ├── Navigation.tsx         # Navigation bar component
│   ├── Footer.tsx             # Footer component
│   ├── ServicesPage.tsx       # Services listing page
│   ├── ServiceDetailPage.tsx  # Individual service pages
│   ├── AboutPage.tsx          # About company page
│   ├── ContactPage.tsx        # Contact form page
│   ├── TestimonialsPage.tsx   # Client testimonials
│   ├── PoliciesPage.tsx       # Company policies
│   ├── JobsPage.tsx           # Job listings
│   ├── JobCard.tsx            # Job card component
│   └── LoadingSpinner.tsx     # Loading components
├── styles/
│   └── globals.css            # Global styles and animations
├── public/
│   └── logo.png               # Company logo
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🎨 Design System

### **Color Palette**
The application uses a professional color scheme defined in `tailwind.config.js`:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Teal Dark | `#007E7A` | Primary brand color |
| Teal Light | `#00C4B3` | Secondary brand color |
| Orange | `#F7941E` | Accent color, CTAs |
| Navy Blue | `#1E2A3A` | Text, backgrounds |
| Leaf Green | `#1BB66E` | Success states |
| Brand White | `#FFFFFF` | Backgrounds |

### **Typography**
- **Headings**: Bold, professional fonts with proper hierarchy
- **Body Text**: Clean, readable fonts optimized for web
- **Responsive**: Scales appropriately across all devices

### **Animations**
- **Fade In**: Smooth opacity transitions
- **Slide In**: Directional entrance animations
- **Hover Effects**: Interactive micro-animations
- **Loading States**: Professional loading indicators

## 📱 Pages Overview

### **Home Page**
- Hero section with animated background
- Key services preview with interactive cards
- Company statistics with animated counters
- Client testimonials showcase
- Call-to-action sections

### **Services Page**
- Comprehensive service listings
- Filterable service categories
- Detailed service descriptions
- Pricing information
- Service comparison features

### **Service Detail Pages**
- In-depth service information
- Process explanations
- Benefits and features
- Related services
- Contact forms for inquiries

### **Contact Page**
- Multiple contact forms
- Company information
- Office locations
- Contact methods
- Inquiry tracking

## 🔧 Customization

### **Adding New Services**
1. Update `components/data/servicesData.ts`
2. Add service information and details
3. Update navigation if needed

### **Modifying Colors**
1. Edit `tailwind.config.js` color definitions
2. Update CSS custom properties in `styles/globals.css`
3. Test across all components

### **Adding New Pages**
1. Create new component in `components/`
2. Add route in `App.tsx`
3. Update navigation in `Navigation.tsx`

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Static Hosting**
The built files in the `dist/` directory can be deployed to:
- **Vercel**: Drag and drop deployment
- **Netlify**: Connect repository for auto-deploy
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud hosting
- **Any static hosting service**

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

This project is proprietary to **PixelSolve**. All rights reserved.

## 📞 Support

For support and inquiries:
- **Email**: info@citrixconsulting.co.uk
- **Phone**: +44 (0) 123 456 7890
- **Website**: [Citrix Consulting Services](https://citrixconsulting.co.uk)

---

**Built with ❤️ by PixelSolve** 