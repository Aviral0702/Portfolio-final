import React from "react";
import bg from "../assets/Images/2040596_275310-P5VU87-469.jpg";
import astronaut from "../assets/Images/rb_38616.png";
import Typewriter from "typewriter-effect";
import { Button } from "flowbite-react";
import Resume from "../assets/resume/Aviral_Asthana_resume_v1.pdf";
import fileIcon from "../assets/icons/file.png";
import LatestWork from "./LatestWork";

const Home = () => (
  <>
    <div id="home" className="relative min-h-screen w-full overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:blur-sm">
        <img
          src={bg}
          alt="Cloud background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 min-h-screen px-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8">
          
          {/* Text Content */}
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

            <h2 className="text-xl sm:text-2xl md:text-4xl mb-4 text-gray-400">
              Backend Software Engineer
            </h2>

            <p className="text-sm sm:text-base md:text-lg max-w-2xl text-fuchsia-200 mx-auto md:mx-0">
              I build production backend systems in Go and Java — core banking integrations, KYC/onboarding, event-driven services on Kafka and AWS SQS, and React dashboards for ops.
            </p>

            <Button
              gradientDuoTone="purpleToPink"
              className="mt-4 w-[200px] sm:w-[250px] md:w-[300px] flex items-center justify-center gap-2"
              as="a"
              href={Resume}
              download="Aviral_Asthana_Resume"
              rel="noopener noreferrer"
            >
              <img src={fileIcon} alt="File icon" width={20} height={20} />
              Download Resume
            </Button>
          </div>

          {/* Astronaut Image */}
          <div className="flex justify-center items-center flex-1">
            <img
              src={astronaut}
              alt="Floating astronaut illustration"
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain hover:translate-x-2 hover:translate-y-2 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>

    <LatestWork />
  </>
);

export default Home;
