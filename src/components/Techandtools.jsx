import React from "react";
import reactsrc from "../assets/icons/react.png";
import reduxsrc from "../assets/icons/redux.png";
import tailwindsrc from "../assets/icons/tailwind.png";
import jssrc from "../assets/icons/javascript.png";
import nodesrc from "../assets/icons/node.png";
import mongodbsrc from "../assets/icons/mongodb.png";
import expresssrc from "../assets/icons/Express.png";
import tssrc from "../assets/icons/TypeScript.png";
import gosrc from "../assets/icons/golang.png";
import gitsrc from "../assets/icons/Git.png";
import githubsrc from "../assets/icons/GitHub.png";
import firebasesrc from "../assets/icons/Firebase.png";
import dockersrc from "../assets/icons/Docker.png";
import linuxsrc from "../assets/icons/Linux.png";
import nextsrc from "../assets/icons/Next.js.png";
import postmansrc from "../assets/icons/Postman.png";
import graphqlsrc from "../assets/icons/GraphQL.png";
import redissrc from "../assets/icons/Redis.png";
import ksrc from "../assets/icons/kubernetes.png";
import cppsrc from "../assets/icons/cpp.png";

const tools = [
  { name: "C++", icon: cppsrc },
  { name: "React", icon: reactsrc },
  { name: "Node.js", icon: nodesrc },
  { name: "Docker", icon: dockersrc },
  { name: "MongoDB", icon: mongodbsrc },
  { name: "Git", icon: gitsrc },
  { name: "GraphQL", icon: graphqlsrc },
  { name: "Kubernetes", icon: ksrc },
  { name: "JavaScript", icon: jssrc },
  { name: "TypeScript", icon: tssrc },
  { name: "Express", icon: expresssrc },
  { name: "Next.js", icon: nextsrc },
  { name: "Postman", icon: postmansrc },
  { name: "Redis", icon: redissrc },
  { name: "Redux", icon: reduxsrc },
  { name: "TailwindCSS", icon: tailwindsrc },
  { name: "Go", icon: gosrc },
  { name: "Linux", icon: linuxsrc },
  { name: "Firebase", icon: firebasesrc },
  { name: "GitHub", icon: githubsrc },
];

function Techandtools() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
        Technologies
      </h2>
      <h3 className="text-lg sm:text-xl font-bold text-center mb-6 max-w-3xl mx-auto">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant websites.
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-y-4 md:gap-x-20">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-2 sm:p-3 bg-gray-100 text-black rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2 w-full md:min-w-[160px]"
          >
            <img
              src={tool.icon}
              alt={`${tool.name} icon`}
              className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
            />
            <div className="text-sm sm:text-base md:text-lg font-medium break-words">
              {tool.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techandtools;
