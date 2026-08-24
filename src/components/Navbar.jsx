import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/portfolio logo.png";
import linkedin from "../assets/social media icons/linkedin_2504923.png";
import github from "../assets/social media icons/github_2504911.png";
import twitter from "../assets/social media icons/logos_14417709.png";
import instagram from "../assets/social media icons/social_12234080.png";
import { AnimatePresence, motion } from "framer-motion";
import { trackSocialClick } from "../config/analytics";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blog");

  const portfolioHref = (hash) => (isBlog ? `/${hash}` : hash);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { href: portfolioHref("#home"), label: "Home" },
    { href: portfolioHref("#about"), label: "About" },
    { href: portfolioHref("#skills"), label: "Skills" },
    { href: portfolioHref("#experience"), label: "Experience" },
    { href: portfolioHref("#projects"), label: "Projects" },
    { to: "/blog", label: "Blog", isRoute: true },
    { href: portfolioHref("#contact"), label: "Contact" },
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

  const linkClass = (active = false) =>
    `transition-colors duration-200 font-medium relative group ${
      active ? "text-spotify-green" : "text-spotify-text-secondary hover:text-spotify-text-primary"
    }`;

  const NavItem = ({ link, onClick }) => {
    const active = link.isRoute && location.pathname.startsWith(link.to);

    if (link.isRoute) {
      return (
        <Link to={link.to} className={linkClass(active)} onClick={onClick}>
          {link.label}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-spotify-green transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
        </Link>
      );
    }

    return (
      <a href={link.href} className={linkClass()} onClick={onClick}>
        {link.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full" />
      </a>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-spotify-dark-secondary/95 backdrop-blur-md border-b border-spotify-border' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center py-4 px-6 md:px-8 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center group" aria-label="Homepage">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-spotify-green/20 rounded-full blur-md group-hover:bg-spotify-green/30 transition-all duration-300"></div>
          </div>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-spotify-dark-tertiary transition-colors duration-200 focus-spotify"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-spotify-text-primary" /> : <Menu size={24} className="text-spotify-text-primary" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <NavItem key={link.label} link={link} />
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
              className="p-2 rounded-lg hover:bg-spotify-dark-tertiary transition-all duration-200 group"
              onClick={() => trackSocialClick(alt.toLowerCase(), href)}
            >
              <img 
                src={img} 
                alt={alt} 
                className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-110" 
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spotify-dark-secondary border-t border-spotify-border overflow-hidden"
          >
            <div className="py-6 px-6 space-y-6">
              <div className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <NavItem key={link.label} link={link} onClick={() => setIsMenuOpen(false)} />
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
