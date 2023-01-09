import React from 'react'

import Home from './components/Sections/Home/Home'
import About from './components/Sections/About/About'
import Skills from './components/Sections/Skills/Skills'
import Experience from './components/Sections/Experience/Experience'
import Projects from './components/Sections/Projects/Projects'
import Contact from './components/Sections/Contact/Contact'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'

export default function Page() {
  return (
    <>
      <Header />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      <Footer />
    </>
  )
}
