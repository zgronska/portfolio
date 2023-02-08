import React from 'react'
import Hero from 'Components/Hero'
import About from 'Components/About'
import Tech from 'Components/Tech'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import Footer from 'Components/Footer'
import CssBaseline from '@mui/material/CssBaseline'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Hero />
      <main>
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
