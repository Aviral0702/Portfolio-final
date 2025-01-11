import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full-stack Web Developer",
      company: "Codestam Technologies",
      duration: "March 2024 - May 2024",
      description: [
        "Interning as Full-stack Web Developer",
        "Architected and designed the front-end of the web application using React JS",
        "Integrated payment gateway and developed the subscription model for the application",
        "Implemented features to incorporate customer analytics for the application"
      ]
    },
    {
      role: "Open Source Contributor",
      company: "Meshery",
      duration: "June 2024 - Present",
      description: [
        "Working as an open-source contributor for Meshery",
        "Contributed to the development of the Meshery project",
        "Implemented features and bug fixes for the project",
        "Enhanced the overall performance and scalability of the project"
      ]
    }
  ];

  return (
    <div id="experience" className="min-h-screen bg-black text-white py-12 px-4">
      {/* Header Section - Centered */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Experience</h1>
      </div>

      {/* Timeline Container - Adjusted max-width and padding */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line - Adjusted position */}
        <div className="absolute left-0 sm:left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

        {/* Experience Items - Reduced spacing between items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-24">
              {/* Timeline Dot - Adjusted position */}
              <div className="absolute left-[-5px] sm:left-4 top-0 w-3 h-3 p-1 rounded-full bg-purple-500 border-4 border-black" />
              
              {/* Content - Reduced padding and adjusted font sizes */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                  <div>
                    <h2 className="text-xl font-bold mb-1">{exp.company}</h2>
                    <h3 className="text-purple-400 font-medium text-sm">({exp.duration})</h3>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="text-base text-gray-300">{exp.role}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Profile Button - Only shown for Meshery */}
                {exp.company === "Meshery" && (
                  <div className="mt-4">
                    <a 
                      href="https://layer5.io/community/members/aviral-asthana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
                    >
                      View Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;