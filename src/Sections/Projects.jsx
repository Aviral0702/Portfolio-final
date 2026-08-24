"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    id: "querywise",
    title: "QueryWise",
    description:
      "A single-binary Go CLI that reads PostgreSQL pg_stat_statements and ranks the most expensive query patterns by a weighted cost heuristic across execution time, I/O, and call frequency. Query text is fingerprinted locally via SHA-256/HMAC and discarded so raw SQL is never stored. Optional Claude recommendations send only fingerprints and metrics. Exports terminal, Markdown, and JSON reports.",
    tags: ["Go", "PostgreSQL", "Claude API", "CLI"],
    hueA: 200,
    hueB: 240,
    link: "",
    github: "https://github.com/Aviral0702/QueryWiseProd",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "chattos",
    title: "Chattos",
    description:
      "Chattos is a real-time scalable chat application that allows users to create chat rooms and chat with other users in real-time.",
    tags: ["Next.js", "TailwindCSS", "Convex", "Vercel"],
    hueA: 180,
    hueB: 200,
    link: "https://chattos-hazel.vercel.app",
    github: "https://github.com/Aviral0702/chat-application",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "performance-api",
    title: "Performance API",
    description:
      "An API made with HONO, Upstash-Redis and Cloudflare. This is a search API for Countries where fast response time is guaranteed. This is possible due to caching with the help of Redis and improved data fetching latency using Cloudflare Workers.",
    tags: ["Next.js", "Typescript", "HONO", "Upstash", "Redis", "Cloudflare Workers", "Wrangler"],
    hueA: 220,
    hueB: 240,
    link: "",
    github: "https://github.com/Aviral0702/PerformanceAPI",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "js-formatter",
    title: "Unique JS Formatter",
    description: "An NPM package that formats JavaScript and TypeScript code",
    tags: ["JavaScript", "TypeScript", "Node.js"],
    hueA: 220,
    hueB: 240,
    link: "https://www.npmjs.com/package/unique-js-formatter",
    github: "https://github.com/Aviral0702/JS-CodeFormat-Package-npm",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "podexo",
    title: "Podexo",
    description:
      "Podexo is a web application that transforms your podcast episodes into well-crafted blog posts, making your content more accessible and engaging.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    hueA: 200,
    hueB: 220,
    link: "https://podexo.vercel.app/",
    github: "https://github.com/Aviral0702/Podexo",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "rate-limiter",
    title: "API Rate Limiter",
    description:
      "An API rate limiter that limits the number of requests a user can make to an API within a given time frame.",
    tags: ["Node.js", "Express", "Redis", "Docker", "MongoDB"],
    hueA: 160,
    hueB: 180,
    link: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
    github: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "bytebazaar",
    title: "ByteBazaar",
    description:
      "ByteBazaar is a SaaS marketplace for buying and selling digital products like eBooks, courses, and software.",
    tags: ["React", "Node.js", "MongoDB", "Three.js", "TailwindCSS", "Express"],
    hueA: 140,
    hueB: 160,
    link: "https://byte-bazaar-beta.vercel.app/",
    github: "https://github.com/Aviral0702/ByteBazaar",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "go-rest-api",
    title: "Go REST API with Helm Chart",
    description: "A REST API built using Golang and Helm chart for deploying the application on Kubernetes.",
    tags: ["Golang", "Helm", "Kubernetes"],
    hueA: 220,
    hueB: 160,
    link: "",
    github: "https://github.com/Aviral0702/Go-Lang-REST-API-Helm-Chart",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "cses-extension",
    title: "CSES-GitHub Chrome Extension",
    description:
      "A Chrome extension that shows the number of problems solved by a user on CSES problem set on their GitHub profile.",
    tags: ["JavaScript", "Chrome Extension"],
    hueA: 200,
    hueB: 150,
    link: "",
    github: "https://github.com/Aviral0702/CSES-Chrome-Extension",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const hue = (h) => `hsl(${h}, 80%, 20%)`

const ProjectCard = ({ title, description, tags, hueA, hueB, link, github, image, isActive, index }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      className={`flex-shrink-0 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 h-[500px] overflow-hidden flex justify-center items-center relative scroll-snap-align-center rounded-2xl transition-all duration-500 ease-in-out ${
        isActive ? "scale-100 opacity-100 z-10" : "scale-95 opacity-70 z-0"
      }`}
      style={{ background }}
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
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

      <div className="w-full h-full flex flex-col justify-between p-6 relative z-10">
        {image && (
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          </div>
        )}

        <div className="flex flex-col h-full">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">{title}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-gray-200 mb-6 line-clamp-4 max-w-prose">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="bg-white/20 text-white px-2 py-1 rounded-lg text-xs font-bold uppercase backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                aria-label={`Visit ${title} website`}
              >
                <ExternalLink size={16} />
                <span>Visit</span>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm"
                aria-label={`View ${title} source code on GitHub`}
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      if (isScrolling) return

      const scrollLeft = carousel.scrollLeft
      const cardWidth = carousel.clientWidth / (isMobile ? 1 : 2.5)
      const newIndex = Math.round(scrollLeft / cardWidth)

      setActiveIndex(Math.min(newIndex, projectsData.length - 1))
    }

    carousel.addEventListener("scroll", handleScroll)
    return () => carousel.removeEventListener("scroll", handleScroll)
  }, [isScrolling, isMobile])

  const scrollToIndex = (index) => {
    const carousel = carouselRef?.current
    if (!carousel) return

    const safeIndex = Math.max(0, Math.min(index, projectsData.length - 1))
    setActiveIndex(safeIndex)

    const cardWidth = carousel.clientWidth / (isMobile ? 1 : 2.5)
    const scrollPosition = safeIndex * cardWidth

    setIsScrolling(true)
    carousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    })

    setTimeout(() => setIsScrolling(false), 500)
  }

  const scrollCarousel = (direction) => {
    const newIndex =
      direction === "left" ? Math.max(0, activeIndex - 1) : Math.min(projectsData.length - 1, activeIndex + 1)
    scrollToIndex(newIndex)
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl w-full px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Featured work from the resume, plus selected backend and product projects.
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-gray-900/70 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hidden md:flex items-center justify-center"
                aria-label="View previous project"
              >
                <ArrowLeftCircle size={28} className="text-white/90" />
              </motion.button>
            )}

            {activeIndex < projectsData.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scrollCarousel("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-gray-900/70 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hidden md:flex items-center justify-center"
                aria-label="View next project"
              >
                <ArrowRightCircle size={28} className="text-white/90" />
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-6 md:hidden"
          >
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <span>Swipe to explore</span>
              <ArrowRightCircle size={16} className="animate-pulse" />
            </span>
          </motion.div>

          <div
            ref={carouselRef}
            className="flex gap-6 md:gap-8 overflow-x-auto py-8 px-4 md:px-16 hide-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
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

          <div className="flex justify-center mt-8 gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Projects