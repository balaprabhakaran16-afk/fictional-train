import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-[#020617] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Experience />

      <Contact />

      <Footer />

    </main>
  )
}

export default App