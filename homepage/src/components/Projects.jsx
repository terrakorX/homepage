import { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
    {
        title: "Company Data Crawler",
        image: "https://picsum.photos/seed/company-data/900/620",
        shortDescription: "Crawler Rust pour extraire et enrichir des donnees d'entreprises.",
        description:
            "Un crawler oriente performance pour recuperer, nettoyer et enrichir des donnees publiques d'entreprises francaises. Le projet combine Rust, expressions regulieres, Docker et pipeline CI/CD pour produire une extraction fiable et maintenable.",
        github: "https://github.com/",
    },
    {
        title: "Mapping Feature",
        image: "https://picsum.photos/seed/business-map/900/620",
        shortDescription: "Visualisation cartographique de donnees publiques agregees.",
        description:
            "Refonte d'une fonctionnalite de mapping pour rendre la visualisation des entreprises plus claire. Le systeme agrege plusieurs sources de donnees, les relie entre elles, puis les expose via une API utilisable par le front.",
        github: "https://github.com/",
    },
    {
        title: "Monitoring Module",
        image: "https://picsum.photos/seed/monitoring-dashboard/900/620",
        shortDescription: "Module de suivi des changements d'entreprises et secteurs.",
        description:
            "Un module de monitoring qui observe les changements d'activite, les nouvelles publications et les signaux importants dans plusieurs sources. Il ajoute des watchers, un scheduler maison et une distribution via API ou site web.",
        github: "https://github.com/",
    },
];

export default function Projects() {
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
        <section id="projects" className="projects-section">
            <div className="projects-heading">
                <p className="section-kicker">Selected work</p>
                <h2>Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <button
                        className="project-card"
                        key={project.title}
                        type="button"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.image} alt="" />
                        <div className="project-card-content">
                            <h3>{project.title}</h3>
                            <p>{project.shortDescription}</p>
                        </div>
                    </button>
                ))}
            </div>

            {selectedProject && (
                <div
                    className="project-modal-backdrop"
                    onClick={() => setSelectedProject(null)}
                    role="presentation"
                >
                    <article
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="project-modal-close"
                            type="button"
                            aria-label="Close modal"
                            onClick={() => setSelectedProject(null)}
                        >
                            x
                        </button>
                        <img src={selectedProject.image} alt="" />
                        <div className="project-modal-content">
                            <h3 id="project-modal-title">{selectedProject.title}</h3>
                            <p>{selectedProject.description}</p>
                            <a
                                className="project-github"
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit GitHub
                            </a>
                        </div>
                    </article>
                </div>
            )}
        </section>
    );
}
