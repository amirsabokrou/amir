import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollSpy } from './hooks/useScrollSpy'

const sectionIds = ['home', 'about', 'services', 'work', 'process', 'contact']

export default function App() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
