"use client"

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Backend Software Engineer",
      company: "Aspora",
      duration: "April 2025 - Present",
      description: [
        "Independently built the end-to-end RFI flow from 0 to 1 — a backend-driven workflow orchestrator powering web and mobile screens, now live for 500+ users. Mentored another engineer along the way.",
        "Owned Go backend services for Aspora’s NRI Banking product end to end, integrating with the Core Banking System for onboarding, KYC, and transactions — 1,000+ real bank accounts opened.",
        "Built an in-house AI OCR pipeline with the Adapter pattern and feature flags across LlamaParse v2, Claude Sonnet, and Landing AI, replacing a recurring Persona vendor bill.",
        "Contributed to two event-driven services on Kafka/AWS SQS: a multi-tenant Communications Service and a compliance-grade Audit Service (event bus → S3 → REST trails).",
        "Designed and shipped Pulse, an internal CRM in Java/Spring Boot with bank-grade RBAC — 50+ agents, sub-1-day ticket TAT.",
        "Cut a critical API from 10+ seconds to <250ms (40x) with CompletableFuture, better indexes, and Redis caching.",
        "Shipped React dashboards on Alphadesk for real-time order and transaction monitoring.",
      ],
      tags: ["Go", "Java", "Spring Boot", "Kafka", "AWS", "React"],
    },
    {
      role: "Web Developer Intern",
      company: "Codestam Technologies",
      duration: "March 2024 - April 2024",
      description: [
        "Built backend services and REST APIs with Node.js and Express.js; the team delivered projects 20% faster through clearer backend architecture.",
        "Shipped real-time chat backends with WebSockets, e-commerce APIs with payment processing, and admin services on PostgreSQL and MongoDB for 1,000+ active users.",
      ],
      tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
    },
  ]

  return (
    <div className="section-padding bg-spotify-dark-secondary section-rail">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-2.5"
        >
          <h2 id="experience-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-spotify-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="relative pb-16">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-spotify-gradient hidden md:block transform -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row"
              >
                <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-spotify-green border-4 border-spotify-dark-secondary hidden md:block transform -translate-x-1/2 z-10" />

                <div className={`w-full ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2`}>
                  <div className="card-spotify hover:shadow-spotify-green/20 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-spotify-text-primary group-hover:text-spotify-green transition-colors duration-200">
                          {exp.company}
                        </h3>
                        <p className="text-spotify-green font-medium text-sm sm:text-base">{exp.duration}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="text-sm sm:text-base text-spotify-text-secondary font-medium bg-spotify-dark-tertiary px-3 py-1 rounded-full">
                          {exp.role}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-spotify-text-secondary text-sm sm:text-base flex items-start group">
                          <span className="mr-3 text-spotify-green group-hover:text-spotify-green-hover transition-colors mt-1">•</span>
                          <span className="group-hover:text-spotify-text-primary transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-spotify-dark-tertiary rounded-full border border-spotify-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
