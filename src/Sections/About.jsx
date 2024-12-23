import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          console.log("About Section is in view");
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      className="section bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 className="text-6xl font-bold text-center mb-8">
        About <span className="text-blue-400">Me</span>
      </h1>
      <div className="flex flex-row items-center justify-center w-full max-w-6xl">
        <div className="w-1/2">
          <div className={` text-left space-y-6 ${inView ? "animate-fadeInUp" : ""}`}>
            <p className="text-2xl leading-relaxed">
              Hi! I’m{" "}
              <span className="text-yellow-300 font-semibold">
                Aviral Asthana
              </span>
              , a passionate
              <span className="text-green-400"> Full-Stack Developer</span>.
              Currently, I’m honing my skills in{" "}
              <span className="text-cyan-300">Go</span>, cloud computing, and
              backend development while making strides in technologies like
              Docker and Kubernetes.
            </p>
            <p className="text-2xl leading-relaxed">
              With hands-on experience in the{" "}
              <span className="text-purple-300 font-semibold">MERN stack</span>,
              I’ve built efficient and scalable web applications. I thrive in
              collaborative environments, contributing to{" "}
              <span className="text-pink-300">open-source projects</span> and
              working on innovative solutions.
            </p>
            <p className="text-2xl leading-relaxed">
              Outside of coding, I’m deeply committed to continuous learning,
              always aiming to improve my skills and stay ahead in this
              fast-paced tech landscape.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <DotLottieReact
            src="https://lottie.host/c9301de2-6970-4c5e-8b5d-668ca09c5cc3/ROvjZK9vmX.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default About;
