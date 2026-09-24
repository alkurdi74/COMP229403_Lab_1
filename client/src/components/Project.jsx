import React from 'react'
import './Project.css'

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, shopping cart, and payment integration using MERN stack.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      features: ["User authentication", "Product management", "Payment gateway", "Admin dashboard"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      features: ["Real-time updates", "Team collaboration", "Task assignment", "Progress tracking"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides current weather conditions and forecasts for multiple locations.",
      technologies: ["React", "Weather API", "Chart.js", "CSS Grid"],
      features: ["Location search", "Weather forecasts", "Data visualization", "Location saving"]
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and professional information with modern design.",
      technologies: ["React", "React Router", "CSS3", "Vite"],
      features: ["Responsive design", "Smooth navigation", "Component-based", "Fast loading"]
    }
  ]

  return (
    <div className="project-container">
      <h2 className="page-title">My Projects</h2>
      
      <div className="projects-intro">
        <p>
          Here are some of the projects I've worked on. Each project demonstrates different 
          aspects of my skills in web development, from front-end design to back-end integration.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-section">
              <h4>Technologies Used</h4>
              <div className="technologies-list">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-section">
              <h4>Key Features</h4>
              <ul className="features-list">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="project-footer">
        <p>
          <strong>More projects coming soon!</strong> I'm constantly working on new projects 
          to expand my skills and portfolio. Check back regularly for updates.
        </p>
      </div>
    </div>
  )
}