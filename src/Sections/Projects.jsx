import React from "react";
import { motion } from "motion/react";
import { useRef } from "react";
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
const Projects = () => {
  const carouselRef = useRef(null);
  const projects = [
    {
      title: "Online Collaborative whiteboard",
      description:
        "Online collaborative Whiteboard which allows multiple users to draw on the same canvas in real-time.",
      tags: ["React", "Node.js", "Vercel", "TailwindCSS", "Socket.io"],
      hueA: 210,
      hueB: 230,
      link: "https://online-collaborative-whiteboard.vercel.app/",
    },
    {
      title: "Podexo",
      description:
        "Podexo is a web application that transforms your podcast episodes into well-crafted blog posts, making your content more accessible and engaging.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      hueA: 200,
      hueB: 220,
      link: "https://podexo.vercel.app/",
    },
    {
      title: "Chattos",
      description:
        "Chattos is a real-time scalable chat application that allows users to create chat rooms and chat with other users in real-time.",
      tags: ["Next.", "TailwindCSS", "Redis", "Socket.io"],
      hueA: 180,
      hueB: 200,
      link: "",
    },
    {
      title: "API Rate Limiter",
      description:
        "An API rate limiter that limits the number of requests a user can make to an API within a given time frame.",
      tags: ["Node.js", "Express", "Redis", "Docker", "MongoDB"],
      hueA: 160,
      hueB: 180,
      link: "https://github.com/Aviral0702/API-Rate-Limiter-Redis",
    },
    {
      title: "ByteBazaar",
      description:
        "ByteBazaar is a SaaS marketplace for buying and selling digital products like eBooks, courses, and software.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Three.js",
        "TailwindCSS",
        "Express",
      ],
      hueA: 140,
      hueB: 160,
      link: "https://byte-bazaar-beta.vercel.app/",
    },
    {
      title: "Meh-Your Own AI Friend",
      description: "A simple AI friend that can chat with you.",
      tags: ["React", "TailwindCSS", "OpenAI"],
      hueA: 140,
      hueB: 160,
      link: "https://me-your-own-ai-friend.vercel.app/",
    },
    {
      title: "Guess the number on dice",
      description:
        " A simple game where the user has to guess the number on the dice. The user has 3 chances to guess the correct number.",
      tags: ["React", "TailwindCSS"],
      hueA: 130,
      hueB: 150,
      link:
        "https://vercel.com/aviral-asthanas-projects-dbd1be85/project-3-dice-game",
    },
    {
      title: "Go REST API with Helm Chart",
      description:
        "A REST API built using Golang and Helm chart for deploying the application on Kubernetes.",
      tags: ["Golang", "Helm", "Kubernetes"],
      hueA: 220,
      hueB: 160,
      link:
        "https://vercel.com/aviral-asthanas-projects-dbd1be85/project-3-dice-game",
    },
    {
      title: "EndlessIssues",
      description:
        "This is a simple issue tracker to track my progress in Tech Journey.",
      tags: ["React", "TailwindCSS", "GitHub Pages"],
      hueA: 160,
      hueB: 200,
      link: "",
    },
    {
      title: "CSES-GitHub Chrome Extension",
      description:
        "A Chrome extension that shows the number of problems solved by a user on CSES problem set on their GitHub profile.",
      tags: ["JavaScript", "Chrome Extension"],
      hueA: 200,
      hueB: 150,
      link: "",
    },
  ];

  const scrollCarousel = (direction) => {
    const carousel = carouselRef?.current;
    if (carousel) {
      const scrollAmount = direction === "left" ? -200 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div
      id="projects"
      className="section bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="relative w-full">
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 z-10 "
        >
          <ArrowLeftCircle size={40} />
        </button>

        <div
          style={carouselContainer}
          ref={carouselRef}
          className="relative overflow-x-auto"
        >
          {projects.map((project, i) => (
            <Card
              key={i}
              title={project.title}
              description={project.description}
              tags={project.tags}
              hueA={project.hueA}
              hueB={project.hueB}
              link={project.link}
            />
          ))}
        </div>
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-8 z-10 "
        >
          <ArrowRightCircle size={40} />
        </button>
      </div>
    </div>
  );
};

function Card({ title, description, tags, hueA, hueB, link }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <motion.div
      className="card-container"
      style={{ ...cardContainer, background }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="group"
        style={{ textDecoration: "none" }}
      >
        <motion.div
          style={card}
          variants={cardVariants}
          className="card group-hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
          <div style={tagsContainer}>
            {tags.map((tag, i) => (
              <span key={i} style={tagStyle}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 80%, 20%)`; // Darker colors

/**
 * ==============   Styles   ================
 */

const carouselContainer = {
  display: "flex",
  gap: "2rem",
  overflowX: "auto",
  padding: "2rem",
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "4rem",
};

const cardContainer = {
  flex: "0 0 70%",
  height: "500px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  scrollSnapAlign: "center",
  borderRadius: "20px",
  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease",
};

const card = {
  fontSize: 24,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "1.5rem",
  borderRadius: "15px",
  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

// Tags container
const tagsContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.5rem",
};

// Individual tag style
const tagStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: "white",
  padding: "0.3rem 0.6rem",
  borderRadius: "10px",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textTransform: "uppercase",
};

export default Projects;
