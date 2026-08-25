import React from 'react';
import ProductionStack from '../components/ProductionStack';
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
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={containerVariants}
    className="relative min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center py-12 md:py-24 px-4 md:px-8 overflow-hidden"
    aria-labelledby="skills-heading"
  >
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"></div>
    </div>

    <motion.div 
      variants={itemVariants}
      className="relative z-10 text-center mb-12 md:mb-20"
    >
      <h2 id="skills-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Skills & Expertise
        </span>
      </h2>
      <motion.div 
        className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Stack I use in production at Aspora, plus the languages and tools from my resume.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
        {[
          ["Languages", "Go, Java, Python, SQL, C++"],
          ["Backend & Frontend", "Spring Boot, Node.js, React.js, Next.js"],
          ["Event-Driven & Data", "Kafka, AWS SQS, AWS S3, PostgreSQL, MySQL"],
          ["Fintech / Banking", "CBS integration, KYC/onboarding, RBAC, workflow orchestration"],
          ["Cloud & DevOps", "AWS (ECS, CloudWatch, Secrets Manager), Docker, Kubernetes, Git, CI/CD, Linux"],
          ["AI-Native Tooling", "Cursor, Claude (daily use for production code)"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-gray-800 bg-gray-900/60 p-4">
            <p className="text-sm font-semibold text-purple-300 mb-1">{label}</p>
            <p className="text-sm text-gray-300">{value}</p>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div 
      variants={containerVariants}
      className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 w-full max-w-7xl"
    >
      <motion.div 
        variants={itemVariants}
        className="w-full md:w-1/2"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Techandtools />
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="w-full md:w-1/2 flex justify-center"
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
        <ProductionStack />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Skills;
