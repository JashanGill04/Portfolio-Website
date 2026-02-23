import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto" />
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} {...skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Skill Card with Animation
const SkillItem = ({ icon, bgColor, textColor, name, delay }) => (
  <motion.div
    className="bg-slate-800 rounded-xl p-4 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div
      className={`${bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
    >
      <i className={`${icon} ${textColor} text-3xl`} aria-hidden="true"></i>
    </div>
    <h3 className="font-medium">{name}</h3>
  </motion.div>
);

// Skills Data
const skillsData = [
  // Languages
  { icon: "fab fa-js", bgColor: "bg-yellow-500/20", textColor: "text-yellow-400", name: "JavaScript" },
  { icon: "fab fa-java", bgColor: "bg-red-500/20", textColor: "text-red-400", name: "Java" },
  { icon: "fas fa-code", bgColor: "bg-blue-500/20", textColor: "text-blue-400", name: "C++" },

  // Frontend (minimal)
  { icon: "fab fa-react", bgColor: "bg-cyan-500/20", textColor: "text-cyan-400", name: "React" },
  { icon: "fas fa-code", bgColor: "bg-indigo-500/20", textColor: "text-indigo-400", name: "Next.js" },

  // Backend
  { icon: "fab fa-node-js", bgColor: "bg-green-500/20", textColor: "text-green-400", name: "Node.js" },
  { icon: "fas fa-server", bgColor: "bg-purple-500/20", textColor: "text-purple-400", name: "Express.js" },
  { icon: "fas fa-network-wired", bgColor: "bg-pink-500/20", textColor: "text-pink-400", name: "Socket.io" },

  // Databases
  { icon: "fas fa-leaf", bgColor: "bg-green-500/20", textColor: "text-green-400", name: "MongoDB" },
  { icon: "fas fa-database", bgColor: "bg-indigo-500/20", textColor: "text-indigo-400", name: "MySQL" },

  // Tools / Architecture
  { icon: "fas fa-code-branch", bgColor: "bg-orange-500/20", textColor: "text-orange-400", name: "Git & GitHub" },
  { icon: "fas fa-cubes", bgColor: "bg-teal-500/20", textColor: "text-teal-400", name: "REST APIs" },
];

export default Skills;
