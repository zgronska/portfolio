import Hero from 'Components/Hero'
import About from 'Components/About'
import Tech from 'Components/Tech'
import Projects from 'Components/Projects'
import Contact from 'Components/Contact'
import Footer from 'Components/Footer'

export default function App() {
  return (
    <>
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
