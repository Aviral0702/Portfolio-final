import React from 'react';
import OrbitAnimation from '../components/OrbitAnimation';
import Techandtools from '../components/Techandtools';

const Skills = () => (
  <div
    id="skills"
    className="section min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-8"
  >
    {/* Header */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold relative mb-8 md:mb-16">
      Skills
      <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 mt-2"></span>
    </h1>

    {/* Content */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-80 w-full max-w-6xl">
      <Techandtools />
      <OrbitAnimation />
    </div>
  </div>
);

export default Skills;
