import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import useContent from './hooks/useContent'

function App() {
  const { contact } = useContent()

  return (
    <>
      <Navbar />
      <main className="min-h-[100svh] bg-[#0b0c12]">
        <Hero />
        <Experience />
        <Projects />

        <section id="contact" className="flex flex-col items-center px-6 py-24 pb-[120px] text-white text-center border-t border-white/5 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_34%)] bg-[#0b0c12] max-sm:px-4 max-sm:py-[72px] max-sm:pb-24">
          <p className="mb-4 text-cyan-300 text-xs font-extrabold tracking-[0.14em] uppercase">{contact.subtitle}</p>
          <div className="flex justify-center flex-wrap gap-3.5 mt-3 max-sm:flex-col max-sm:w-full" aria-label="Contact links">
            <a
              className="inline-flex items-center justify-center min-w-[140px] min-h-12 px-5 border border-white/14 rounded-lg text-white bg-white/[0.045] font-extrabold no-underline transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-3 max-sm:w-full"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="inline-flex items-center justify-center min-w-[140px] min-h-12 px-5 border border-white/14 rounded-lg text-white bg-white/[0.045] font-extrabold no-underline transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-3 max-sm:w-full"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="inline-flex items-center justify-center min-w-[140px] min-h-12 px-5 border border-white/14 rounded-lg text-white bg-white/[0.045] font-extrabold no-underline transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-0.5 hover:border-cyan-300/55 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-3 max-sm:w-full" href={`mailto:${contact.email}`}>
              Email
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
