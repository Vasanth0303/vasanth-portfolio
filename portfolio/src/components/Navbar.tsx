import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("home");

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

            {/* HOME */}
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={linkClass("home")}
            >
              Home
              <span className={underline("home")}></span>
            </a>

            {/* SKILLS */}
            <a
              href="#skills"
              onClick={() => setActive("skills")}
              className={linkClass("skills")}
            >
              Skills
              <span className={underline("skills")}></span>
            </a>

            {/* PROJECTS */}
            <a
              href="#projects"
              onClick={() => setActive("projects")}
              className={linkClass("projects")}
            >
              Projects
              <span className={underline("projects")}></span>
            </a>

            {/* EXPERIENCE */}
            <a
              href="#experience"
              onClick={() => setActive("experience")}
              className={linkClass("experience")}
            >
              Experience
              <span className={underline("experience")}></span>
            </a>

            {/* EDUCATION */}
            <a
              href="#education"
              onClick={() => setActive("education")}
              className={linkClass("education")}
            >
              Education
              <span className={underline("education")}></span>
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={() => setActive("contact")}
              className={linkClass("contact")}
            >
              Contact
              <span className={underline("contact")}></span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Vasanth0303"
              target="_blank"
              onClick={() => setActive("github")}
              className={linkClass("github")}
            >
              GitHub
              <span className={underline("github")}></span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vasanth-j-078853393"
              target="_blank"
              onClick={() => setActive("linkedin")}
              className={linkClass("linkedin")}
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
