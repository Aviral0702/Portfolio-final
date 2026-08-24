"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    id: "querywise",
    title: "QueryWise",
    description:
      "A single-binary Go CLI that reads PostgreSQL pg_stat_statements and ranks the most expensive query patterns by a weighted cost heuristic. Query text is fingerprinted locally and discarded; optional Claude recommendations send only fingerprints and metrics.",
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

const ProjectCard = ({ title, description, tags, link, github, image, isActive, index }) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden flex justify-center items-center relative scroll-snap-align-center rounded-2xl transition-all duration-500 ease-in-out ${
        isActive ? "scale-100 opacity-100 z-10" : "scale-95 opacity-70 z-0"
      }`}
      style={{ 
        background: 'linear-gradient(135deg, #181818 0%, #282828 100%)',
        border: '1px solid #404040'
      }}
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
      whileHover={{ 
        scale: 1.02,
        borderColor: '#1DB954',
        boxShadow: '0 0 20px rgba(29, 185, 84, 0.3)'
      }}
      layout
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 relative z-10">
        {image && (
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          </div>
        )}

        <div className="flex flex-col h-full">
          <div className="mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{title}</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
          </div>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4 max-w-prose">{description}</p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
            {tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="bg-gray-800 text-gray-300 px-2 sm:px-3 py-1 rounded-lg text-xs font-medium border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300"
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
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border border-gray-600"
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
      // Calculate card width based on screen size
      let cardWidth
      if (window.innerWidth < 640) {
        cardWidth = 280 + 24 // card width + gap
      } else if (window.innerWidth < 768) {
        cardWidth = 320 + 24
      } else if (window.innerWidth < 1024) {
        cardWidth = 400 + 32
      } else {
        cardWidth = 450 + 32
      }
      
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

    // Calculate card width based on screen size
    let cardWidth
    if (window.innerWidth < 640) {
      cardWidth = 280 + 24 // card width + gap
    } else if (window.innerWidth < 768) {
      cardWidth = 320 + 24
    } else if (window.innerWidth < 1024) {
      cardWidth = 400 + 32
    } else {
      cardWidth = 450 + 32
    }
    
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
      className="pt-16 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-16 lg:pt-48 lg:pb-24 px-4 sm:px-6 md:px-8 bg-black flex flex-col items-center overflow-hidden min-h-screen"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Featured work from my resume, plus selected backend and product projects.
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
                className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-900/90 rounded-full backdrop-blur-sm border border-gray-600 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label="View previous project"
              >
                <ArrowLeftCircle size={20} className="sm:w-6 sm:h-6 text-white" />
              </motion.button>
            )}

            {activeIndex < projectsData.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={() => scrollCarousel("right")}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-900/90 rounded-full backdrop-blur-sm border border-gray-600 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label="View next project"
              >
                <ArrowRightCircle size={20} className="sm:w-6 sm:h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4 hide-scrollbar scroll-smooth snap-x snap-mandatory"
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

          <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-spotify-green w-6"
                    : "bg-spotify-dark-tertiary hover:bg-spotify-text-secondary"
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .line-clamp-3 {
            -webkit-line-clamp: 4;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects