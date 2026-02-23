import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectCard = ({ title, description, techStack, icon, bg, live, code }) => (
  <motion.div
    variants={fadeInUp}
    className="project-card bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
    whileHover={{ rotate: 1 }}
  >
    <div className={`h-48 ${bg} flex items-center justify-center`}>
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, i) => (
          <span key={i} className="bg-slate-600 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        {live === "Coming Soon" ? (
  <span className="text-gray-400 cursor-not-allowed flex items-center">
    <i className="fas fa-clock mr-1" />
    Coming Soon
  </span>
) : (
  <a
    href={live}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
  >
    <i className="fas fa-external-link-alt mr-1" />
    Live Demo
  </a>
)}
        <a href={code} className="text-blue-400 hover:text-blue-300 transition-colors">
          <i className="fab fa-github mr-1" /> Source Code
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one reflects creative solutions and modern tools.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
<ProjectCard
  title="CodeSync"
  description="A real-time collaborative code editor that lets developers effortlessly create, edit, and share code snippets with others. Designed to make teamwork faster, smoother, and more interactive."
  techStack={["Next.js", "TypeScript", "WebSockets","MongoDB"]}
  bg="bg-gradient-to-br from-green-400 to-teal-600"
  icon={
<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
<path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12h5" />
</svg>

  }
  live="https://code-sync-henna.vercel.app/"
  code="https://github.com/JashanGill04/CodeSync"
/>
         <ProjectCard
  title="Real-Time Chat App"
  description="A responsive web application built with modern technologies to provide an interractive chatting environment."
  techStack={["React", "Node.js", "MongoDB"]}
  bg="bg-gradient-to-br from-blue-400 to-indigo-600"
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 4h8m-2 4l4-4H6l4 4z" />
    </svg>
  }
  live="https://chat-app-rofr.onrender.com"
  code="https://github.com/JashanGill04/Chat-App"
/>

          <ProjectCard
  title="Health-Mate"
  description="An AI Powered health management system that helps users track their health metrics and provides personalized recommendations."
  techStack={["Node.js", "React", "Mongodb"]}
  bg="bg-gradient-to-br from-purple-400 to-pink-600"
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 3.25 3 6 3 6s3-2.75 3-6c0-1.657-1.343-3-3-3zM12 2a10 10 0 110 20 10 10 0 010-20z" />
    </svg>
  }
  live="https://health-mate-hs63.onrender.com"
  code="https://github.com/JashanGill04/Health-Mate"
/>

<ProjectCard
  title="EchoHub"
  description="A session-based local collaboration system enabling users to dynamically join and leave sessions with real-time chat, audio communication, and a shared whiteboard for seamless team collaboration."
  techStack={["Node.js", "JavaScript", "Socket.io", "SQL"]}
  bg="bg-gradient-to-br from-blue-500 to-indigo-600"
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  }
  live="Coming Soon"
  code="https://github.com/JashanGill04/EchoHub-Project.git"
/>

        </motion.div>



        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-block bg-transparent border border-slate-500 hover:border-white text-white px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
