import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// All links
const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#education", title: "Education" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive link logic
  let visibleLinks = [];
  if (windowWidth > 800) {
    visibleLinks = navLinks; // All links
  } else if (windowWidth > 700) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills", "#projects", "#education"].includes(link.href)
    );
  } else if (windowWidth > 500) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills", "#projects"].includes(link.href)
    );
  } else if (windowWidth > 480) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills"].includes(link.href)
    );
  } else if (windowWidth > 398) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills"].includes(link.href)
    );
  } else {
    // 👇 398 se niche Skills bhi hamburger me
    visibleLinks = navLinks.filter((link) => ["#home", "#about"].includes(link.href));
  }

  // Jo visible nahi hain wo hamburger me jayenge
  const hiddenLinks = navLinks.filter((link) => !visibleLinks.includes(link));

  const renderNavLinks = (links, isMobile = false) =>
    links.map((link) => (
      <div key={link.href} className={`relative group ${isMobile ? "w-full" : ""}`}>
        <a
          href={link.href}
          className={`text-slate-300 hover:text-cyan-400 transition-colors duration-300 z-10 relative ${
            isMobile
              ? "text-xl py-3 px-6 rounded-full w-full text-center block"
              : "text-lg px-6 py-3"
          }`}
          onClick={isMobile ? toggleMobileMenu : undefined}
        >
          {link.title}
        </a>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 z-0 w-24 h-12"></div>
      </div>
    ));

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-600/50 shadow-xl shadow-cyan-500/20">
          <div className="flex items-center justify-between h-14 px-6">
            {/* Visible Links */}
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-evenly w-full">
                {renderNavLinks(visibleLinks)}
              </div>
              {windowWidth > 805 && (
                <a
                  href="/Nabh+1+resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-5 rounded-full text-sm hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 whitespace-nowrap"
                >
                  Resume
                </a>
              )}
            </div>

            {/* Hamburger only if kuch hidden hai OR resume hidden hai */}
            {(hiddenLinks.length > 0 || windowWidth <= 805) && (
              <div className="flex-grow flex justify-end">
                <button
                  onClick={toggleMobileMenu}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-slate-700/50"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl border border-slate-600/50 shadow-xl shadow-cyan-500/20">
            <div className="flex flex-col items-center space-y-4 py-6 px-6">
              {renderNavLinks(hiddenLinks, true)}

              {/* Resume only in hamburger if width <= 805 */}
               {windowWidth <= 805 && (
                <a
                  href="/Nabh+1+resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 mt-2"
                  onClick={toggleMobileMenu}
                >
                  Resume
                </a>
              )} 
              {windowWidth <= 805 && (
  <span
    className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-500/30 mt-2"
  >
    Resume
  </span>
)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
