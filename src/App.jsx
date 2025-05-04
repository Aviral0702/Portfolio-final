import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import "./App.css";

// Lazy load sections for better performance
const Home = lazy(() => import("./Sections/Home"));
const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Experience = lazy(() => import("./Sections/Experience"));
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
    <>
      <Navbar />

      <div className="sections-container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            {/* Home Section */}
            <motion.section
              id="home"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Home />
            </motion.section>

            {/* About Section */}
            <motion.section
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <About />
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Skills />
            </motion.section>

            {/* Experience Section */}
            <motion.section
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Experience />
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Projects />
            </motion.section>

            {/* Contact Section */}
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
    </>
  );
}

export default App;
