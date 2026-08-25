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
    className="section-padding bg-spotify-dark relative overflow-hidden"
    aria-labelledby="skills-heading"
  >
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-spotify-green/5 blur-3xl motion-safe:animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-spotify-green/3 blur-3xl motion-safe:animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </div>

    <div className="container-max relative z-10">
      <motion.div
        variants={itemVariants}
        className="text-center mb-12 sm:mb-16 px-2.5"
      >
        <h2 id="skills-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
          <span className="gradient-text">Skills</span> & Expertise
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-spotify-gradient mx-auto rounded-full mb-4 sm:mb-6" />
        <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Go, Java, Kafka, AWS, PostgreSQL, and the stack I use in production at Aspora
        </p>
      </motion.div>

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
          <ProductionStack />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["Languages", "Go, Java, Python, SQL, C++"],
            ["Backend & Frontend", "Spring Boot, Node.js, React, Next.js"],
            ["Event-Driven & Data", "Kafka, AWS SQS, S3, PostgreSQL, MySQL"],
            ["Fintech / Banking", "CBS, KYC, RBAC, workflow orchestration"],
            ["Cloud & DevOps", "AWS ECS, Docker, Kubernetes, CI/CD, Linux"],
            ["AI-Native Tooling", "Cursor, Claude — daily production use"],
          ].map(([label, value]) => (
            <div key={label} className="card-spotify album-card text-left">
              <p className="text-sm font-bold text-spotify-green mb-2 uppercase tracking-wide">{label}</p>
              <p className="text-sm text-spotify-text-secondary leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default Skills;
