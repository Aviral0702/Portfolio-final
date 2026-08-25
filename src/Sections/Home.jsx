import Resume from "../assets/resume/Aviral_Asthana_resume_v1.pdf";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { trackResumeDownload } from "../config/analytics";

const Home = () => (
  <div className="relative min-h-screen w-full overflow-hidden pt-20">
    <div className="absolute inset-0 bg-spotify-dark" aria-hidden="true">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-spotify-green/10 rounded-full blur-3xl motion-safe:animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-spotify-green/5 rounded-full blur-3xl motion-safe:animate-pulse-slow" style={{ animationDelay: "1s" }} />
    </div>

    <div className="relative z-10 min-h-screen px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full text-center md:text-left"
      >
        <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
          <div className="equalizer" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-spotify-green font-semibold">
            Backend Software Engineer
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 text-spotify-text-primary tracking-tight">
          Hi, I'm <span className="gradient-text">Aviral Asthana</span>
        </h1>

        <p className="text-sm sm:text-base text-spotify-text-secondary mb-6 font-medium">
          <span className="text-spotify-green">40×</span> API speedup
          <span className="mx-2 text-spotify-text-tertiary">·</span>
          <span className="text-spotify-green">1,000+</span> bank accounts
          <span className="mx-2 text-spotify-text-tertiary">·</span>
          <span className="text-spotify-green">500+</span> users on RFI orchestrator
        </p>

        <p className="text-base sm:text-lg max-w-2xl text-spotify-text-secondary mb-8 leading-relaxed mx-auto md:mx-0">
          I build production backend systems in Go and Java — core banking integrations, KYC/onboarding,
          event-driven services on Kafka and AWS SQS, and React dashboards for ops.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href={Resume}
            download="Aviral_Asthana_Resume"
            rel="noopener noreferrer"
            className="btn-spotify inline-flex items-center justify-center gap-2"
            onClick={trackResumeDownload}
          >
            <FileDown size={18} aria-hidden="true" />
            Download Resume
          </a>
          <a href="#projects" className="btn-spotify-secondary inline-flex items-center justify-center">
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Home;
