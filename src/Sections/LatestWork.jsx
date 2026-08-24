"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// Sample project data - moved outside component to prevent recreation on each render
const projectsData = [
  {
    id: "querywise",
    title: "QueryWise",
    description:
      "Cloud DB cost optimization CLI in Go. Reads PostgreSQL pg_stat_statements, ranks expensive query patterns, fingerprints SQL locally so raw queries never leave the machine, and optionally asks Claude for tuning tips using fingerprints and metrics only.",
    tags: ["Go", "PostgreSQL", "Claude API", "CLI"],
    demoLink: "",
    codeLink: "https://github.com/Aviral0702/QueryWiseProd",
    image: null,
  },
  {
    id: "rate-limiter",
    title: "API Rate Limiter",
    description:
      "An API rate limiter that caps how many requests a client can make in a time window, built with Node.js, Express, Redis, Docker, and MongoDB.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    demoLink: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
    codeLink: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
    image: null,
  },
];

// Animation variants - moved outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Separate component for project card to improve readability
const ProjectCard = ({ project }) => (
  <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
    <div className="group h-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-all duration-300 rounded-xl flex flex-col">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-slate-800 flex items-center justify-center">
            <span className="text-slate-300 font-medium">{project.title}</span>
          </div>
        )}
      </div>
      <div className="p-6 pt-5 flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tech, index) => (
            <span
              key={`${project.id}-tag-${index}`}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/50 text-purple-300 border border-purple-500/20 hover:bg-slate-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        )}
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label={`View source code of ${project.title}`}
        >
          <Github className="mr-2 h-4 w-4" />
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

export default function LatestWork() {
  // We don't need useState since the data is static and defined outside
  const latestProjects = projectsData;
  
  return (
    <section
      id="latest-work"
      className="py-12 md:py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Latest{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Work
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              QueryWise is the project on my current resume. Also included is a backend systems project that matches how I work today.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap -mx-4" // Using flexbox with negative margin for proper spacing
        >
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md text-base md:text-lg font-medium h-12 md:h-14 px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}