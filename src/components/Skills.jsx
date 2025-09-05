import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt,
  FaGithubAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiExpress,
  SiVercel,
  SiMysql,
} from 'react-icons/si';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [animatedBars, setAnimatedBars] = useState({});

  // Skill categories
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', icon: <FaJs />, level: 95, color: 'from-yellow-400 to-yellow-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, color: 'from-teal-400 to-cyan-500' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98, color: 'from-orange-400 to-red-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 92, color: 'from-blue-400 to-blue-600' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 88, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 90, color: 'from-green-500 to-green-700' },
        { name: 'MySQL', icon: <SiMysql />, level: 80, color: 'from-blue-600 to-blue-700' }
       ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', icon: <FaGithubAlt />, level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Vercel', icon: <SiVercel />, level: 85, color: 'from-gray-800 to-black' }
      ]
    }
  };

  // Animate progress bars when component mounts or category changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedBars = {};
      skillCategories[selectedCategory].skills.forEach((skill, index) => {
        newAnimatedBars[`${selectedCategory}-${index}`] = true;
      });
      setAnimatedBars(newAnimatedBars);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs (Now Responsive) */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-800/60 backdrop-blur-md rounded-2xl md:rounded-full border border-slate-600/50 p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            {skillCategories[selectedCategory].title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <div 
                key={`${selectedCategory}-${index}`}
                className="group bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-600/50 p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {/* Skill Header */}
                <div className="flex items-center mb-4">
                  <div className={`text-2xl mr-4 p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{skill.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Proficiency</span>
                      <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                        animatedBars[`${selectedCategory}-${index}`] ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        width: animatedBars[`${selectedCategory}-${index}`] ? `${skill.level}%` : '0%'
                      }}
                    >
                      {/* Animated shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;