import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
    <HelmetProvider>
      <div className="bg-spotify-dark min-h-screen">
        <SEO 
          title="Backend Software Engineer"
          description="Aviral Asthana is a Backend Software Engineer at Aspora building Go and Java services for NRI banking, KYC/onboarding, Kafka event pipelines, and cloud-native fintech systems."
          keywords="Aviral Asthana, Backend Software Engineer, Go Developer, Java Spring Boot, Kafka, AWS, Core Banking, KYC, Fintech, Docker, Kubernetes, PostgreSQL"
        />
        <GoogleAnalytics />
        <div className="spotify-player-bar" aria-hidden="true" />
        <Navbar />

      <div className="sections-container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen bg-spotify-dark">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-spotify-green/30 border-t-spotify-green rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-spotify-green rounded-full animate-pulse-slow"></div>
                </div>
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
    </div>
    </HelmetProvider>
  );
}

export default App;
