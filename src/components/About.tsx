import { FaMapMarkerAlt, FaUniversity, FaMicrochip, FaBirthdayCake, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const skills = [
    { name: 'CCNA', percentage: 95 },
    { name: 'CCNP', percentage: 90 },
    { name: 'Network Automation', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'Network Security', percentage: 75 },
    { name: 'RESTful APIs', percentage: 70 },
    { name: 'Linux Systems', percentage: 65 },
    { name: 'Cloud Computing', percentage: 60 },
    { name: 'Git & GitHub', percentage: 55 },
    { name: 'Docker', percentage: 50 },
    { name: 'CI/CD', percentage: 45 },
    { name: 'Network Protocols', percentage: 40 },
    { name: 'Troubleshooting', percentage: 35 },
  ];

  const achievements = [
    'Automated network configurations',
    'Developed monitoring tools',
    'Improved network security',
    'Optimized network performance',
    'Created efficient backup systems'
  ];

  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const circumference = 2 * Math.PI * 40; // radius = 40
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90">
          {/* Background circle */}
          <circle
            className="text-gray-300/20"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff87" />
              <stop offset="100%" stopColor="#60efff" />
            </linearGradient>
          </defs>
          {/* Progress circle with gradient */}
          <circle
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-xl font-bold text-textPrimary">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About <span className="text-secondary">Me</span>
              </motion.h2>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-accent font-mono mb-6">
                  Electronics & Communications Engineer
                </div>

                <motion.p 
                  className="text-textSecondary mb-8 font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Born in 2003, I'm an Electronics and Communications Engineering
                  student at Mansoura University. Currently based in Aga, Dakahlia
                  Governorate, Mansoura, Egypt. I combine my engineering background
                  with my passion for network automation. I specialize in Python
                  programming for network automation, utilizing frameworks like Netmiko
                  and Ansible to streamline network operations. My focus is on building
                  efficient automation solutions that enhance network reliability and
                  reduce manual configuration tasks.
                </motion.p>

                {/* Info Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <InfoItem
                    icon={FaMapMarkerAlt}
                    label="Location"
                    value="Mansoura, Egypt"
                  />
                  <InfoItem
                    icon={FaBirthdayCake}
                    label="Age"
                    value="21 years"
                  />
                  <InfoItem
                    icon={FaUniversity}
                    label="University"
                    value="Mansoura University"
                  />
                  <InfoItem
                    icon={FaMicrochip}
                    label="Major"
                    value="Electronics & Communications"
                  />
                </motion.div>

                <motion.div className="relative">
                  {/* View Skills Button */}
                  <motion.button 
                    className="mt-8 border-2 border-secondary text-secondary font-mono py-2 px-6 rounded-full
                             hover:bg-secondary hover:text-primary transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    onClick={() => setShowModal(true)}
                  >
                    View Skills →
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex justify-center items-center"
            >
              <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative">
                <div className="absolute -inset-1">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="gradient-about" x1="0%" y1="0%" x2="100%" y2="0%">
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
                      stroke="url(#gradient-about)"
                      strokeWidth="2"
                      strokeDasharray="8,4,1,4"
                      style={{ opacity: 1 }}
                    />
                  </svg>
                </div>
                
                {/* Image container */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/profile.jpg`}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-textPrimary">Skills & Achievements</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Skills */}
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-4">Technical Skills</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center space-y-4">
                        <CircularProgress percentage={skill.percentage} />
                        <span className="text-textPrimary font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-2 text-textSecondary font-mono"
                      >
                        <span className="text-secondary">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center text-secondary">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-textSecondary text-sm font-mono">{label}</div>
      <div className="text-textPrimary font-mono">{value}</div>
    </div>
  </div>
);

export default About;
