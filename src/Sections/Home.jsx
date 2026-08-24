import bg from "../assets/Images/2040596_275310-P5VU87-469.jpg";
import astronaut from "../assets/Images/rb_38616.png";
import Typewriter from "typewriter-effect";
import Resume from "../assets/resume/Aviral_Asthana_resume_v1.pdf";
import fileIcon from "../assets/icons/file.png";
import LatestWork from "./LatestWork";
import { motion } from "framer-motion";
import { trackResumeDownload } from "../config/analytics";

const Home = () => (
  <>
    <div id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-spotify-dark via-spotify-dark-secondary to-spotify-dark-tertiary opacity-90"></div>
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-spotify-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-spotify-green/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 min-h-screen px-2.5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col items-center md:items-start md:text-left flex-1"
          >
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <div className="equalizer" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-spotify-green font-semibold">Now building</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-spotify-text-primary tracking-tight">
              <span className="block">Hi, I'm</span>
              <div className="gradient-text">
                <Typewriter
                  options={{
                    strings: ["Aviral Asthana"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </div>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-spotify-text-secondary font-medium">
              Backend Software Engineer
            </h2>

            <p className="text-base sm:text-lg md:text-xl max-w-2xl text-spotify-text-secondary mb-8 leading-relaxed">
              I build production backend systems in Go and Java — core banking integrations, KYC/onboarding, event-driven services on Kafka and AWS SQS, and React dashboards for ops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={Resume}
                download="Aviral_Asthana_Resume"
                rel="noopener noreferrer"
                className="btn-spotify flex items-center justify-center gap-3 group"
                onClick={trackResumeDownload}
              >
                <img src={fileIcon} alt="File icon" className="w-5 h-5 transition-transform group-hover:scale-110" />
                Download Resume
              </a>
              
              <a
                href="#projects"
                className="btn-spotify-secondary flex items-center justify-center gap-3"
              >
                View Projects
              </a>
            </div>

            {/* Tech stack preview */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              {["Go", "Java/Spring Boot", "Kafka", "AWS", "PostgreSQL", "Docker & Kubernetes"].map((skill) => (
                <span key={skill} className="chip-spotify">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Astronaut Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center flex-1"
          >
            <div className="relative">
              <img
                src={astronaut}
                alt="Floating astronaut illustration"
                className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-contain animate-float"
              />
              <div className="absolute inset-0 w-full h-full bg-spotify-green/10 rounded-full blur-3xl animate-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-spotify-text-tertiary">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-spotify-text-tertiary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-spotify-text-tertiary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </div>

    <LatestWork />
  </>
);

export default Home;
