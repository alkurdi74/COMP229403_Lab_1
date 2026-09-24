import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h2 className="hero-title">Welcome to My Portfolio</h2>
        <p className="hero-subtitle">Web Developer | React Enthusiast | Problem Solver</p>
      </div>
      
      <div className="content-section">
        <h3 className="section-title">About This Portfolio</h3>
        <p className="content-text">
          This portfolio showcases my skills in web development, particularly in React.js. 
          Explore the different sections to learn more about my background, education, projects, 
          and how to get in touch with me.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h4>Modern Design</h4>
          <p>Clean and responsive interface</p>
        </div>
        <div className="feature-card">
          <h4>React Powered</h4>
          <p>Built with React and modern JavaScript</p>
        </div>
        <div className="feature-card">
          <h4>Interactive</h4>
          <p>Dynamic components and smooth navigation</p>
        </div>
      </div>
    </div>
  )
}