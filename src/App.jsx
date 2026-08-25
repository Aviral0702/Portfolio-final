import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./App.css";

const Home = lazy(() => import("./Sections/Home"));
const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Experience = lazy(() => import("./Sections/Experience"));
const CaseStudy = lazy(() => import("./Sections/CaseStudy"));
const Projects = lazy(() => import("./Sections/Projects"));
const Contact = lazy(() => import("./Sections/Contact"));

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function App() {
  return (
    <div className="bg-spotify-dark min-h-screen">
      <GoogleAnalytics />
      <div className="spotify-player-bar" aria-hidden="true" />
      <Navbar />

      <div className="sections-container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-spotify-dark">
                <div className="motion-safe:animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-spotify-green" />
              </div>
            }
          >
            <motion.section
              id="home"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Home />
            </motion.section>

            <motion.section
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <About />
            </motion.section>

            <motion.section
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Skills />
            </motion.section>

            <motion.section
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Experience />
            </motion.section>

            <motion.section
              id="case-study"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <CaseStudy />
            </motion.section>

            <motion.section
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Projects />
            </motion.section>

            <motion.section
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Contact />
            </motion.section>
          </Suspense>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
