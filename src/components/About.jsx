import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import IMG from '../assets/young-man.png';
const About = () => {
  const highlights = [
    {
      icon: <FaCode size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions through creative thinking."
    },
    {
      icon: <FaRocket size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    },
    {
      icon: <FaHeart size={24} />,
      title: "Passion Driven",
      description: "Genuinely passionate about technology and creating meaningful digital experiences."
    }
  ];

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
          
          {/* Left Column: Image */}
          <div className="lg:w-1/2 flex justify-center">
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
                Crafting Digital Experiences
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                modern web applications. My journey began with curiosity about how websites work, 
                and it has evolved into a deep love for building scalable, user-centric solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying ahead of the curve in this ever-evolving field.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that not only work flawlessly but also provide exceptional user experiences.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;