import React from "react";
import bg from "../assets/Images/2040596_275310-P5VU87-469.jpg";
import astronaut from "../assets/Images/rb_38616.png";
import Typewriter from "typewriter-effect";
import { Button } from "flowbite-react";
import Resume from "../assets/resume/Aviral_asthana_Cl.pdf";
const Home = () => (
  <div className="relative min-h-screen w-full overflow-hidden group">
    <div className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:blur-sm">
      <img
        src={bg}
        alt="Cloud Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10 min-h-screen px-4 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8">
        <div className="text-center md:text-left flex-1">
          <h1 className="flex gap-2 text-4xl md:text-6xl font-bold mb-4 text-white">
            <span>Hi, I am</span>
            <Typewriter
              options={{
                strings: ['Aviral Asthana'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h2 className="text-2xl md:text-4xl mb-4">
            <span className="text-gray-400">
              Back-End / Full Stack Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-fuchsia-200">
            I am a Back-End / Full-Stack Developer. I have experience in
            developing web applications using Node.js, Express.js, and React.js.
          </p>
          <Button gradientDuoTone="purpleToPink" className="mt-4 w-full" as="a" href={Resume} download="myfile">Resume</Button>
        </div>
        <div className="flex">
          <img
            src={astronaut}
            alt="Astronaut"
            className="w-[500px] h-[500px] object-contain hover:translate-x-4 hover:translate-y-4 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
