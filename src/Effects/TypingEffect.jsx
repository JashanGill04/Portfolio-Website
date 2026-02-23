import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "Backend Developer",
  "Full Stack Engineer",
  "Java & Node.js (Backend)",
  "Problem Solver"
];
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TypingEffect = () => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[wordIndex % titles.length];
    let typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCurrentText(currentWord.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      if (!isDeleting && updatedCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <motion.div
      className="text-xl md:text-2xl text-slate-300 mb-8"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <span>{currentText}</span>
      <span className="text-blue-400 animate-pulse">|</span>
    </motion.div>
  );
};

export default TypingEffect;
