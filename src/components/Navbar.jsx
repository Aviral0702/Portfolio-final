import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/portfolio logo.png";
import linkedin from "../assets/social media icons/linkedin_2504923.png";
import github from "../assets/social media icons/github_2504911.png";
import twitter from "../assets/social media icons/logos_14417709.png";
import instagram from "../assets/social media icons/social_12234080.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 px-4">
      <div className="flex justify-between items-center p-2">
        <img src={logo} alt="Logo" height={70} width={70} className="p-1 -translate-x-2" />
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-10">
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
              href="#skills"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Experience
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
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Social Media Icons */}
        <ul className="hidden md:flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/aviral-asthana-02b70824b/">
            <li>
              <img src={linkedin} alt="LinkedIn" height={30} width={30} />
            </li>
          </a>
          <a href="https://www.github.com/Aviral0702">
            <li>
              <img src={github} alt="GitHub" height={30} width={30} />
            </li>
          </a>
          <a href="https://www.instagram.com/i_m_asthana_avi/">
            <li>
              <img src={instagram} alt="Instagram" height={30} width={30} />
            </li>
          </a>
          <a href="https://x.com/AviralAsthana10">
            <li>
              <img src={twitter} alt="Twitter" height={30} width={30} />
            </li>
          </a>
        </ul>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col space-y-4 items-center py-4">
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
                href="#skills"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Experience
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
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aviral-asthana-02b70824b/">
                <img src={linkedin} alt="LinkedIn" height={30} width={30} />
              </a>
              <a href="https://www.github.com/Aviral0702">
                <img src={github} alt="GitHub" height={30} width={30} />
              </a>
              <a href="https://www.instagram.com/i_m_asthana_avi/">
                <img src={instagram} alt="Instagram" height={30} width={30} />
              </a>
              <a href="https://x.com/AviralAsthana10">
                <img src={twitter} alt="Twitter" height={30} width={30} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
