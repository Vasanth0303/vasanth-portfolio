import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

  const sections = [
    "home",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  // Auto detect section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // adjust offset

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // styling helpers
  const linkClass = (name: string) =>
    `relative pb-1 hover:text-[var(--accent)] transition ${
      active === name ? "text-[var(--accent)]" : ""
    }`;

  const underline = (name: string) =>
    `absolute left-0 bottom-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
      active === name ? "w-full" : "w-0"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="section-inner px-4 py-4 flex items-center justify-center">
        <div className="text-center">

          {/* Name */}
          <div className="text-lg font-semibold text-white" style={{ letterSpacing: 0.2 }}>
            Vasanth J
          </div>

          {/* Navigation */}
          <nav className="mt-2 hidden md:flex gap-6 text-sm text-muted">

            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setActive(sec)}
                className={linkClass(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                <span className={underline(sec)}></span>
              </a>
            ))}

            {/* GITHUB */}
            <a
              href="https://github.com/Vasanth0303"
              target="_blank"
              className={linkClass("github")}
              onClick={() => setActive("github")}
            >
              GitHub
              <span className={underline("github")}></span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vasanth-j-078853393"
              target="_blank"
              className={linkClass("linkedin")}
              onClick={() => setActive("linkedin")}
            >
              LinkedIn
              <span className={underline("linkedin")}></span>
            </a>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
