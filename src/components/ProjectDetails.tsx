import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaCode, FaServer, FaNetworkWired } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import IpConverterAnimation from './IpConverterAnimation';
import IpToolDemo from './IpToolDemo';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const projects = {
  'ip-converter': {
    title: 'IP Address Converter Tool',
    description: 'A powerful GUI tool for network administrators that simplifies IP address calculations and subnet planning.',
    longDescription: `This advanced IP Address Management tool is designed to streamline network administration tasks. 
    It provides an intuitive interface for IP address calculations, subnet planning, and network organization.`,
    features: [
      {
        icon: <FaNetworkWired className="w-6 h-6 text-secondary" />,
        title: 'Subnet Calculator',
        description: 'Calculate subnet masks, network addresses, and broadcast addresses with ease.'
      },
      {
        icon: <FaServer className="w-6 h-6 text-secondary" />,
        title: 'IP Range Generator',
        description: 'Generate IP address ranges for different subnet sizes based on requirements.'
      },
      {
        icon: <FaCode className="w-6 h-6 text-secondary" />,
        title: 'Binary Conversion',
        description: 'Convert IP addresses between decimal and binary formats instantly.'
      }
    ],
    technologies: ['Python', 'Tkinter', 'Networking', 'GUI Development'],
    screenshots: [
      {
        url: process.env.PUBLIC_URL + '/projects/Ip Add Converter Tool/screenshots/Screenshot 2025-01-04 190814.png',
        caption: 'Main Interface'
      },
      {
        url: process.env.PUBLIC_URL + '/projects/Ip Add Converter Tool/screenshots/Screenshot 2025-01-04 190848.png',
        caption: 'Results View'
      }
    ],
    github: 'https://github.com/Moatasem-Official/IP_Address_Generator_Tool.git',
    downloadUrl: 'https://github.com/Moatasem-Official/IP_Address_Generator_Tool/releases/tag/v1.0.0'
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects[projectId as keyof typeof projects];

  useEffect(() => {
    window.scrollTo(0, 0);
    // تغيير عنوان الصفحة عند فتح المشروع
    if (project) {
      document.title = `${project.title} | Moatasem Nagy Portfolio`;
    }
    // إعادة العنوان الأصلي عند مغادرة الصفحة
    return () => {
      document.title = 'Moatasem Nagy | Portfolio';
    };
  }, [project]);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary text-white py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <button 
            onClick={handleBackClick}
            className="text-secondary hover:text-accent transition-colors"
          >
            ← Back to Projects
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{project.description}</p>
        </div>

        {/* Demo Animation */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Live Demo</h2>
          <IpToolDemo />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-secondary/10 rounded-full text-secondary border border-secondary/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.caption}
                  className="rounded-lg w-full border border-secondary/10 group-hover:border-secondary/30 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end">
                  <p className="text-white p-4">{screenshot.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center gap-6">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-lg hover:bg-accent transition-colors"
            >
              <FaGithub className="text-lg" />
              Source Code
            </motion.a>
            <motion.a
              href={project.downloadUrl}
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
            >
              <FaDownload className="w-5 h-5" />
              Download
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
