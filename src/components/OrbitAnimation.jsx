import React from "react";
import "./OrbitAnimation.css";
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
const OrbitAnimation = () => {
  const innerRingLogos = [
    { src: mongodbsrc, alt: "MongoDB Logo" },
    { src: expresssrc, alt: "Express Logo" },
    { src: tssrc, alt: "TypeScript Logo" },
    { src: gosrc, alt: "Go Logo" },
    { src: gitsrc, alt: "Git Logo" },
    { src: githubsrc, alt: "GitHub Logo" },
  ];
  const outerRingLogos = [
    { src: reactsrc, alt: "React Logo" },
    { src: reduxsrc, alt: "Redux Logo" },
    { src: tailwindsrc, alt: "Tailwind Logo" },
    { src: jssrc, alt: "JavaScript Logo" },
    { src: nodesrc, alt: "Node.js Logo" },
    { src: firebasesrc, alt: "Firebase Logo" },
    { src: dockersrc, alt: "Docker Logo" },
    { src: linuxsrc, alt: "Linux Logo" },
    { src: nextsrc, alt: "Next.js Logo" },
    { src: postmansrc, alt: "Postman Logo" },
    { src: graphqlsrc, alt: "GraphQL Logo" },
    { src: redissrc, alt: "Redis Logo" },
  ];

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] bg-purple-600 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center shadow-lg">
        <span className="text-white text-lg font-bold">Tech</span>
      </div>

      {/* Inner Ring */}
      <div className="absolute inset-0">
        {innerRingLogos.map((logo, index) => (
          <div
            key={`inner-${index}`}
            className="absolute top-1/2 left-1/2 w-[45px] h-[45px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transformOrigin: "50% 50%",
              animation: `orbitInner 20s linear infinite`,
              animationDelay: `${-(index * (20 / innerRingLogos.length))}s`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto z-10 transform hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Outer Ring */}
      <div className="absolute inset-0">
        {outerRingLogos.map((logo, index) => (
          <div
            key={`outer-${index}`}
            className="absolute top-1/2 left-1/2 w-[50px] h-[50px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transformOrigin: "50% 50%",
              animation: `orbitOuter 25s linear infinite`,
              animationDelay: `${-(index * (25 / outerRingLogos.length))}s`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto z-10 transform hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrbitAnimation;
