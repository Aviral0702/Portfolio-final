"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    id: "querywise",
    title: "QueryWise",
    description:
      "A single-binary Go CLI that reads PostgreSQL pg_stat_statements and ranks the most expensive query patterns. Query text is fingerprinted locally and discarded; optional Claude recommendations send only fingerprints and metrics.",
    tags: ["Go", "PostgreSQL", "Claude API", "CLI"],
    link: "",
    github: "https://github.com/Aviral0702/QueryWiseProd",
  },
  {
    id: "rate-limiter",
    title: "API Rate Limiter",
    description:
      "An API rate limiter that limits the number of requests a user can make to an API within a given time frame, built with Node.js, Express, Redis, Docker, and MongoDB.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    link: "",
    github: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
  },
  {
    id: "go-rest-api",
    title: "Go REST API with Helm Chart",
    description: "A REST API built using Golang and Helm chart for deploying the application on Kubernetes.",
    tags: ["Golang", "Helm", "Kubernetes"],
    link: "",
    github: "https://github.com/Aviral0702/Go-Lang-REST-API-Helm-Chart",
  },
  {
    id: "performance-api",
    title: "Performance API",
    description:
      "A search API for countries with guaranteed fast response times via Redis caching and Cloudflare Workers, built with Hono and Upstash.",
    tags: ["Hono", "Redis", "Cloudflare Workers", "TypeScript"],
    link: "",
    github: "https://github.com/Aviral0702/PerformanceAPI",
  },
]

const ProjectCard = ({ title, description, tags, link, github, isActive, index }) => (
  <motion.div
    className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden relative scroll-snap-align-center rounded-md transition-all duration-500 ease-in-out card-spotify album-card p-0 ${
      isActive ? "scale-100 opacity-100 z-10 border-spotify-green/40" : "scale-95 opacity-70 z-0"
    }`}
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: isActive ? 1 : 0.7,
      y: 0,
      scale: isActive ? 1 : 0.95,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }}
    layout
  >
    <div className="absolute inset-0 bg-gradient-to-t from-spotify-dark via-spotify-dark/80 to-transparent z-[1]" />

    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 relative z-10">
      <div className="flex flex-col h-full">
        <div className="mb-3 sm:mb-4">
          <div className="w-10 h-10 rounded-md bg-spotify-green/20 flex items-center justify-center mb-3 text-spotify-green font-black text-lg">
            {title.charAt(0)}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-spotify-text-primary mb-2 tracking-tight">{title}</h3>
          <div className="w-12 sm:w-16 h-1 bg-spotify-gradient rounded-full" />
        </div>

        <p className="text-xs sm:text-sm md:text-base text-spotify-text-secondary mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4 max-w-prose">{description}</p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span key={`${tag}-${i}`} className="chip-spotify">{tag}</span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 btn-spotify !py-2 text-xs sm:text-sm"
              aria-label={`Visit ${title} website`}
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              <span>Visit</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 btn-spotify-ghost text-xs sm:text-sm"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      if (isScrolling) return

      const scrollLeft = carousel.scrollLeft
      let cardWidth
      if (window.innerWidth < 640) cardWidth = 280 + 24
      else if (window.innerWidth < 768) cardWidth = 320 + 24
      else if (window.innerWidth < 1024) cardWidth = 400 + 32
      else cardWidth = 450 + 32

      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, projectsData.length - 1))
    }

    carousel.addEventListener("scroll", handleScroll)
    return () => carousel.removeEventListener("scroll", handleScroll)
  }, [isScrolling])

  const scrollToIndex = (index) => {
    const carousel = carouselRef?.current
    if (!carousel) return

    const safeIndex = Math.max(0, Math.min(index, projectsData.length - 1))
    setActiveIndex(safeIndex)

    let cardWidth
    if (window.innerWidth < 640) cardWidth = 280 + 24
    else if (window.innerWidth < 768) cardWidth = 320 + 24
    else if (window.innerWidth < 1024) cardWidth = 400 + 32
    else cardWidth = 450 + 32

    setIsScrolling(true)
    carousel.scrollTo({ left: safeIndex * cardWidth, behavior: "smooth" })
    setTimeout(() => setIsScrolling(false), 500)
  }

  const scrollCarousel = (direction) => {
    const newIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(projectsData.length - 1, activeIndex + 1)
    scrollToIndex(newIndex)
  }

  return (
    <section
      className="section-padding bg-spotify-dark-secondary flex flex-col items-center overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="container-max w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 px-2.5"
        >
          <h2 id="projects-heading" className="section-heading mb-3 sm:mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mb-4 sm:mb-6" />
          <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Curated backend and systems projects — focused on production engineering.
          </p>
        </motion.div>

        <div className="relative w-full">
          <AnimatePresence>
            {activeIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => scrollCarousel("left")}
                className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 glass rounded-full hover:border-spotify-green/50 transition-all duration-300 flex items-center justify-center"
                aria-label="View previous project"
              >
                <ArrowLeftCircle size={20} className="sm:w-6 sm:h-6 text-spotify-text-primary" />
              </motion.button>
            )}
            {activeIndex < projectsData.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scrollCarousel("right")}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 glass rounded-full hover:border-spotify-green/50 transition-all duration-300 flex items-center justify-center"
                aria-label="View next project"
              >
                <ArrowRightCircle size={20} className="sm:w-6 sm:h-6 text-spotify-text-primary" />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4 hide-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                isActive={index === activeIndex}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-spotify-green w-8"
                    : "bg-spotify-dark-tertiary hover:bg-spotify-text-tertiary"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
