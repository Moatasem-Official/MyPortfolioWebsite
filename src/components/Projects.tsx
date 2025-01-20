import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import IpConverterAnimation from './IpConverterAnimation';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  customComponent?: React.ComponentType;
}

export const projects: Project[] = [{
  id: 1,
  title: 'IP Address Converter Tool',
  description: 'A powerful GUI tool for network administrators that simplifies IP address calculations and subnet planning. Features include subnet calculations, IP range generation, and an intuitive interface.',
  technologies: ['Python', 'Tkinter', 'Networking', 'GUI Development'],
  github: 'https://github.com/Moatasem-Official/IP_Address_Generator_Tool.git',
  image: '/projects/Ip Add Converter Tool/screenshots/Screenshot 2025-01-04 190814.png',
  customComponent: IpConverterAnimation
}];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-primary overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-textPrimary mb-2 font-mono text-center"
              variants={itemVariants}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Projects</span>
            </motion.h1>

            <motion.p className="text-textSecondary text-center max-w-2xl mx-auto mb-12 font-mono">
              Here are some of my featured projects that showcase my skills in network automation and development.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                key={projects[0].id}
                variants={itemVariants}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-500 group hover:shadow-xl hover:shadow-secondary/5 relative"
              >
                {/* Corner spans */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary/50 rounded-tl-xl transition-all duration-500 group-hover:w-12 group-hover:h-12 z-10"></span>
                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary/50 rounded-tr-xl transition-all duration-500 group-hover:w-12 group-hover:h-12 z-10"></span>
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/50 rounded-bl-xl transition-all duration-500 group-hover:w-12 group-hover:h-12 z-10"></span>
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-xl transition-all duration-500 group-hover:w-12 group-hover:h-12 z-10"></span>

                <div className="relative h-auto min-h-[250px] sm:min-h-[300px] md:min-h-[350px] p-4 group-hover:scale-[1.02] transition-all duration-500">
                  {projects[0].customComponent ? (
                    <div className="w-full h-full">
                      {React.createElement(projects[0].customComponent)}
                    </div>
                  ) : (
                    <>
                      <img
                        src={process.env.PUBLIC_URL + projects[0].image}
                        alt={projects[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-50" />
                    </>
                  )}
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-mono transform group-hover:translate-x-1 transition-transform duration-500">
                    {projects[0].title}
                  </h3>
                  
                  <p className="text-textSecondary text-sm leading-relaxed font-mono group-hover:text-textPrimary transition-colors duration-500">
                    {projects[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {projects[0].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] sm:text-xs bg-secondary/5 text-secondary px-2 sm:px-3 py-1 rounded-full border border-secondary/20 group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                    <Link
                      to="/projects/ip-converter"
                      onClick={() => window.scrollTo(0, 0)}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/40 rounded-lg text-secondary hover:text-accent transition-all duration-300 text-sm font-mono group"
                    >
                      View Details
                      <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                    <motion.a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/40 rounded-lg text-secondary hover:text-accent transition-all duration-300 text-sm font-mono group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                      Source Code
                    </motion.a>
                    <motion.a
                      href="https://github.com/Moatasem-Official/IP_Address_Generator_Tool/releases/tag/v1.0.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/40 rounded-lg text-secondary hover:text-accent transition-all duration-300 text-sm font-mono group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaDownload className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
                      Download
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
