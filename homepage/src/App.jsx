import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <main className="portfolio-page">
        <Hero />
        <Experience />
        <Projects />

        <section id="contact" className="contact-section">
          <p className="section-kicker">Contact</p>
          <div className="contact-actions" aria-label="Contact links">
            <a
              className="contact-button"
              href="https://www.linkedin.com/in/nicolas-champion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-button"
              href="https://github.com/terrakorX"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="contact-button" href="mailto:nicolas.champion@example.com">
              Email
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
