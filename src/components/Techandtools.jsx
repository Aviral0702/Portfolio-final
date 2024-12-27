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
  { name: "Kubernetes", ksrc },
  { name: "JavaScript", icon: jssrc },
  { name: "TypeScript", icon: tssrc },
  { name: "Express", icon: expresssrc },
  { name: "Next.js", icon: nextsrc },
  { name: "Postman", icon: postmansrc },
  { name: "Redis", icon: redissrc },
  { name: "Redux", icon: reduxsrc },
  { name: "Tailwind CSS", icon: tailwindsrc },
  { name: "Go", icon: gosrc },
  { name: "Linux", icon: linuxsrc },
  { name: "Firebase", icon: firebasesrc },
  { name: "GitHub", icon: githubsrc },
];

function Techandtools() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
      <h3 className="text-xl font-bold text-center mb-4">
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant websites.
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-40">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="p-3 w-[180px] bg-gray-100 text-black rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-row items-center gap-2 "
          >
            <img src={tool.icon} alt="" height={30} width={30} />
            <div className="text-lg font-medium">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techandtools;
