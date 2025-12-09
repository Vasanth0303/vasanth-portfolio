import React from "react";
import Navbar from "./components/Navbar";
import Man from "./components/Man";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0b0f13] text-white min-h-screen">
      <Navbar />
      <Man />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
