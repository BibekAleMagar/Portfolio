import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/Education'
import Skill from './Components/Skill'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skill />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
