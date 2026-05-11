import "./Navbar.css";
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
        <header className="portfolio-navbar" role="navigation" aria-label="Main">
            <div className="nav-inner">
                <div
                    className="brand"
                    onClick={() => {
                        scrollTo("home");
                    }}
                    title="Go to home"
                >
                    <span className="dot" />
                    <span>Nicolas Champion</span>
                </div>

                <nav className="nav-links" aria-label="Primary">
                    {links.map((l) => (
                        <div
                            key={l.id}
                            className={`nav-item ${active === l.id ? "active" : ""}`}
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
                        className="cta"
                        href={RESUME_URL || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        Resume
                    </a>
                </nav>

                <button
                    className="hamburger"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        // X icon
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        // Hamburger
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div className="mobile-menu" role="dialog" aria-modal="true">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ color: "white", fontWeight: 800 }}>Firstname Lastname</div>
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                fontSize: 20,
                            }}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>

                    <div className="mobile-links" role="menu">
                        {links.map((l) => (
                            <div
                                key={l.id}
                                className={`mobile-item ${active === l.id ? "active" : ""}`}
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
                            className="mobile-item"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            style={{ textDecoration: "none" }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
