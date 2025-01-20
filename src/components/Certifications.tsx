import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { getPublicUrl } from '../config/paths';

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  certificate: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Python Essentials 2',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/python-essentials-2.png',
    certificate: '/certificates/Python_Essentials_2_Badge20240918-7-owgg70.pdf'
  },
  {
    id: 2,
    title: 'Python Essentials 1',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/python-essentials-1.1.png',
    certificate: '/certificates/Python_Essentials_1_Badge20240918-7-shgmay.pdf'
  },
  {
    id: 3,
    title: 'Network Defense',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/network-defense.png',
    certificate: '/certificates/Network_Defense_Badge20240918-7-7q77vs.pdf'
  },
  {
    id: 4,
    title: 'Network Technician Career Path',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/network-technician-career-path.png',
    certificate: '/certificates/Network_Technician_Career_Path_Badge20240918-7-4xd38b.pdf'
  },
  {
    id: 5,
    title: 'Networking Basics',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/networking-basics.png',
    certificate: '/certificates/Networking_Basics_Badge20240917-7-nhqnsc.pdf'
  },
  {
    id: 6,
    title: 'Introduction to Cybersecurity',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/introduction-to-cybersecurity.png',
    certificate: '/certificates/Introduction_to_Cybersecurity_Badge20240917-7-cdsrd0.pdf'
  },
  {
    id: 7,
    title: 'Operating Systems Basics',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/operating-systems-basics.png',
    certificate: '/certificates/Operating_Systems_Basics_Badge20240917-8-oljgbh.pdf'
  },
  {
    id: 8,
    title: 'Computer Hardware Basics',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/computer-hardware-basics.png',
    certificate: '/certificates/Computer_Hardware_Basics_Badge20240917-7-37nijq.pdf'
  },
  {
    id: 9,
    title: 'English for IT 2',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/english-for-it-2.png',
    certificate: '/certificates/English_for_IT_2_Badge20240917-7-lgl03k.pdf'
  },
  {
    id: 10,
    title: 'English for IT 1',
    organization: 'Cisco Networking Academy',
    date: 'Sep 2024',
    image: '/certificates/english-for-it-1.png',
    certificate: '/certificates/English_for_IT_1_Badge20240917-6-otdw5l.pdf'
  }
];

const Certifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const certificationsPerPage = 3;
  const totalPages = Math.ceil(certifications.length / certificationsPerPage);

  // الحصول على الشهادات للصفحة الحالية
  const indexOfLastCertificate = currentPage * certificationsPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificationsPerPage;
  const currentCertificates = certifications.slice(indexOfFirstCertificate, indexOfLastCertificate);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
    <div className="w-full bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center min-h-screen">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-textPrimary mb-12 font-mono text-center"
              variants={itemVariants}
            >
              My <span className="text-secondary">Certifications</span>
            </motion.h1>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="bg-[#1a1a1a] rounded-xl overflow-hidden relative group h-full flex flex-col hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 hover:scale-105 transition-all duration-500 p-3"
                  variants={itemVariants}
                >
                  {/* Corner spans */}
                  <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary/50 rounded-tl-xl transition-all duration-500 group-hover:w-12 group-hover:h-12"></span>
                  <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary/50 rounded-tr-xl transition-all duration-500 group-hover:w-12 group-hover:h-12"></span>
                  <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/50 rounded-bl-xl transition-all duration-500 group-hover:w-12 group-hover:h-12"></span>
                  <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50 rounded-br-xl transition-all duration-500 group-hover:w-12 group-hover:h-12"></span>

                  <div className="p-4 flex-1 flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    
                    <img
                      src={getPublicUrl(cert.image)}
                      alt={cert.title}
                      className="w-full h-auto max-h-[200px] object-contain transform group-hover:scale-105 transition-all duration-500 relative z-10"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4 bg-[#1a1a1a]/50 relative overflow-hidden">
                    {/* Card content gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-mono transform group-hover:translate-x-2 transition-all duration-500">
                        {cert.title}
                      </h3>
                      <p className="text-textSecondary mt-1 font-mono group-hover:text-textPrimary transition-colors duration-500">
                        {cert.organization}
                      </p>
                      <p className="text-textSecondary text-sm font-mono group-hover:text-textPrimary/80 transition-colors duration-500">
                        {cert.date}
                      </p>
                    </div>
                    
                    <motion.a
                      href={getPublicUrl(cert.certificate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/40 rounded-lg text-secondary hover:text-accent transition-all duration-300 text-sm font-mono group/button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaDownload className="text-xs transform group-hover/button:-translate-y-0.5 transition-transform duration-300" />
                      <span>Download Certificate</span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-3">
              {/* Previous Button */}
              <motion.button
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${currentPage === 1 
                    ? 'text-secondary/30 cursor-not-allowed' 
                    : 'text-secondary hover:bg-secondary/10'
                  } transition-all duration-300`}
                whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
              >
                ←
              </motion.button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-mono
                      ${currentPage === index + 1 
                        ? 'bg-secondary text-primary font-bold' 
                        : 'text-secondary hover:bg-secondary/10'
                      } transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${currentPage === totalPages 
                    ? 'text-secondary/30 cursor-not-allowed' 
                    : 'text-secondary hover:bg-secondary/10'
                  } transition-all duration-300`}
                whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;