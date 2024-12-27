import React from 'react';
import OrbitAnimation from '../components/OrbitAnimation';
import Techandtools from '../components/Techandtools';

const Skills = () => (
  <div
    id="skills"
    className="section min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-20 gap-16"
  >
    {/* Header */}
    <h1 className="text-6xl font-bold relative mt-10">
      Skills
      <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 mt-2"></span>
    </h1>

    {/* Content */}
    <div className="flex flex-col mb-20 mr-36 md:flex-row items-center gap-16 md:gap-80 w-full max-w-6xl">
      <Techandtools />
      <OrbitAnimation />
    </div>
  </div>
);

export default Skills;
