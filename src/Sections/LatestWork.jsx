"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
    <div className="group h-full card-spotify overflow-hidden hover:border-spotify-green/50 transition-all duration-300 rounded-xl flex flex-col">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-spotify-dark to-transparent z-10 opacity-60"></div>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-spotify-dark-tertiary flex items-center justify-center">
            <span className="text-spotify-text-secondary font-medium">{project.title}</span>
          </div>
        )}
      </div>
      <div className="p-6 pt-5 flex-grow">
        <h3 className="text-xl font-bold text-spotify-text-primary mb-3 group-hover:text-spotify-green transition-colors">
          {project.title}
        </h3>
        <p className="text-spotify-text-secondary mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tech, index) => (
            <span
              key={`${project.id}-tag-${index}`}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-spotify-dark-tertiary text-spotify-text-secondary border border-spotify-border hover:border-spotify-green/50 transition-colors"
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
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-spotify-green hover:bg-spotify-green-hover text-spotify-dark transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-spotify-green focus:ring-offset-2 focus:ring-offset-spotify-dark"
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
          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-transparent border border-spotify-border text-spotify-text-secondary hover:bg-spotify-dark-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-spotify-border focus:ring-offset-2 focus:ring-offset-spotify-dark"
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
      className="section-padding bg-spotify-dark"
    >
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-2.5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-spotify-text-primary mb-3 sm:mb-4">
            Latest{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-spotify-gradient mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-spotify-text-secondary mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            QueryWise is the project on my current resume, plus a backend systems project that matches how I work today.
          </p>
        </motion.div>

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
          className="text-center mt-16"
        >
          <a
            href="#projects"
            className="btn-spotify inline-flex items-center justify-center text-base md:text-lg font-medium h-12 md:h-14 px-6 md:px-8 py-4 md:py-6"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}