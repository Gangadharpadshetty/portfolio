import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Download, Mail, Sun, Moon } from "lucide-react";
import "./App.css";

const projects = [
  {
    title: "Animal Classification System",
    tech: "TensorFlow · EfficientNet · Deep Learning",
    role: "Final Year Project · 90 Animal Classes",
    image: "/assets/projects/animal-classification.png",
    github: "https://github.com/Gangadharpadshetty/animal_classification_system.git",
  },
  {
    title: "MonkeyEdit",
    tech: "Flask · OpenCV · Image Processing",
    role: "Built a web app to edit images with filters and effects",
    image: "/assets/projects/monkey-edit.png",
    github: "https://github.com/Gangadharpadshetty/MonkeyEdit.git",
  },
  {
    title: "Video Summarizer",
    tech: "LangChain · OpenAI · Python",
    role: "Summarizes uploaded videos using AI",
    image: "/assets/projects/video-summarizer.png",
    github: "https://github.com/Gangadharpadshetty/Vedio_summerizer.git",
  },
];

const timeline = [
  {
    year: "2025",
    title: "Final Year Project",
    description: "Developed an AI-based Animal Classification System using TensorFlow & EfficientNet.",
  },
  {
    year: "2023 - 2024",
    title: "AI Projects & Internships",
    description: "Worked on Flask-based applications like MonkeyEdit, participated in AI hackathons.",
  },
  {
    year: "2021 - 2025",
    title: "Bachelor's Degree in Computer Science",
    description: "Pursuing engineering degree with strong focus on AI, web development, and systems.",
  },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Navbar */}
      <motion.nav
        className={`flex justify-between items-center px-10 py-6 shadow-md fixed top-0 left-0 right-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-bold">Gangadhar Portfolio</h1>
        <div className="space-x-6 flex items-center">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#timeline" className="hover:text-blue-600 transition">Timeline</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex items-center hover:text-blue-600"
          >
            <Download className="w-4 h-4 mr-1" /> Resume
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="pt-32 pb-10 text-center px-5">
        <motion.h1
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          👋 Hi, I'm Gangadhar
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Software Developer | AI Enthusiast | Final Year Student
        </motion.p>
      </div>

      {/* Projects */}
      <div id="projects" className="py-10 px-5 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{proj.title}</h2>
                <p className="text-sm mt-1">{proj.tech}</p>
                <p className="text-sm mt-2">{proj.role}</p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div id="timeline" className="py-14 px-5 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📅 Timeline
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`border-l-4 pl-4 ${darkMode ? "border-blue-400" : "border-blue-600"}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm italic text-gray-500">{item.year}</p>
              <p className="mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        className={`py-16 text-center px-5 ${darkMode ? "bg-gray-800" : "bg-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
        <p className="mb-6">Feel free to reach out for collaboration or opportunities.</p>
        <a
          href="mailto:gangadharpadshetty@gmail.com"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg"
        >
          <Mail className="w-5 h-5 mr-2" /> gangadharpadshetty@gmail.com
        </a>
      </motion.div>
    </div>
  );
}
