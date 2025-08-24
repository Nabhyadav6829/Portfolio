import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/Nabhyadav6829' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nabh-yadav-aaa82a295/' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Brand */}
        <h3 className="text-lg font-semibold">Nabh Yadav</h3>

        {/* Quick Links */}
        <div className="flex gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-300 hover:text-white"
            >
              <span className="text-lg">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="flex justify-center items-center w-full">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nabh Yadav
          </p>
         
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;