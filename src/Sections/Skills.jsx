import React from 'react';
import OrbitAnimation from '../components/OrbitAnimation';

const Skills = () => (
  <div id="skills" className="section min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center py-20 gap-16">
    <h1 className="text-4xl font-bold">
      <span className="relative">
        Skills
        <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 mt-2"></span>
      </span>
    </h1>
    <div className="flex items-center justify-center">
      <OrbitAnimation />
    </div>
  </div>
);

export default Skills;