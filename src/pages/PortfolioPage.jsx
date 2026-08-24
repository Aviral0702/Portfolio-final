import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";

const Home = lazy(() => import("../Sections/Home"));
const About = lazy(() => import("../Sections/About"));
const Skills = lazy(() => import("../Sections/Skills"));
const Experience = lazy(() => import("../Sections/Experience"));
const Projects = lazy(() => import("../Sections/Projects"));
const Contact = lazy(() => import("../Sections/Contact"));

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PortfolioPage = () => (
  <>
    <SEO
      title="Backend Software Engineer"
      description="Aviral Asthana is a Backend Software Engineer at Aspora building Go and Java services for NRI banking, KYC/onboarding, Kafka event pipelines, and cloud-native fintech systems."
      keywords="Aviral Asthana, Backend Software Engineer, Go Developer, Java Spring Boot, Kafka, AWS, Core Banking, KYC, Fintech, Docker, Kubernetes, PostgreSQL"
    />

    <div className="sections-container">
      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen bg-spotify-dark">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-spotify-green/30 border-t-spotify-green rounded-full animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-spotify-green rounded-full animate-pulse-slow" />
              </div>
            </div>
          }
        >
          {[
            { id: "home", Component: Home },
            { id: "about", Component: About },
            { id: "skills", Component: Skills },
            { id: "experience", Component: Experience },
            { id: "projects", Component: Projects },
            { id: "contact", Component: Contact },
          ].map(({ id, Component }) => (
            <motion.section
              key={id}
              id={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
            >
              <Component />
            </motion.section>
          ))}
        </Suspense>
      </AnimatePresence>
    </div>
  </>
);

export default PortfolioPage;
