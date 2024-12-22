import React from "react";
import logo from "../assets/Images/portfolio logo.png";
import linkedin from '../assets/social media icons/linkedin_2504923.png';
import github from '../assets/social media icons/github_2504911.png';
import twitter from '../assets/social media icons/logos_14417709.png';
import instagram from '../assets/social media icons/social_12234080.png';
import gmail from '../assets/social media icons/letter_12868793.png';
function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 px-4">
        <div className="flex justify-between items-center p-2">
          <img src={logo} alt="" height={70} width={70} />
          <ul className="flex justify-center space-x-10">
            <li>
              <a
                href="#home"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/aviral-asthana-02b70824b/"><li><img src={linkedin} alt="" height={30} width={30}/></li></a>
            <a href="https://www.github.com/Aviral0702"><li><img src={github} alt="" height={30} width={30}/></li></a>
            <a href="https://www.instagram.com/i_m_asthana_avi/"><li><img src={instagram} alt="" height={30} width={30}/></li></a>
            <a href="https://x.com/AviralAsthana10"><li><img src={twitter} alt="" height={30} width={30}/></li></a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
