import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfileImage from '../assets/ProfileImage.png';

const Hero = () => {
  return (
    // Main container
    <section id="home" className="bg-slate-900 pt-12 px-4 font-sans text-slate-100">
      <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans text-slate-100 p-4 pt-0">
        
        {/* Container to control max-width and center the content */}
        <div className="container max-w-6xl mt-0 mx-auto">
          
          {/* Flex container for the two-column layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">

            {/* Left Column: Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
                Hi, I am <span className="text-cyan-400">Nabh Yadav</span>
              </h1>
              
              {/* Subheading/Tagline */}
              <p className="text-lg md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto text-justify md:mx-0">
                A MERN Stack Developer with hands-on experience in building and deploying end-to-end web applications. I am skilled in leveraging React for intuitive front-end interfaces, Node.js and Express.js for robust back-end APIs, and MongoDB for database management. My practical experience is complemented by exceptional problem-solving abilities, demonstrated by solving over 350+ LeetCode challenges.
                </p>
              
              {/* Call to Action (CTA) Button */}
              <a 
                href="#projects" 
                className="inline-block bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg 
                          hover:bg-cyan-400 transition-all duration-300 ease-in-out 
                          transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                View My Work
              </a>

              {/* Social Media Links */}
         
         
         
         
         
         
         
         
         
           <div className="flex justify-center md:justify-start space-x-6 mt-16">
  <a
    href="https://github.com/Nabhyadav6829"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
  >
    <FaGithub size={32} />
  </a>

  <a
    href="https://www.linkedin.com/in/nabh-yadav-aaa82a295/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
      alt="LinkedIn Logo"
      className="w-8 h-8"
    />
  </a>

  <a
    href="https://leetcode.com/u/nabhyadav/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
  >
    <img
      src="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png"
      alt="LeetCode Avatar"
      className="w-8 h-8"
    />
  </a>
</div>







            </div>

            {/* Right Column: Image */}
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={ProfileImage} 
                alt="Profile" 
                className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/20" 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
