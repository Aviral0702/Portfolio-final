import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Images/portfolio logo.png";
import linkedin from "../assets/social media icons/linkedin_2504923.png";
import github from "../assets/social media icons/github_2504911.png";
import twitter from "../assets/social media icons/logos_14417709.png";
import instagram from "../assets/social media icons/social_12234080.png";
import { trackSocialClick } from "../config/analytics";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#case-study", label: "Case Study" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/aviral-asthana-02b70824b/", img: linkedin, alt: "LinkedIn" },
    { href: "https://www.github.com/Aviral0702", img: github, alt: "GitHub" },
    { href: "https://www.instagram.com/i_m_asthana_avi/", img: instagram, alt: "Instagram" },
    { href: "https://x.com/AviralAsthana10", img: twitter, alt: "Twitter" },
  ];

  const linkClass =
    "transition-colors duration-200 font-medium relative group text-spotify-text-secondary hover:text-spotify-text-primary";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-spotify-dark-secondary/95 backdrop-blur-md border-b border-spotify-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-8 max-w-7xl mx-auto">
        <a href="#home" className="flex items-center group" aria-label="Homepage">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-spotify-green/20 rounded-full blur-md group-hover:bg-spotify-green/30 transition-all duration-300" />
          </div>
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-spotify-dark-tertiary transition-colors duration-200 focus-spotify"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-spotify-text-primary" /> : <Menu size={24} className="text-spotify-text-primary" />}
        </button>

        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map(({ href, img, alt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="p-2 rounded-lg hover:bg-spotify-dark-tertiary transition-all duration-200 group"
              onClick={() => trackSocialClick(alt.toLowerCase(), href)}
            >
              <img
                src={img}
                alt={alt}
                className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spotify-dark-secondary border-t border-spotify-border overflow-hidden"
          >
            <div className="py-6 px-6 space-y-6">
              <div className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={linkClass}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex justify-center space-x-6 pt-4 border-t border-spotify-border">
                {socialLinks.map(({ href, img, alt }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="p-3 rounded-lg hover:bg-spotify-dark-tertiary transition-all duration-200"
                    onClick={() => trackSocialClick(alt.toLowerCase(), href)}
                  >
                    <img src={img} alt={alt} className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
