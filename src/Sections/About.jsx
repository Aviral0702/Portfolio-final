"use client"

import { useEffect, useState } from "react"
import PFP from "../assets/Images/PFP.jpg"
const About = () => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const section = document.querySelector("#about")
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 })

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gray-900 text-white flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
        About <span className="text-blue-400">Me</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <div
            className={`transition-all duration-700 ease-in-out ${
              inView ? "animate-fadeInUp opacity-100" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl sm:text-2xl leading-relaxed mb-6 text-center md:text-left">
              Hi! I'm <span className="text-yellow-300 font-semibold">Aviral Asthana</span>, a{" "}
              <span className="text-green-400">Backend Software Engineer</span> at Aspora. I own Go and Java services
              for NRI banking — onboarding, KYC, and transactions against the Core Banking System — and ship workflow
              orchestration used on both web and mobile.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed mb-6 text-center md:text-left">
              Day to day I work with{" "}
              <span className="text-cyan-300">Go, Java/Spring Boot, Kafka, AWS, PostgreSQL</span>, and React when ops
              needs a dashboard. I use Cursor and Claude daily to scaffold services, write tests, and ship production
              code.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed text-center md:text-left">
              I'm a B.Tech Computer Science student at{" "}
              <span className="text-purple-300 font-semibold">IIIT Nagpur</span> (Nov 2022 – May 2026), CGPA 7.8/10.0.
            </p>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/20">
            <img
              src={PFP}
              alt="Aviral Asthana - Backend Software Engineer"
              className="w-full max-w-[300px] md:max-w-[350px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
