import { useState, useEffect } from "react";
const RESUME_URL =import.meta.env.VITE_RESUME_URL
console.log("Resume URL:", RESUME_URL);
const links = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    // Scroll to section smoothly
    const scrollTo = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // update hash without jumping
            history.replaceState(null, "", `#${id}`);
        } else {
            // fallback: set hash
            window.location.hash = `#${id}`;
        }
    };

    // Update active link on scroll
    useEffect(() => {
        const handleScroll = () => {
            // choose the section nearest to top (offset 120 for navbar height)
            const offset = 140;
            let nearest = "home";
            let minDist = Infinity;
            links.forEach((l) => {
                const el = document.getElementById(l.id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const dist = Math.abs(rect.top - offset);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = l.id;
                }
            });
            setActive(nearest);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-linear-to-b from-[rgba(19,19,21,0.6)] to-[rgba(19,19,21,0.35)] border-b border-white/5" role="navigation" aria-label="Main">
            <div className="max-w-[1100px] mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
                <div
                    className="flex items-center gap-2.5 text-white font-bold no-underline cursor-pointer"
                    onClick={() => {
                        scrollTo("home");
                    }}
                    title="Go to home"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-purple-600 to-cyan-400" />
                    <span>Nicolas Champion</span>
                </div>

                <nav className="flex gap-4 items-center max-md:hidden" aria-label="Primary">
                    {links.map((l) => (
                        <div
                            key={l.id}
                            className={`text-white/75 px-2.5 py-2 rounded-md no-underline cursor-pointer transition-all duration-150 font-medium text-sm hover:text-white hover:-translate-y-0.5 ${active === l.id ? "text-white bg-linear-to-r from-purple-600/12 to-cyan-400/8 shadow-[inset_0_-2px_0_rgba(255,255,255,0.03)]" : ""}`}
                            onClick={() => scrollTo(l.id)}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") scrollTo(l.id);
                            }}
                        >
                            {l.label}
                        </div>
                    ))}
                    <a
                        className="bg-linear-to-r from-purple-600 to-cyan-400 text-white px-3 py-1.5 rounded-lg font-semibold border-none cursor-pointer no-underline"
                        href={RESUME_URL || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        Resume
                    </a>
                </nav>

                <button
                    className="hidden max-md:block bg-transparent border-none cursor-pointer text-white"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div className="fixed inset-0 z-60 flex flex-col px-5 py-10 gap-4 bg-linear-to-b from-[rgba(6,6,7,0.96)] to-[rgba(12,12,13,0.98)]" role="dialog" aria-modal="true">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-extrabold">Nicolas Champion</div>
                        <button
                            onClick={() => setOpen(false)}
                            className="bg-transparent border-none text-white cursor-pointer text-xl"
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>

                    <div className="flex flex-col gap-1 mt-6" role="menu">
                        {links.map((l) => (
                            <div
                                key={l.id}
                                className={`text-white/90 px-4 py-3.5 rounded-lg bg-white/[0.02] cursor-pointer font-semibold ${active === l.id ? "bg-linear-to-r from-purple-600/14 to-cyan-400/6" : ""}`}
                                onClick={() => scrollTo(l.id)}
                                role="menuitem"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") scrollTo(l.id);
                                }}
                            >
                                {l.label}
                            </div>
                        ))}
                        <a
                            className="text-white/90 px-4 py-3.5 rounded-lg bg-white/[0.02] cursor-pointer font-semibold no-underline"
                            href={RESUME_URL || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
