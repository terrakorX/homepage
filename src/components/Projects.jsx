import { useEffect, useState } from "react";
import useContent from '../hooks/useContent'

export default function Projects() {
  const { projects } = useContent()
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-6 py-24 text-white bg-[#0b0c12] border-t border-white/5 max-sm:px-4 max-sm:py-[72px]">
      <div className="max-w-[820px] mb-11 text-left max-sm:text-center max-sm:mx-auto">
        <p className="mb-4 text-cyan-300 text-xs font-extrabold tracking-[0.14em] uppercase">Selected work</p>
        <h2 className="m-0 text-white text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-extrabold">Projects</h2>
      </div>

      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project) => (
          <button
            className="flex flex-col min-w-0 p-0 overflow-hidden border border-white/10 rounded-lg text-inherit bg-white/[0.035] cursor-pointer text-left transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-1 hover:border-cyan-300/55 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-[3px]"
            key={project.title}
            type="button"
            onClick={() => setSelectedProject(project)}
          >
            <img className="w-[200px] h-[180px] block mx-auto mt-5.5 object-contain object-center p-[18px] rounded-lg bg-white/[0.04] box-border" src={project.image} alt="" />
            <div className="p-5.5">
              <h3 className="m-0 text-white text-[1.28rem] leading-[1.2]">{project.title}</h3>
              <p className="mt-3 text-white/68 leading-[1.55]">{project.shortDescription}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-100 grid place-items-center p-6 bg-[rgba(2,3,8,0.78)] backdrop-blur-xl max-sm:p-3.5"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <article
            className="relative w-[min(920px,100%)] max-h-[min(820px,calc(100svh-48px))] overflow-auto border border-white/14 rounded-lg bg-[#10121b] max-sm:max-h-[calc(100svh-28px)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-3.5 right-3.5 z-1 w-[38px] h-[38px] border border-white/16 rounded-lg text-white bg-[rgba(6,7,12,0.72)] cursor-pointer text-xl font-black leading-none"
              type="button"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>
            <img className="w-full h-60 object-contain object-center p-6 box-border bg-white/[0.035] block" src={selectedProject.image} alt="" />
            <div className="p-7.5 text-left max-sm:p-5.5">
              <h3 id="project-modal-title" className="m-0 text-white text-[clamp(1.8rem,4vw,3rem)] leading-[1.05]">{selectedProject.title}</h3>
              <p className="max-w-[760px] mt-[18px] text-white/72 leading-[1.75]">{selectedProject.description}</p>
              {!selectedProject.DisableGithub && (
                <a
                  className="inline-flex items-center justify-center min-h-[46px] mt-[26px] px-[18px] rounded-lg text-white bg-linear-to-r from-purple-600 to-cyan-400 font-extrabold no-underline focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-[3px]"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
