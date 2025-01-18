import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

interface CVModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const CVModal = ({ showModal, setShowModal }: CVModalProps) => {
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

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      y: 20,
      transition: { 
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.5,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </motion.button>

            <div className="text-center space-y-6 font-sans">
              <motion.div
                variants={iconVariants}
                className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 rounded-full bg-secondary/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 animate-spin-slow"></div>
                <svg
                  className="w-12 h-12 text-secondary relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </motion.div>
              
              <motion.div variants={textVariants} className="space-y-3">
                <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent font-poppins">
                  Coming Soon!
                </h3>
                <p className="text-gray-300 leading-relaxed font-sans">
                  My CV is currently being crafted to showcase my latest achievements and experiences.
                  Stay tuned for a comprehensive look at my professional journey!
                </p>
              </motion.div>
              
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-[#009152] to-[#3ba9cc] hover:from-[#00c16d] hover:to-[#4cd4ff] text-white rounded-lg font-poppins font-medium shadow-lg shadow-secondary/20 hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Got it, thanks!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
