import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  // Education data
  const education = [
   {
 "id": 1,
 "degree": "Bachelor of Technology in Computer Science and Engineering",
 "institution": "I.M.S Engineering College",
 "duration": "2018 - 2022",
 "location": "Ghaziabad, Uttar-Pradesh",
 "description": (
   <>
     Secured an 
     <span className="font-bold text-cyan-400"> 8.9 SGPA </span> 
     by developing a deep understanding of software engineering principles, from advanced algorithms to system design.
   </>
 )
},
   {
 id: 2,
 degree: 'Intermediate in Science',
 institution: 'Diamond Public School',
 duration: '2022 - 2023',
 location: 'Moradabad, Uttar Pradesh',
 description: (
   <>
      Achieved <span className="font-bold text-cyan-400"> 79% Percentage </span> and developed a strong academic foundation in core scientific principles, with a particular emphasis on Physics, Chemistry, and Mathematics.
   </>
 )
},
   {
      id: 3,
      degree: 'High School (Science Stream)',
      institution: 'Spring Fields College',
      duration: '2020 - 2021',
      location: 'Moradabad, Uttar Pradesh',
      description: (
        <>
          Graduated with a focus on Physics, Chemistry, and Mathematics, achieving{" "}
          <span className="font-bold text-cyan-400"> 78% Percentage </span>
        </>
      )
    },
    
  ];

  return (
    <section id="education" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A journey through my academic and professional learning experiences
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line for Mobile */}
          <div className="absolute left-5 transform -translate-x-1/2 w-1 h-full bg-slate-700/50 rounded-full md:hidden"></div>
          
          {/* Centered Timeline Line for Desktop */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full hidden md:block"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 pl-14 md:pl-0 md:flex md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:gap-1`}
            >
              {/* Left/Right Content */}
              <div className="w-full md:w-5/12">
                <div className="relative bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-600/50 p-6 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                  {/* Education Content */}
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-1">{edu.institution}</h4>
                    <p className="text-sm text-slate-400 mb-2">
                      {edu.duration} | {edu.location}
                    </p>
                    <p className="text-slate-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Icon (Hidden on mobile) */}
              <div className="hidden md:block relative z-10 bg-cyan-500/20 backdrop-blur-md rounded-full p-3 border border-cyan-400/30 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <GraduationCap className="text-cyan-400 text-2xl" />
              </div>

              {/* Empty Space for Desktop Layout */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;