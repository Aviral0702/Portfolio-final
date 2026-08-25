"use client"

const Experience = () => {
  const experiences = [
    {
      role: "Backend Software Engineer",
      company: "Aspora",
      duration: "April 2025 - Present",
      tags: ["Go", "Java", "Spring Boot", "Kafka", "AWS", "React"],
      description: [
        "Independently built the end-to-end RFI flow from 0 to 1 — a backend-driven workflow orchestrator powering web and mobile screens, now live for 500+ users. Mentored another engineer along the way.",
        "Owned Go backend services for Aspora’s NRI Banking product end to end, integrating with the Core Banking System for onboarding, KYC, and transactions — 1,000+ real bank accounts opened.",
        "Built an in-house AI OCR pipeline with the Adapter pattern and feature flags across LlamaParse v2, Claude Sonnet, and Landing AI, replacing a recurring Persona vendor bill.",
        "Contributed to two event-driven services on Kafka/AWS SQS: a multi-tenant Communications Service and a compliance-grade Audit Service (event bus → S3 → REST trails).",
        "Designed and shipped Pulse, an internal CRM in Java/Spring Boot with bank-grade RBAC — 50+ agents, sub-1-day ticket TAT.",
        "Cut a critical API from 10+ seconds to <250ms (40x) with CompletableFuture, better indexes, and Redis caching.",
        "Shipped React dashboards on Alphadesk for real-time order and transaction monitoring.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Codestam Technologies",
      duration: "March 2024 - April 2024",
      tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
      description: [
        "Built backend services and REST APIs with Node.js and Express.js; the team delivered projects 20% faster through clearer backend architecture.",
        "Shipped real-time chat backends with WebSockets, e-commerce APIs with payment processing, and admin services on PostgreSQL and MongoDB for 1,000+ active users.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 flex flex-col">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-16">
        <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
          <span className="relative z-10">Experience</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative flex-grow pb-16">
        {/* Vertical Line */}
        <div className="absolute left-1/2 sm:left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 hidden sm:block transform sm:translate-x-0 -translate-x-1/2" />

        {/* Experience Items */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 sm:left-6 top-0 w-3 h-3 rounded-full bg-purple-500 border-4 border-black hidden sm:block transform sm:translate-x-0 -translate-x-1/2" />

              {/* Content Card */}
              <div className="w-full sm:ml-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-white">{exp.company}</h2>
                    <h3 className="text-purple-400 font-medium text-xs sm:text-sm">({exp.duration})</h3>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{exp.role}</span>
                  </div>
                </div>

                {/* Description List */}
                <ul className="space-y-2 sm:space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-xs sm:text-sm flex items-start group">
                      <span className="mr-2 text-purple-400 group-hover:text-pink-400 transition-colors">•</span>
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.tags?.length > 0 && (
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-3">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-700 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
