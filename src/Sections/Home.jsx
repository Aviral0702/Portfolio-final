import React from "react";
import bg from "../assets/Images/2040596_275310-P5VU87-469.jpg";
import astronaut from "../assets/Images/rb_38616.png";
import Typewriter from "typewriter-effect";
import Resume from "../assets/resume/Aviral_Asthana_resume_v1.pdf";
import fileIcon from "../assets/icons/file.png";
import LatestWork from "./LatestWork";

const metrics = [
  { value: "40×", label: "API speedup" },
  { value: "1,000+", label: "bank accounts opened" },
  { value: "500+", label: "users on RFI orchestrator" },
];

const Home = () => (
  <>
    <div className="relative min-h-screen w-full overflow-hidden group">
      <div className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:blur-sm motion-reduce:transition-none">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 min-h-screen px-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8">
          <div className="text-center flex flex-col items-center md:items-start md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white flex flex-wrap justify-center md:justify-start gap-2">
              <span>Hi, I am</span>
              <Typewriter
                options={{
                  strings: ["Aviral Asthana"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-300 font-medium">
              Backend Software Engineer
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm"
                >
                  <p className="text-lg font-bold text-purple-300">{metric.value}</p>
                  <p className="text-xs text-gray-300">{metric.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base md:text-lg max-w-2xl text-fuchsia-200 mx-auto md:mx-0">
              I build production backend systems in Go and Java — core banking integrations,
              KYC/onboarding, event-driven services on Kafka and AWS SQS, and React dashboards for ops.
            </p>

            <a
              href={Resume}
              download="Aviral_Asthana_Resume"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-[200px] sm:w-[250px] md:w-[300px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <img src={fileIcon} alt="" width={20} height={20} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center items-center flex-1">
            <img
              src={astronaut}
              alt="Floating astronaut illustration"
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain motion-safe:hover:translate-x-2 motion-safe:hover:translate-y-2 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>

    <LatestWork />
  </>
);

export default Home;
