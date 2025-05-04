"use client"

const Experience = () => {
  const experiences = [
    {
      role: "Backend Engineering Intern",
      company: "Aspora",
      duration: "April 2025 - Present",
      description: [
        "Developing and maintaining backend services using Java Spring Boot",
        "Building RESTful APIs for enterprise applications",
        "Collaborating with frontend team to integrate React components",
        "Implementing database solutions and optimizing queries",
        "Participating in code reviews and agile development processes"
      ],
    },
    {
      role: "Open Source Contributor",
      company: "Meshery",
      duration: "June 2024 - Present",
      description: [
        "Working as an open-source contributor for Meshery",
        "Contributed to the development of the Meshery project",
        "Implemented features and bug fixes",
        "Enhanced the overall performance and scalability"
      ],
    },
    {
      role: "Full-stack Web Developer",
      company: "Codestam Technologies",
      duration: "March 2024 - May 2024",
      description: [
        "Interning as Full-stack Web Developer",
        "Architected and designed the front-end of the web application using React JS",
        "Integrated payment gateway and developed the subscription model",
        "Implemented features to incorporate customer analytics"
      ],
    },
  ]

  return (
    <div id="experience" className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 flex flex-col">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
          <p className="relative z-10">Experience</p>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
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

                {/* Special buttons for specific companies */}
                {exp.company === "Meshery" && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://layer5.io/community/members/aviral-asthana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
                    >
                      View Profile
                    </a>
                  </div>
                )}
                {exp.company === "Aspora" && (
                  <div className="mt-4 sm:mt-6 flex gap-3">
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded-md">Java</span>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded-md">Spring Boot</span>
                    <span className="text-xs px-2 py-1 bg-gray-700 rounded-md">React</span>
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