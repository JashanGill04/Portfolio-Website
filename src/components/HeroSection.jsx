import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "../Effects/TypingEffect";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid and gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4b5563" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="text-center">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="gradient-text">Hello, I'm</span>
            <div className="mt-2">Jashanpreet Singh</div>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="text-xl md:text-2xl text-slate-300 mb-8"
            variants={fadeInUp}
          >
            <TypingEffect/>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex justify-center space-x-4 mb-12"
            variants={fadeInUp}
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-slate-500 hover:border-white text-white px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

        
        </div>
      </motion.div>

      {/* Scroll down icon */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-slate-400 hover:text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
