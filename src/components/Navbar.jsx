import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Images/portfolio logo.png";
import { trackSocialClick } from "../config/analytics";

const SECTION_IDS = ["home", "about", "skills", "experience", "case-study", "projects", "contact"];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#case-study", id: "case-study", label: "Case Study" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/aviral-asthana-02b70824b/",
      icon: Linkedin,
      alt: "LinkedIn",
    },
    {
      href: "https://www.github.com/Aviral0702",
      icon: Github,
      alt: "GitHub",
    },
  ];

  const linkClass = (id) =>
    `relative font-medium transition-colors duration-200 ${
      active === id ? "text-spotify-green" : "text-spotify-text-secondary hover:text-spotify-text-primary"
    }`;

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
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-spotify-dark-tertiary transition-colors duration-200 focus-spotify"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} className="text-spotify-text-primary" /> : <Menu size={24} className="text-spotify-text-primary" />}
        </button>

        <div className="hidden md:flex md:items-center md:space-x-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.id)}>
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-spotify-green transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {socialLinks.map(({ href, icon: Icon, alt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="p-2 rounded-lg text-spotify-text-secondary hover:text-spotify-green hover:bg-spotify-dark-tertiary transition-colors"
              onClick={() => trackSocialClick(alt.toLowerCase(), href)}
            >
              <Icon size={20} />
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
                    className={linkClass(link.id)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex justify-center space-x-4 pt-4 border-t border-spotify-border">
                {socialLinks.map(({ href, icon: Icon, alt }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={alt}
                    className="p-3 rounded-lg text-spotify-text-secondary hover:text-spotify-green hover:bg-spotify-dark-tertiary"
                    onClick={() => trackSocialClick(alt.toLowerCase(), href)}
                  >
                    <Icon size={22} />
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
