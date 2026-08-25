import React from "react";
import reactsrc from "../assets/icons/react.png";
import tailwindsrc from "../assets/icons/tailwind.png";
import jssrc from "../assets/icons/javascript.png";
import nodesrc from "../assets/icons/node.png";
import mongodbsrc from "../assets/icons/mongodb.png";
import expresssrc from "../assets/icons/Express.png";
import tssrc from "../assets/icons/TypeScript.png";
import gosrc from "../assets/icons/golang.png";
import gitsrc from "../assets/icons/Git.png";
import githubsrc from "../assets/icons/GitHub.png";
import dockersrc from "../assets/icons/Docker.png";
import linuxsrc from "../assets/icons/Linux.png";
import nextsrc from "../assets/icons/Next.js.png";
import postmansrc from "../assets/icons/Postman.png";
import redissrc from "../assets/icons/Redis.png";
import ksrc from "../assets/icons/kubernetes.png";
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
      <h2
        id="tech-tools-heading"
        className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8"
      >
        Technologies
      </h2>
      <h3 className="text-lg sm:text-xl font-bold text-center mb-6 max-w-3xl mx-auto">
        Production stack I use at work: Go and Java backends, React when the product needs a UI, and AWS, Kafka, Docker, and Kubernetes to run it.
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-y-4 md:gap-x-20">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-2 sm:p-3 bg-gray-100 text-black rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2 w-full md:min-w-[160px]"
            title={tool.name}
            role="listitem"
          >
            <img
              loading="lazy"
              src={tool.icon}
              alt={`${tool.name} logo`}
              className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
            />
            <div className="text-sm sm:text-base md:text-lg font-medium break-words">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techandtools;
