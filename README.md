# Portfolio React Application

A complete React portfolio application built for Assignment 1 - Web Application Development course.

## Features

- **Multi-page Navigation**: Home, About, Education, Project, Contact, and Counter pages
- **React Router**: Client-side routing for smooth navigation
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - Counter app with state management
  - Contact form with validation
  - Project showcase with technology tags
  - Education timeline
  - Skills visualization

## Technologies Used

- **React 18.2.0**: Frontend framework
- **React Router DOM 6.22.0**: Client-side routing
- **Vite 5.2.0**: Build tool and dev server
- **CSS3**: Styling with modern CSS features
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
portfolio-solution/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx & About.css
│   │   │   ├── Contact.jsx & Contact.css
│   │   │   ├── Counter.jsx & Counter.css
│   │   │   ├── Education.jsx & Education.css
│   │   │   ├── Home.jsx & Home.css
│   │   │   ├── Layout.jsx & Layout.css
│   │   │   └── Project.jsx & Project.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .gitignore
└── README.md
```

## Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

## Building for Production

To create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Pages Overview

### Home
- Welcome message and introduction
- Feature highlights
- Modern hero section with gradient background

### About
- Personal introduction
- Skills visualization with progress bars
- Professional background information

### Education
- Educational timeline
- Academic achievements
- Certifications and training

### Project
- Project showcase cards
- Technology tags for each project
- Key features and descriptions

### Contact
- Contact information
- Social media links
- Interactive contact form with validation

### Counter
- Interactive counter application
- State management demonstration
- Custom step values
- Visual feedback and status indicators

## Customization

### Personal Information
Update the following files with your personal information:
- `About.jsx` - Personal background and skills
- `Education.jsx` - Educational history
- `Contact.jsx` - Contact details and social links
- `Project.jsx` - Your project portfolio

### Styling
All CSS files are located alongside their respective components for easy customization:
- Update colors in the CSS files to match your preferred theme
- Modify layouts and spacing as needed
- Add additional animations or transitions

## Assignment Requirements Met

✅ Multi-page React application  
✅ React Router implementation  
✅ Component-based architecture  
✅ State management (Counter component)  
✅ Form handling (Contact component)  
✅ Responsive design  
✅ Clean, professional UI  
✅ Proper file organization  
✅ Modern React practices (hooks, functional components)  

## Notes

- The application uses React 18 with modern hooks (useState)
- All components are functional components
- CSS is component-scoped for maintainability
- The design is mobile-responsive
- Navigation uses React Router for SPA behavior

## Development Server

The development server runs on `http://localhost:5173` by default. Vite provides hot module replacement for fast development.

## Browser Compatibility

The application works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

**Course**: Web Application Development (SEC. 403)  
**Assignment**: Assignment 1 - React Portfolio  
**Date**: September 2026
