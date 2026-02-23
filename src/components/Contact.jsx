import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Feel free to reach out via email or social media platforms below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

            <div className="flex items-start">
              <div className="bg-slate-700 rounded-full p-3 mr-4">
                <FaEnvelope className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <p className="text-slate-300">jpsgill20@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-700 rounded-full p-3 mr-4">
                <FaPhone className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <p className="text-slate-300">+91 6280079263</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-700 rounded-full p-3 mr-4">
                <FaMapMarkerAlt className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-slate-300">Amritsar, India</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/JashanGill04
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/jashanpreet-singh-34349a2b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a> */}
                <a
                  href="https://instagram.com/jashangill_6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Optional Message */}
          <motion.div
            className="bg-slate-700 rounded-lg p-8 flex flex-col items-center justify-center text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Let’s Connect!</h3>
            <p className="text-slate-300 mb-6">
              Prefer to reach out directly? Drop me an email or connect through my socials.
            </p>
            <a
              href="mailto:jpsgill6@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Say Hello 👋
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
