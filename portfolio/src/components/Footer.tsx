import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-10">
      <div className="section-inner text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} Vasanth J — MERN Stack Developer
      </div>
    </footer>
  );
};

export default Footer;
