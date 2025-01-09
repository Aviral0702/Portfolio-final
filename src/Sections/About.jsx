import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
        About <span className="text-blue-400">Me</span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <div
            className={`transition-all duration-700 ${
              inView ? "animate-fadeInUp opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-xl sm:text-2xl leading-relaxed mb-6 text-center md:text-left">
              Hi! I’m{" "}
              <span className="text-yellow-300 font-semibold">
                Aviral Asthana
              </span>
              , a passionate{" "}
              <span className="text-green-400">Full-Stack Developer</span>.
              Currently, I’m honing my skills in{" "}
              <span className="text-cyan-300">Go</span>, cloud computing, and
              backend development, while advancing in technologies like Docker
              and Kubernetes.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed mb-6 text-center md:text-left">
              With hands-on experience in the{" "}
              <span className="text-purple-300 font-semibold">MERN stack</span>,
              I’ve built efficient and scalable web applications. I thrive in
              collaborative environments, contributing to{" "}
              <span className="text-pink-300">open-source projects</span> and
              crafting innovative solutions.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed text-center md:text-left">
              Outside of coding, I’m deeply committed to continuous learning,
              always striving to improve my skills and stay ahead in this
              fast-paced tech landscape.
            </p>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="md:w-1/2 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/c9301de2-6970-4c5e-8b5d-668ca09c5cc3/ROvjZK9vmX.lottie"
            loop
            autoplay
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            onError={() => console.error("Failed to load Lottie animation")}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
