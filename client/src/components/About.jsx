import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <h2 className="page-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I am a passionate web developer with a strong foundation in modern web technologies. 
            I love creating user-friendly, responsive, and visually appealing web applications. 
            My journey in web development started with a curiosity about how websites work, 
            and it has evolved into a fulfilling career path.
          </p>
          
          <h3>My Approach</h3>
          <p>
            I believe in writing clean, maintainable code and following best practices. 
            I enjoy learning new technologies and staying up-to-date with industry trends. 
            Whether it's front-end development, back-end integration, or database management, 
            I approach every project with enthusiasm and attention to detail.
          </p>
          
          <h3>Why Web Development?</h3>
          <p>
            Web development allows me to combine creativity with problem-solving. 
            I find satisfaction in turning complex problems into simple, elegant solutions 
            that users enjoy. The ever-evolving nature of web technology keeps me motivated 
            to continuously improve my skills.
          </p>
        </div>
        
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-name">HTML/CSS</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">React.js</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Node.js</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">MongoDB</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Git/GitHub</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}