import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <div className="education-container">
      <h2 className="page-title">Education</h2>
      
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-year">2024 - Present</div>
          <div className="education-content">
            <h3>Centennial College</h3>
            <p className="education-degree">Web Application Development</p>
            <p className="education-description">
              Currently pursuing advanced studies in web development with focus on 
              modern JavaScript frameworks, database management, and full-stack development. 
              Learning MERN stack (MongoDB, Express.js, React.js, Node.js) and 
              industry best practices.
            </p>
            <div className="education-courses">
              <strong>Key Courses:</strong>
              <ul>
                <li>Advanced JavaScript & React.js</li>
                <li>Database Design & Management</li>
                <li>Server-Side Development</li>
                <li>Web Security & Performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-year">2022 - 2024</div>
          <div className="education-content">
            <h3>Previous Institution</h3>
            <p className="education-degree">Computer Programming Diploma</p>
            <p className="education-description">
              Completed comprehensive programming curriculum covering fundamental 
              programming concepts, data structures, algorithms, and software development 
              methodologies. Developed strong problem-solving skills and programming fundamentals.
            </p>
            <div className="education-courses">
              <strong>Key Courses:</strong>
              <ul>
                <li>Programming Fundamentals</li>
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Software Engineering Principles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-year">2020 - 2022</div>
          <div className="education-content">
            <h3>High School</h3>
            <p className="education-degree">Secondary School Diploma</p>
            <p className="education-description">
              Completed secondary education with focus on mathematics and sciences. 
              Developed strong analytical thinking and communication skills that 
              serve as foundation for technical studies.
            </p>
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h3>Certifications & Training</h3>
        <div className="certifications-grid">
          <div className="certification-card">
            <h4>React.js Fundamentals</h4>
            <p>Comprehensive training in React.js development</p>
          </div>
          <div className="certification-card">
            <h4>JavaScript Advanced</h4>
            <p>Advanced JavaScript concepts and ES6+ features</p>
          </div>
          <div className="certification-card">
            <h4>Web Development Bootcamp</h4>
            <p>Full-stack web development intensive training</p>
          </div>
        </div>
      </div>
    </div>
  )
}