import "./Experience.css";
import logoSociete from "../assets/Logo_Societe.png"
import logoVinci from "../assets/Vinci_logo.png"
import logoSfr from "../assets/SFR-2022-logo.svg"
const experiences = [
    {
        period: "August 2022 -  May 2025",
        role: "Fullstack Developer",
        company: "Societe.com",
        description:
            [`I lead the development of a crawler (Rust) to accurately extract French company data in order
            to enriched public data (INSEE, BODACC), using Regex, docker and CI/CD pipeline.`, `
            Redesigned SOCIETE's mapping feature to improve company data visualization and usability
            by aggregating and linking public data (IMR, INSEE) using Rust, Redis, Lua, and deploying
the updated system throught an API.`,
            `Rebuilt a monitoring module to track company changes and sector activity in France, adding
features such as watchers, integrating new data sources (BODACC, JAL) into a homemade
scheduler, and distributing via API or website (Node.js).`],
                image : logoSociete,
                        stack: ["Rust", "Python", "Nodes.js", "Docker", "Redis", "PSQL"],
    },
    {
        period: "November 2021 - May 2022",
        role: "Fullstack Developer",
        company: "Vinci",
        description:[
            `I lead the internalisation of a web solution enabling manual or AI-assisted defect annotation
on roads, streamlining repairs based on mobile video footage.`, `
            Supervised data science interns in computer vision, providing a stable development
environment and challenging their hardware needs`],
image: logoVinci,
            stack: ["Python", "React", "Azure", "Docker"],
    },
    {
       period: "May 2021 -  November 2021",
       role: "Full Stack Developer in R&D",
       company: "SFR",
       description:
           [`Managed the front-end for a proof-of-concept solving the "last mile" issue for fiber installers in
SFR's B2B branch.`,`
Industrialized an AI model (Python) and built an API from a data scientist's notebook to
streamline client follow-ups.`,
`Redesigned acritical billing system (Python) for the B2B segment.`
           ],
           image: logoSfr,
               stack: ["Python", "AI", "Vue.js"],
   },
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-heading">
                <p className="section-kicker">Experience</p>
                <h2>Work built around interface quality and steady delivery.</h2>
            </div>

            <div className="experience-list">
                {experiences.map((item) => (
                    <article className="experience-item" key={`${item.period}-${item.role}`}>
                        <div className="experience-time">{item.period}</div>
                        <div className="experience-body">
                            <div>
                                <h3>{item.role}</h3>
                                <p className="experience-company">{item.company}</p>
                                <div className="experience-desc-wrapper">
                                    <img className="exeperience-logo" src={item.image} alt={item.image} />
                                    <ul className="experience-description">
                                        {item.description.map((desc) => (
                                            <li key={desc}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="experience-stack">
                                    {item.stack.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
