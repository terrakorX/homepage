import regexIcon from "../assets/regex.svg";
import PP from "../assets/PP.png";
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
            "https://raw.githubusercontent.com/devicons/devicon/7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/apacheairflow/apacheairflow-original.svg"
        },
]};


    return (
        <section id="home" className="relative min-h-[calc(100svh-72px)] px-6 py-24 pb-14 overflow-hidden grid grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] gap-14 items-center before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_22%_18%,rgba(124,58,237,0.26),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(6,182,212,0.22),transparent_30%),linear-gradient(135deg,#07070a_0%,#11121a_48%,#071316_100%)] after:content-[''] after:absolute after:inset-0 after:-z-10 after:opacity-28 after:bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] after:[background-size:72px_72px] after:[mask-image:linear-gradient(to_bottom,black,transparent_82%)] max-lg:grid-cols-1 max-lg:pt-16 max-lg:gap-[42px] max-sm:px-4 max-sm:py-12 max-sm:pb-10">
            <div className="max-w-[680px] text-left max-lg:text-center max-lg:mx-auto">
                <p className="mb-4 text-cyan-300 text-xs font-extrabold tracking-[0.14em] uppercase">Fullstack developer</p>
                <h1 className="m-0 text-white text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] font-extrabold">
                    Hi, I&apos;m <span className="block text-transparent bg-linear-to-r from-white via-purple-300 to-cyan-300 bg-clip-text">Nicolas Champion</span>
                </h1>
                <p className="max-w-[600px] mt-7 text-white/72 text-lg leading-[1.75] max-lg:mx-auto">
                    Fullstack engineer who likes to create robust and performant systems using modern technologies.
                </p>

                <div className="flex flex-wrap gap-3.5 mt-8 max-lg:justify-center max-sm:flex-col" aria-label="Primary actions">
                    <a className="inline-flex items-center justify-center min-h-12 px-5 rounded-lg font-extrabold no-underline transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-0.5 text-white bg-linear-to-r from-purple-600 to-cyan-400" href="#projects">
                        View projects
                    </a>
                    <a className="inline-flex items-center justify-center min-h-12 px-5 rounded-lg font-extrabold no-underline transition-[transform,border-color,background] duration-180 ease-in-out hover:-translate-y-0.5 text-white border border-white/18 bg-white/5 max-sm:w-full max-sm:box-border" href="#contact">
                        Contact me
                    </a>
                </div>
            </div>

            <div className="flex justify-center" aria-hidden="true">
                <div className="relative w-[min(100%,410px)] aspect-[0.82] p-7 border border-white/16 rounded-lg bg-linear-to-b from-white/14 to-white/4 bg-[rgba(10,11,18,0.7)] shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    <div className="relative w-full h-[110%] grid place-items-center rounded-lg overflow-hidden text-white text-[clamp(4rem,9vw,8rem)] font-black bg-linear-to-br from-purple-600/80 to-cyan-400/62 bg-[#14151f]">
                        <img src={PP} alt="" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg opacity-100 drop-shadow-[0_20px_35px_rgba(124,58,237,0.36)]" />
                    </div>
                    <div className="absolute left-7 right-7 bottom-7 flex items-center gap-2.5 min-h-[52px] px-4 rounded-lg text-white bg-[rgba(7,8,13,0.82)] border border-white/10 font-extrabold">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]" />
                        Available for opportunities
                    </div>
                </div>
            </div>

            <section id="about" className="col-span-full grid grid-cols-3 gap-px mt-7 border border-white/10 bg-white/10 rounded-lg overflow-hidden max-lg:grid-cols-1" aria-label="About">
                <div className="p-5.5 bg-[rgba(7,8,13,0.8)] text-left">
                    <h1 className="text-cyan-300 text-xs font-black">Front</h1>
                    <div className="flex flex-wrap gap-2.5 mt-8" aria-label="Technologies">
                        {tools.front.map((tool) => (
                            <span key={tool.name} className="group inline-flex items-center gap-1.5 border border-white/14 rounded-full px-3 py-1.5 text-white/78 bg-white/6 text-sm font-bold">
                                <img src={tool.logo} alt={tool.name} className="w-7.5 h-7.5" />
                                <p className="hidden group-hover:inline">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
                <div className="p-5.5 bg-[rgba(7,8,13,0.8)] text-left">
                    <h1 className="text-cyan-300 text-xs font-black">Back</h1>
                       <div className="flex flex-wrap gap-2.5 mt-8" aria-label="Technologies">
                        {tools.back.map((tool) => (
                            <span key={tool.name} className="group inline-flex items-center gap-1.5 border border-white/14 rounded-full px-3 py-1.5 text-white/78 bg-white/6 text-sm font-bold">
                                <img src={tool.logo} alt={tool.name} className="w-7.5 h-7.5" />
                                <p className="hidden group-hover:inline">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
                <div className="p-5.5 bg-[rgba(7,8,13,0.8)] text-left">
                    <h1 className="text-cyan-300 text-xs font-black">Tools</h1>
                      <div className="flex flex-wrap gap-2.5 mt-8" aria-label="Technologies">
                        {tools.other.map((tool) => (
                            <span key={tool.name} className="group inline-flex items-center gap-1.5 border border-white/14 rounded-full px-3 py-1.5 text-white/78 bg-white/6 text-sm font-bold">
                                <img src={tool.logo} alt={tool.name} className="w-7.5 h-7.5" />
                                <p className="hidden group-hover:inline">{tool.name}</p>
                            </span>
                    ))}
                </div>
                </div>
            </section>
        </section>
    );
}
