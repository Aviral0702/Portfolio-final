import React from "react";
import gosrc from "../assets/icons/golang.png";
import nodesrc from "../assets/icons/node.png";
import reactsrc from "../assets/icons/react.png";
import nextsrc from "../assets/icons/Next.js.png";
import expresssrc from "../assets/icons/Express.png";
import redissrc from "../assets/icons/Redis.png";
import dockersrc from "../assets/icons/Docker.png";
import ksrc from "../assets/icons/kubernetes.png";
import linuxsrc from "../assets/icons/Linux.png";
import tssrc from "../assets/icons/TypeScript.png";
import jssrc from "../assets/icons/javascript.png";
import gitsrc from "../assets/icons/Git.png";
import githubsrc from "../assets/icons/GitHub.png";
import mongodbsrc from "../assets/icons/mongodb.png";
import tailwindsrc from "../assets/icons/tailwind.png";
import postmansrc from "../assets/icons/Postman.png";
import cppsrc from "../assets/icons/cpp.png";

const tools = [
  { name: "Go", icon: gosrc },
  { name: "C++", icon: cppsrc },
  { name: "Node.js", icon: nodesrc },
  { name: "React", icon: reactsrc },
  { name: "Next.js", icon: nextsrc },
  { name: "Express", icon: expresssrc },
  { name: "Redis", icon: redissrc },
  { name: "Docker", icon: dockersrc },
  { name: "Kubernetes", icon: ksrc },
  { name: "Linux", icon: linuxsrc },
  { name: "TypeScript", icon: tssrc },
  { name: "JavaScript", icon: jssrc },
  { name: "Git", icon: gitsrc },
  { name: "GitHub", icon: githubsrc },
  { name: "MongoDB", icon: mongodbsrc },
  { name: "TailwindCSS", icon: tailwindsrc },
  { name: "Postman", icon: postmansrc },
];

function Techandtools() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-4 sm:px-6"
      aria-labelledby="tech-tools-heading"
    >
      <h3
        id="tech-tools-heading"
        className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-spotify-text-primary"
      >
        Technologies & Tools
      </h3>
      <p className="text-lg sm:text-xl font-medium text-center mb-8 max-w-3xl mx-auto text-spotify-text-secondary">
        Production stack I use at work: Go and Java backends, React when the product needs a UI, and AWS, Kafka, Docker, and Kubernetes to run it.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group card-spotify album-card flex flex-col items-center gap-3 p-4 sm:p-6"
            title={tool.name}
            role="listitem"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-spotify-dark-secondary rounded-lg p-2 flex items-center justify-center group-hover:bg-spotify-green/10 transition-colors duration-200">
              <img
                loading="lazy"
                src={tool.icon}
                alt={`${tool.name} logo`}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
            <div className="text-sm sm:text-base font-medium text-center group-hover:text-spotify-green transition-colors duration-200">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techandtools;
