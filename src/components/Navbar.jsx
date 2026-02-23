import React, { useState } from "react";
import { FaMoon, FaBars } from "react-icons/fa";
import DarkModeToggle from "../Effects/DarkModeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-10 backdrop-blur-md bg-slate-900/80 border-b border-slate-800"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Portfolio
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-slate-300 hover:text-white capitalize transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Icons: Theme toggle + Mobile menu */}
        <div className="flex items-center space-x-4">
        

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 w-full animate-slide-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {["home", "about", "projects", "skills", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white py-2 capitalize"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
