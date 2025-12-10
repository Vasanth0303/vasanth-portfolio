
import Navbar from "./components/Navbar";
import Man from "./components/Man";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

import useFadeAnimation from "./components/Animation"; // <-- NEW

function App() {
  useFadeAnimation(); // <-- NEW

  return (
    <div className="bg-[#0b0f13] text-white min-h-screen">
      <Navbar />

      <div className="fade-up"><Man /></div>
      <div className="fade-up"><Skills /></div>
      <div className="fade-up"><Projects /></div>
      <div className="fade-up"><Experience /></div>
      <div className="fade-up"><Education /></div>
      <div className="fade-up"><Contact /></div>
    </div>
  );
}

export default App;
