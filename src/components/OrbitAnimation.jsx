import React from "react";
import "./OrbitAnimation.css";
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
import dockerksrc from "../assets/icons/kubernetes.png";
import redissrc from "../assets/icons/Redis.png";

const OrbitAnimation = () => {
  const innerRingLogos = [
    { src: gosrc, alt: "Go Logo" },
    { src: dockersrc, alt: "Docker Logo" },
    { src: dockerksrc, alt: "Kubernetes Logo" },
    { src: redissrc, alt: "Redis Logo" },
    { src: nodesrc, alt: "Node.js Logo" },
    { src: linuxsrc, alt: "Linux Logo" },
  ];
  
  const outerRingLogos = [
    { src: reactsrc, alt: "React Logo" },
    { src: nextsrc, alt: "Next.js Logo" },
    { src: expresssrc, alt: "Express Logo" },
    { src: tssrc, alt: "TypeScript Logo" },
    { src: jssrc, alt: "JavaScript Logo" },
    { src: mongodbsrc, alt: "MongoDB Logo" },
    { src: gitsrc, alt: "Git Logo" },
    { src: githubsrc, alt: "GitHub Logo" },
    { src: tailwindsrc, alt: "Tailwind Logo" },
    { src: postmansrc, alt: "Postman Logo" },
  ];

  return (
    <div className="hidden md:block relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-purple-600 rounded-full -translate-x-1/3 -translate-y-1/3 z-20 flex items-center justify-center shadow-lg hover:bg-gradient-to-r from-purple-900 to-purple-700 transition-all duration-300">
        <span className="text-white text-base sm:text-lg font-bold">Tech</span>
      </div>

      {/* Inner Ring */}
      <div className="absolute inset-0">
        {innerRingLogos.map((logo, index) => (
          <div
            key={`inner-${index}`}
            className="absolute top-1/2 left-1/2 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transformOrigin: "50% 50%",
              animation: `orbitInner 20s linear infinite`,
              animationDelay: `${-(index * (20 / innerRingLogos.length))}s`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain z-10 transform hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Outer Ring */}
      <div className="absolute inset-0">
        {outerRingLogos.map((logo, index) => (
          <div
            key={`outer-${index}`}
            className="absolute top-1/2 left-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transformOrigin: "50% 50%",
              animation: `orbitOuter 25s linear infinite`,
              animationDelay: `${-(index * (25 / outerRingLogos.length))}s`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain z-10 transform hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitAnimation;