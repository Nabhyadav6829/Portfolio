import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      {/* Center container only */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Circular container - only this part visible */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-600/50 shadow-xl shadow-cyan-500/20">
          <div className="flex items-center justify-between h-14 px-6">
            {/* Desktop Navigation Links and Resume Button */}
            <div className="flex items-center justify-between w-full">
              <div className="hidden md:flex justify-evenly w-full">
                <div className="relative group">
                  <a href="#home" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    Home
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
                <div className="relative group">
                  <a href="#about" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    About
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
                <div className="relative group">
                  <a href="#skills" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    Skills
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
                <div className="relative group">
                  <a href="#projects" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    Projects
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
                <div className="relative group">
                  <a href="#education" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    Education
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
                <div className="relative group">
                  <a href="#contact" className="text-slate-300 text-lg hover:text-cyan-400 transition-colors duration-300 hover:scale-105 z-10 relative px-6 py-3">
                    Contact
                  </a>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
                </div>
              </div>

              {/* Resume Button */}
              <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-5 rounded-full text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
>
  Resume
</a>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-700/50"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-4 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl border border-slate-600/50 shadow-xl shadow-cyan-500/20">
            <div className="flex flex-col items-center space-y-4 py-6 px-6">
              <div className="relative group w-full">
                <a 
                  href="#home" 
                  className="text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300 py-3 px-6 rounded-full w-full text-center z-10 relative" 
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
              </div>
              <div className="relative group w-full">
                <a 
                  href="#about" 
                  className="text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300 py-3 px-6 rounded-full w-full text-center z-10 relative" 
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
              </div>
              <div className="relative group w-full">
                <a 
                  href="#skill" 
                  className="text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300 py-3 px-6 rounded-full w-full text-center z-10 relative" 
                  onClick={toggleMobileMenu}
                >
                  Skill
                </a>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
              </div>
              <div className="relative group w-full">
                <a 
                  href="#project" 
                  className="text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300 py-3 px-6 rounded-full w-full text-center z-10 relative" 
                  onClick={toggleMobileMenu}
                >
                  Project
                </a>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-30 h-12"></div>
              </div>
              <div className="relative group w-full">
                <a 
                  href="#education" 
                  className="text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300 py-3 px-6 rounded-full w-full text-center z-10 relative" 
                  onClick={toggleMobileMenu}
                >
                  Education
                </a>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-30 h-12"></div>
              </div>
              <a 
                href="#resume" 
                className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 mt-2" 
                onClick={toggleMobileMenu}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










