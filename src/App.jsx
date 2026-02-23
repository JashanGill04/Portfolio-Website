import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Services from "./components/Skills";
import Projects from "./components/ProjectSection";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animate only once per scroll
    });
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

    </div>
  );
};

export default App;
