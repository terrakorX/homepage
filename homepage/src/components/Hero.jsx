import heroArt from "../assets/hero.png";
import regexIcon from "../assets/regex.svg";
import "./Hero.css";

export default function Hero() {
    const tools = {front : [
        {
            name: "Vue.js", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
        },
        {
            name: "React", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
            name: "TypeScript", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },                
    ],
back :[ {
            name: "Python", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            name: "Rust", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
        },
    {
            name: "Node.js", logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        }],
        other:[ 
            {
                name: "Bash", logo:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            },
            {
            name: "Docker", logo:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        },
            {
            name: "Lua", logo:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg"
        },
        {
            name: "PostgreSQL", logo:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Redis", logo:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        },
        { name: "Regex", logo: regexIcon },
        {
            name: "Airflow", logo:
            "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/apacheairflow/apacheairflow-original.svg"
        },
]};


    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <p className="hero-eyebrow">Fullstack developer</p>
                <h1>
                    Hi, I&apos;m <span>Nicolas Champion</span>
                </h1>
                <p className="hero-copy">
                    Fullstack engineer who likes to create robust and performant systems using modern technologies.
                </p>

                <div className="hero-actions" aria-label="Primary actions">
                    <a className="hero-button hero-button--primary" href="#projects">
                        View projects
                    </a>
                    <a className="hero-button hero-button--ghost" href="#contact">
                        Contact me
                    </a>
                </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
                <div className="hero-card">
                    <div className="hero-avatar">NC</div>
                    <img src={heroArt} alt="" />
                    <div className="hero-status">
                        <span />
                        Available for opportunities
                    </div>
                </div>
            </div>

            <section id="about" className="about-strip" aria-label="About">
                <div>
                    <h1>Front</h1>
                    <div className="hero-tools" aria-label="Technologies">
                        {tools.front.map((tool) => (
                            <span key={tool.name}><img src={tool.logo} alt={tool.name} />
                                <p className="tool-label">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
                <div>
                    <h1>Back</h1>
                       <div className="hero-tools" aria-label="Technologies">
                        {tools.back.map((tool) => (
                            <span key={tool.name}><img src={tool.logo} alt={tool.name} />
                                <p className="tool-label">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
                <div>
                    <h1>Tools</h1>
                      <div className="hero-tools" aria-label="Technologies">
                        {tools.other.map((tool) => (
                            <span key={tool.name}><img src={tool.logo} alt={tool.name} />
                                <p className="tool-label">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
            </section>
        </section>
    );
}
