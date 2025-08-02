# 🌟 Jay Bhatt - Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![EmailJS](https://img.shields.io/badge/EmailJS-02B875?style=for-the-badge&logo=emailjs&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

**A modern, responsive portfolio website showcasing my journey as a Full Stack Developer**

[🚀 Live Demo](https://jaybhatt25.github.io/my-Portfolio/) | [📧 Contact](mailto:jaybhatt2502@gmail.com) | [💼 LinkedIn](https://linkedin.com/in/jaybhatt25)

</div>

---

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Animated Component Titles** with gradient effects and interactive hover states
- **Dark/Light Mode Toggle** with seamless theme transitions
- **Responsive Design** optimized for all devices (mobile-first approach)
- **Smooth Scroll Navigation** with active section highlighting
- **Interactive UI Elements** with hover effects and micro-animations

### 📱 **Advanced Navigation**
- **Smart Navigation Bar** that adapts to screen size and scroll position
- **Mobile-First Design** with hamburger menu for smaller screens
- **Desktop Scroll Navigation** that transforms to mobile-like layout when scrolling
- **Click-Outside-to-Close** functionality for enhanced UX
- **Theme-Aware Styling** for all navigation states

### 🛠️ **Interactive Sections**
- **Projects Gallery** with expandable project cards and live demo links
- **Skills Showcase** with categorized technology stacks
- **Timeline Experience** displaying education and work history
- **Certifications Display** with verification links
- **Contact Form** with EmailJS integration for direct messaging

### 🎯 **Performance & Accessibility**
- **Intersection Observer** for scroll-triggered animations
- **Optimized Assets** with WebP images and lazy loading
- **SEO Friendly** with proper meta tags and semantic HTML
- **Accessible Design** with ARIA labels and keyboard navigation
- **Cross-Browser Compatibility** tested across modern browsers

---

## 🛠️ Tech Stack

### **Frontend**
- **React 17** - Core framework for building the UI
- **SASS/SCSS** - Advanced styling with variables and mixins
- **Material-UI** - Icon components and design system
- **React Scroll** - Smooth scrolling navigation
- **React Vertical Timeline** - Professional timeline component

### **Animations & Effects**
- **CSS Animations** - Custom keyframe animations
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Transforms** - Smooth transitions and hover effects
- **Gradient Text Effects** - Modern typography styling

### **Communication**
- **EmailJS** - Direct email integration for contact form
- **React Hook Form** - Form validation and handling

### **Development Tools**
- **Node-SASS** - SCSS compilation
- **React Scripts** - Build and development tools
- **Web Vitals** - Performance monitoring

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/JayBhatt25/my-Portfolio.git
   cd my-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### **Building for Production**

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

---

## 📁 Project Structure

```
my-Portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Navigation/
│   │   ├── intro/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── timeline/
│   │   └── shared/
│   │       └── animated-titles.scss
│   ├── images/
│   ├── context.js          # Theme context for dark/light mode
│   ├── data.js            # Project data
│   ├── skillsData.js      # Skills and technologies
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🎨 Theme System

The portfolio features a comprehensive dark/light mode system:

- **Theme Context** using React's Context API
- **Global Theme Variables** in SASS for consistent styling
- **Automatic Theme Persistence** across browser sessions
- **Animated Theme Transitions** for smooth user experience

### **Theme Toggle Features:**
- **Desktop**: Positioned right of navigation with margin
- **Mobile**: Centered at top of screen
- **Scrolled State**: Integrated into mobile-like navigation

---

## 📧 Contact Form Integration

The contact form uses EmailJS for direct email delivery:

- **Form Validation** with real-time feedback
- **Email Template** customization
- **Success/Error Handling** with user notifications
- **Responsive Design** for all screen sizes

---

## 🎯 Key Sections

### **1. Hero/Intro Section**
- Personal introduction with animated elements
- Call-to-action buttons
- Social media links

### **2. Projects Gallery**
- Featured projects with live demos
- Technology stack for each project
- GitHub repository links
- Expandable project details

### **3. Skills & Technologies**
- Categorized skill sets (Web, Mobile, Languages, Databases)
- Interactive skill selection
- Visual skill representation

### **4. Experience Timeline**
- Professional work experience
- Educational background
- Interactive timeline with icons

### **5. Certifications**
- AWS Developer Associate certification
- Verification links to badge providers
- Detailed certification descriptions

### **6. Contact Information**
- Direct contact form
- Professional contact details
- Location information

---

## 🌟 Animation Features

### **Title Animations**
- **Fade-in Up** - Smooth entrance effect
- **Slide-in Left** - Dynamic side entrance
- **Bounce-in** - Playful bounce effect
- **Typewriter** - Character-by-character reveal
- **Glow Effects** - Subtle pulsing on hover

### **Interactive Elements**
- **Hover Transformations** - Scale and rotate effects
- **Gradient Text** - Animated color transitions
- **Expanding Underlines** - Dynamic line animations
- **Emoji Animations** - Delayed entrance effects

---

## 📱 Responsive Design

- **Mobile-First Approach** with progressive enhancement
- **Breakpoint System** for optimal viewing on all devices
- **Flexible Grid Layouts** that adapt to screen size
- **Touch-Friendly Interactions** for mobile users
- **Optimized Performance** across device capabilities

---

## 🚀 Performance Optimizations

- **Code Splitting** for faster initial load times
- **Image Optimization** with WebP format and lazy loading
- **CSS Minification** and efficient SASS compilation
- **Component Lazy Loading** for improved performance
- **SEO Optimization** with proper meta tags and semantic HTML

---

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 About the Developer

**Jay Bhatt** - Full Stack Developer passionate about creating innovative web solutions

- 🌍 Based in Charlotte, NC
- 💼 AWS Certified Developer Associate
- 🎓 Computer Science Graduate
- 🚀 Experienced in React, Node.js, Python, and Cloud Technologies

### **Connect with me:**
- 📧 Email: [jaybhatt2502@gmail.com](mailto:jaybhatt2502@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/jaybhatt25](https://linkedin.com/in/jaybhatt25)
- 🐱 GitHub: [github.com/JayBhatt25](https://github.com/JayBhatt25)
- 🌐 Portfolio: [https://jay-bhatt-portfolio.web.app/](https://jay-bhatt-portfolio.web.app/)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ by [Jay Bhatt](https://github.com/JayBhatt25)

</div>
