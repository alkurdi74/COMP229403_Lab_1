import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">My Portfolio</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/project" className="nav-link">Project</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/counter" className="nav-link">Counter</Link>
        </nav>
      </header>
      <hr className="divider" />
    </div>
  )
}