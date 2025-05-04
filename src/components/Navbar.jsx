import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/portfolio logo.png";
import linkedin from "../assets/social media icons/linkedin_2504923.png";
import github from "../assets/social media icons/github_2504911.png";
import twitter from "../assets/social media icons/logos_14417709.png";
import instagram from "../assets/social media icons/social_12234080.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aviral-asthana-02b70824b/",
      img: linkedin,
      alt: "LinkedIn",
    },
    {
      href: "https://www.github.com/Aviral0702",
      img: github,
      alt: "GitHub",
    },
    {
      href: "https://www.instagram.com/i_m_asthana_avi/",
      img: instagram,
      alt: "Instagram",
    },
    {
      href: "https://x.com/AviralAsthana10",
      img: twitter,
      alt: "Twitter",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 px-4">
      <div className="flex justify-between items-center py-3 md:py-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center" aria-label="Homepage">
          <img
            src={logo}
            alt="Logo"
            height={60}
            width={60}
            className="p-1"
          />
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map(({ href, img, alt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <img src={img} alt={alt} height={28} width={28} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-5">
            {socialLinks.map(({ href, img, alt }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
              >
                <img src={img} alt={alt} height={28} width={28} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
