import React from 'react';
import OrbitAnimation from '../components/OrbitAnimation';
import Techandtools from '../components/Techandtools';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.7
    }
  }
};

const Skills = () => (
  <motion.section
    id="skills"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={containerVariants}
    className="section-padding bg-spotify-dark relative overflow-hidden"
  >
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-spotify-green/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-spotify-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-spotify-green/2 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="container-max relative z-10">
      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="text-center mb-12 sm:mb-16 px-2.5"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
          <span className="gradient-text">Skills</span> & Expertise
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-spotify-gradient mx-auto rounded-full mb-4 sm:mb-6"></div>
        <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Go, Java, Kafka, AWS, PostgreSQL, and the stack I use in production at Aspora
        </p>
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
      >
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Techandtools />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ 
            scale: 1,
            rotate: 0,
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.8
            } 
          }}
          viewport={{ once: true, margin: "0px" }}
          whileHover={{ scale: 1.05 }}
        >
          <OrbitAnimation />
        </motion.div>
      </motion.div>

      {/* Additional info */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-spotify text-center">
            <div className="w-16 h-16 bg-spotify-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-spotify-text-primary mb-2">Fast Development</h3>
            <p className="text-spotify-text-secondary">Quick prototyping and efficient development cycles</p>
          </div>
          
          <div className="card-spotify text-center">
            <div className="w-16 h-16 bg-spotify-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-spotify-text-primary mb-2">Problem Solving</h3>
            <p className="text-spotify-text-secondary">Creative solutions to complex technical challenges</p>
          </div>
          
          <div className="card-spotify text-center">
            <div className="w-16 h-16 bg-spotify-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-spotify-text-primary mb-2">Scalable Solutions</h3>
            <p className="text-spotify-text-secondary">Building applications that grow with your needs</p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default Skills;