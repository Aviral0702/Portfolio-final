import { motion } from "framer-motion";
import { Github } from "lucide-react";

const featured = {
  id: "querywise",
  title: "QueryWise",
  description:
    "A single-binary Go CLI that reads PostgreSQL pg_stat_statements and ranks expensive query patterns. SQL is fingerprinted locally and discarded; optional Claude tips send only fingerprints and metrics.",
  tags: ["Go", "PostgreSQL", "Claude API", "CLI"],
  github: "https://github.com/Aviral0702/QueryWiseProd",
};

const others = [
  {
    id: "rate-limiter",
    title: "API Rate Limiter",
    description: "Request-window limiter with Node.js, Express, Redis, and Docker.",
    tags: ["Node.js", "Redis", "Docker"],
    github: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
  },
  {
    id: "go-rest-api",
    title: "Go REST API + Helm",
    description: "REST API in Go, packaged with Helm for Kubernetes.",
    tags: ["Go", "Helm", "Kubernetes"],
    github: "https://github.com/Aviral0702/Go-Lang-REST-API-Helm-Chart",
  },
  {
    id: "performance-api",
    title: "Performance API",
    description: "Country search API with Redis cache on Cloudflare Workers.",
    tags: ["Hono", "Redis", "Workers"],
    github: "https://github.com/Aviral0702/PerformanceAPI",
  },
];

const Projects = () => (
  <section
    className="section-padding bg-spotify-dark-secondary section-rail"
    aria-labelledby="projects-heading"
  >
    <div className="container-max">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12 px-2.5"
      >
        <h2 id="projects-heading" className="section-heading mb-3">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider mb-4" />
        <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
          Backend and systems work — QueryWise first, then three supporting pieces.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-spotify album-card mb-6 flex flex-col md:flex-row gap-6 md:items-center"
      >
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md bg-spotify-green/20 text-4xl font-black text-spotify-green">
          Q
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-spotify-green mb-1">Featured</p>
          <h3 className="text-2xl font-bold text-spotify-text-primary mb-2">{featured.title}</h3>
          <p className="text-sm text-spotify-text-secondary mb-3">{featured.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {featured.tags.map((tag) => (
              <span key={tag} className="chip-spotify">{tag}</span>
            ))}
          </div>
          <a
            href={featured.github}
            target="_blank"
            rel="noreferrer"
            className="btn-spotify-ghost inline-flex items-center gap-2 text-sm"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </motion.article>

      <div className="grid gap-4 sm:grid-cols-3">
        {others.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-spotify album-card flex flex-col"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-spotify-green/15 text-lg font-black text-spotify-green">
              {project.title.charAt(0)}
            </div>
            <h3 className="text-lg font-bold text-spotify-text-primary mb-2">{project.title}</h3>
            <p className="text-sm text-spotify-text-secondary mb-3 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="chip-spotify">{tag}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-spotify-ghost inline-flex items-center justify-center gap-2 text-sm !py-2"
            >
              <Github size={14} />
              Code
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
