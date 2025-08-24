import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode } from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJavascript,
  SiHtml5, SiCss3
} from 'react-icons/si';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project categories
  const categories = ['all', 'fullstack', 'frontend'];

  // Tech stack icons mapping
  const techIcons = {
    'React': <FaReact />,
    'Node.js': <FaNode />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'Tailwind CSS': <SiTailwindcss />,
    'JavaScript': <SiJavascript />,
    'HTML': <SiHtml5 />,
    'CSS': <SiCss3 />
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Ride Ease',
      description: 'A ride-sharing application with multiple pickups and drop-offs, driver matching, and payment processing.',
      image: 'https://placehold.co/600x400/1e293b/cyan?text=Ride-Ease',
      category: 'fullstack',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Baskito',
      description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.',
      image: 'https://placehold.co/600x400/1e293b/cyan?text=Baskito',
      category: 'fullstack',
      techStack: ['Node.js', 'MongoDB', 'Express','CSS','HTML'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations and modern design.',
      image: 'https://placehold.co/600x400/1e293b/cyan?text=Portfolio',
      category: 'frontend',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Weather-wave',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive UI.',
      image: 'https://placehold.co/600x400/1e293b/cyan?text=Weather-wave',
      category: 'frontend',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://weathr-wave.netlify.app/',
      githubUrl: 'https://github.com/Nabhyadav6829/Weathr-Wave',
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="bg-slate-900 py-20 px-4 font-sans text-slate-100">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Explore my portfolio of web applications, from full-stack solutions to specialized tools
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-16">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-full border border-slate-600/50 p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mx-1 capitalize ${
                  selectedFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Centered with Gaps */}
        <div className="flex flex-wrap -mx-4 justify-center gap-y-8 gap-x-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-600/50 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 w-full max-w-sm px-4 sm:w-1/2 lg:w-1/3"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 backdrop-blur-md text-cyan-400 rounded-full text-xs font-semibold border border-cyan-400/30 capitalize">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-cyan-400 text-lg"
                      title={tech}
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-slate-400 text-sm">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-blue-500/10 pointer-events-none transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Nabhyadav6829"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-cyan-400 font-semibold rounded-full border border-cyan-400/30 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
          >
            <FaGithub size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;