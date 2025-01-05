import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Enate",
      description: "Streamline workflows with cutting-edge AI automation.",
      hueA: 340,
      hueB: 10,
      link: "https://google.com",
    },
    {
      title: "Relo",
      description: "Revolutionize real estate management with innovation.",
      hueA: 20,
      hueB: 40,
      link: "https://facebook.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
    {
      title: "Relo",
      description: "Revolutionize real estate management with innovation.",
      hueA: 20,
      hueB: 40,
      link: "https://facebook.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
    {
      title: "Another Project",
      description: "Innovative project for better user experiences.",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
  ];

  return (
    <div
      id="projects"
      className="section bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div style={carouselContainer}>
        {projects.map((project, i) => (
          <Card
            key={i}
            title={project.title}
            description={project.description}
            hueA={project.hueA}
            hueB={project.hueB}
            index={i}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

function Card({ title, description, hueA, hueB, index, link }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  return (
    <motion.div
      className={`card-container-${index}`}
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
          <p className="text-sm text-gray-200">{description}</p>
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

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

// Carousel container for horizontal scrolling
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
  paddingLeft: "4rem", // Ensures the first project is fully visible
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
  boxShadow:
    "0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

export default Projects;
