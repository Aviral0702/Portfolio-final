import React from "react";
import { motion } from "motion/react";
const Projects = () => {
  const projects = [
    {
      title: "Enate",
      description: "Project 1 description",
      hueA: 340,
      hueB: 10,
      link: "https://google.com",
    },
    {
      title: "Relo",
      description: "Project 2 description",
      hueA: 20,
      hueB: 40,
      link: "https://facebook.com",
    },
    {
      title: "Another Project",
      description: "Project 3 description",
      hueA: 60,
      hueB: 90,
      link: "https://x.com",
    },
  ];
  return (
    <div
      id="home"
      className="section bg-gray-950 text-white flex items-center justify-center min-h-screen max-h-full"
    >
      <div style={container}>
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
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <a href={link} target="_blank" rel="noreferrer">
        <motion.div style={card} variants={cardVariants} className="card">
          <h2>{title}</h2>
          <p>{description}</p>
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
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};
const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 24,
  width: 300,
  height: 430,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  padding: "1rem",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
};
export default Projects;
