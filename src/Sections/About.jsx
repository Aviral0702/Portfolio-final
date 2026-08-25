"use client"

import { useEffect, useState } from "react"
import PFP from "../assets/Images/PFP.jpg"
import { motion } from "framer-motion"

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
      aria-labelledby="about-heading"
      className="section-padding bg-spotify-dark-secondary section-rail"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-2.5"
        >
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-spotify-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <div
              className={`space-y-4 transition-all duration-700 ease-in-out ${
                inView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-lg md:text-xl leading-relaxed text-spotify-text-secondary">
                Hi! I'm <span className="text-spotify-green font-semibold">Aviral Asthana</span>, a{" "}
                <span className="text-spotify-green font-medium">Backend Software Engineer</span> at Aspora. I own Go and Java services
                for NRI banking — onboarding, KYC, and transactions against the Core Banking System — and ship workflow
                orchestration used on both web and mobile.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-spotify-text-secondary">
                Day to day I work with{" "}
                <span className="text-spotify-green font-semibold">Go, Java/Spring Boot, Kafka, AWS, and PostgreSQL</span>, and React when ops
                needs a dashboard. I use Cursor and Claude daily to scaffold services, write tests, and ship production code.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-spotify-text-secondary">
                I'm a B.Tech Computer Science student at{" "}
                <span className="text-spotify-green font-medium">IIIT Nagpur</span> (Nov 2022 – May 2026), CGPA 7.8/10.0.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold text-spotify-text-primary mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Go", "Java/Spring Boot", "Kafka", "AWS SQS", "PostgreSQL", "Core Banking", "KYC/Onboarding", "Docker", "Kubernetes", "Cursor & Claude"].map((skill) => (
                  <span key={skill} className="chip-spotify">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-spotify-gradient rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative rounded-full overflow-hidden border-4 border-spotify-green/30 group-hover:border-spotify-green/60 transition-colors duration-300 shadow-spotify">
                <img
                  src={PFP}
                  alt="Aviral Asthana - Backend Software Engineer"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
