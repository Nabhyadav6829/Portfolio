import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import IMG from '../assets/young-man.png';

const About = () => {

  return (
    <section id="about" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
      <div className="container max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Column: Image (Now hidden on small screens) */}
          <div className="hidden lg:flex lg:w-1/2 justify-center">
            <div className="relative">
              <img
                src={IMG}
                alt="About me"
                className="rounded-3xl w-80 h-96 md:w-96 md:h-[450px] object-cover shadow-2xl shadow-cyan-500/20"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-3xl"></div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-60"></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">

            {/* Main Description */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
                Full-Stack MERN Developer
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I am a MERN Stack Developer with a passion for building complete, end-to-end web applications. I specialize in leveraging React to craft dynamic, responsive, and intuitive front-end interfaces that deliver a seamless user experience.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                On the server-side, I utilize Node.js and Express.js to architect and build robust, scalable RESTful APIs. I am skilled in managing the application's data layer with MongoDB, ensuring efficient and reliable database performance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My goal is to bring ideas to life by handling the entire development lifecycle, from concept to deployment. I am eager to apply my MERN stack expertise to build high-performance web solutions in a collaborative environment.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;