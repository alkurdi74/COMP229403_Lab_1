import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App