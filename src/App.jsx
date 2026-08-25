import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import NowPlayingBar from "./components/NowPlayingBar";
import "./App.css";

const Home = lazy(() => import("./Sections/Home"));
const About = lazy(() => import("./Sections/About"));
const Skills = lazy(() => import("./Sections/Skills"));
const Experience = lazy(() => import("./Sections/Experience"));
const CaseStudy = lazy(() => import("./Sections/CaseStudy"));
const Projects = lazy(() => import("./Sections/Projects"));
const Contact = lazy(() => import("./Sections/Contact"));

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function App() {
  return (
    <div className="bg-spotify-dark min-h-screen pb-16">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <GoogleAnalytics />
      <Navbar />
      <NowPlayingBar />

      <main id="main" className="sections-container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-spotify-dark">
                <div className="equalizer scale-150" aria-hidden="true">
                  <span /><span /><span /><span />
                </div>
                <span className="sr-only">Loading</span>
              </div>
            }
          >
            <motion.section
              id="home"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <Home />
            </motion.section>

            <motion.section
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <About />
            </motion.section>

            <motion.section
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <Skills />
            </motion.section>

            <motion.section
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <Experience />
            </motion.section>

            <motion.section
              id="case-study"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <CaseStudy />
            </motion.section>

            <motion.section
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <Projects />
            </motion.section>

            <motion.section
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
            >
              <Contact />
            </motion.section>
          </Suspense>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
