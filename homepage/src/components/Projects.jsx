import { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
    {
        title: "Reddit Crawler",
        image: "https://redditinc.com/hs-fs/hubfs/Reddit%20Inc/Content/Brand%20Page/Reddit_Logo.png?width=400&height=400&name=Reddit_Logo.png",
        shortDescription: "Crawler reddit to make stats on post.",
        description:
            "I realised a crawler with selenium that crawl data of post and make data out of it.",
        github: "https://github.com/terrakorX",
    },
    {
        title: "airbnb pipeline",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        shortDescription: "crawl and extract airbnb data to make stats other appartment on the platform and automatise it with airflow.",
        description:
            `A full data engineering project built around Airbnb open data to simulate a real-world analytics pipeline.
The project collects raw datasets from Inside Airbnb and external market sources, processes and cleans the data, stores it in a PostgreSQL warehouse, and generates business KPIs and analytical reports.

Designed as a training project for modern data workflows, it covers the complete lifecycle of a batch ETL pipeline`,
        github: "https://github.com/terrakorX",
    },
    {
        title: "Gamebook",
        image: "https://click-quest.com/logo.png",
        shortDescription: "Creation of an interactive book fantasy adventure.",
        description:
            "An interactive website where you can play fantasy adventure, without worrying about the dice pen or paper",
        github: "https://github.com/terrakorX",
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
                        <img  className="project-image" src={project.image} alt="" />
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
