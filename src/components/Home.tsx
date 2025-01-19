import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaGithub as FaGithubIcon, FaLinkedin as FaLinkedinIcon, FaFacebook as FaFacebookIcon, FaEnvelope } from 'react-icons/fa';
import { Dispatch, SetStateAction, useState } from 'react';
import { projects } from './Projects';
import { certifications } from './Certifications';
import { getPublicUrl } from '../config/paths';
import CVModal from './CVModal';

interface HomeProps {
  showHireModal: boolean;
  setShowHireModal: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ showHireModal, setShowHireModal }: HomeProps) => {
  const [showCVModal, setShowCVModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-primary overflow-hidden">
      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-6 pt-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {showCVModal && <CVModal showModal={showCVModal} setShowModal={setShowCVModal} />}
        </AnimatePresence>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-xl text-accent mb-4 font-mono"
              variants={itemVariants}
            >
              Network Automation Engineer
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 font-mono"
              variants={titleVariants}
            >
              Hello I'm
              <br />
              <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                MOATASEM NAGY
              </span>
            </motion.h1>
            <motion.p 
              className="text-textSecondary max-w-2xl mb-8 font-mono"
              variants={itemVariants}
            >
              I specialize in network automation and infrastructure optimization. 
              Leveraging my expertise in programming and networking technologies 
              to build efficient, scalable network solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setShowCVModal(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#1a1a1a] text-secondary border-2 border-secondary/20 rounded-lg group relative overflow-hidden font-poppins text-sm sm:text-base"
              >
                <span className="absolute bottom-0 left-0 w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-secondary group-hover:h-full group-hover:translate-y-0" />
                <span className="absolute top-0 left-0 w-full h-0 mb-0 transition-all duration-300 ease-out transform -translate-y-0 bg-secondary opacity-30 group-hover:h-full group-hover:translate-y-0 delay-75" />
                <div className="relative flex items-center justify-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <FaDownload className="text-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <span>Download CV</span>
                </div>
              </motion.button>

              <motion.div 
                className="flex gap-4"
                variants={itemVariants}
              >
                {[
                  { icon: FaGithubIcon, href: 'https://github.com/Moatasem-Official' },
                  { icon: FaLinkedinIcon, href: 'https://www.linkedin.com/in/moatasem-nagy-677b67232' },
                  { icon: FaFacebookIcon, href: 'https://www.facebook.com/share/15urLgi2We/' }
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 1.2 + index * 0.1 } 
                    }}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative mx-auto">              
              <div className="absolute -inset-1">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="gradient-home" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#00ff87', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#60efff', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#00ff87', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Border with gradient */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#gradient-home)"
                    strokeWidth="2"
                    strokeDasharray="8,4,1,4"
                    style={{ opacity: 1 }}
                  />
                </svg>
              </div>
              
              {/* Image container */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img
                  src={getPublicUrl('/profile.jpg')}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-secondary mb-1 font-mono">1+</h3>
            <p className="text-textSecondary text-sm font-mono">Years of Experience</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-secondary mb-1 font-mono">{projects.length}+</h3>
            <p className="text-textSecondary text-sm font-mono">Projects Completed</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-secondary mb-1 font-mono">13+</h3>
            <p className="text-textSecondary text-sm font-mono">Technologies</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-secondary mb-1 font-mono">{certifications.length}+</h3>
            <p className="text-textSecondary text-sm font-mono">Certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
