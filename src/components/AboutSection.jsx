import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.jpg";
const AboutSection = () => {
  const name = "Jashanpreet Singh";
  const email = "jpsgill20@gmail.com";
  const location = "Amritsar, India";
  const availability = "Available for freelance & full-time";

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
        </div>

       
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Profile Picture */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="p-1 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg">
      <div className="bg-slate-800 rounded-lg overflow-hidden">
        <img
          src={image} // You can replace this with a URL or use an import
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </motion.div>



          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-slate-300 mb-4">
           I’m a passionate full-stack developer with a strong focus on backend engineering. I enjoy designing scalable APIs, efficient databases, and robust server-side logic that power seamless web experiences. My journey began with curiosity and has evolved into a mission to build reliable, performance-driven applications.
            </p>
            <p className="text-slate-300 mb-6">
I aim to build products that are robust under the hood, with well-structured APIs and efficient data handling. I continuously explore new backend tools and technologies to improve performance, scalability, and reliability.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm sm:text-base">
              <div>
                <p className="text-slate-400">Name:</p>
                <p className="font-medium">{name}</p>
              </div>
              <div>
                <p className="text-slate-400">Email:</p>
                <p className="font-medium">{email}</p>
              </div>
              <div>
                <p className="text-slate-400">Location:</p>
                <p className="font-medium">{location}</p>
              </div>
              <div>
                <p className="text-slate-400">Availability:</p>
                <p className="font-medium">{availability}</p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/JashanSingh_Resume.pdf"
              download
              className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105"
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
