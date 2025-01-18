import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { getPublicUrl } from '../config/paths';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  onHireClick: () => void;
}

const Navbar = ({ onHireClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' }
  ];

  useEffect(() => {
    // If we're on the project details page, set Projects as active
    if (location.pathname.includes('/projects/')) {
      setActiveSection('projects');
      return;
    }

    const handleScroll = () => {
      const sections = menuItems.map(item => {
        const element = document.getElementById(item.href.replace('#', ''));
        if (!element) return { href: item.href, offset: 0 };
        return {
          href: item.href,
          offset: Math.abs(element.getBoundingClientRect().top)
        };
      });

      const closest = sections.reduce((prev, curr) => 
        prev.offset < curr.offset ? prev : curr
      );

      setActiveSection(closest.href.replace('#', ''));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-primary/90 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('#home')} 
            className="flex items-center"
          >
            <img 
              src={getPublicUrl('/logo.png')} 
              alt="Logo" 
              className="h-12 brightness-200"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-textSecondary hover:text-secondary transition-colors font-mono group ${
                    activeSection === item.href.replace('#', '') ? 'text-secondary' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#00ff87] to-[#60efff] transition-all duration-300 ${
                    activeSection === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              </motion.div>
            ))}
            <button
              onClick={onHireClick}
              className="bg-gradient-to-r from-secondary to-accent text-primary rounded-lg px-4 py-2 hover:opacity-90 transition-all duration-300 font-mono text-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-accent transition-colors duration-300"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 right-0 bg-primary/95 border-t border-secondary/20 overflow-hidden shadow-lg ${
              isOpen ? 'max-h-screen' : 'max-h-0'
            } transition-all duration-300`}
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-textSecondary hover:text-secondary block transition-colors font-mono w-full text-left py-2 ${
                      activeSection === item.href.replace('#', '') ? 'text-secondary' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <button
                onClick={() => {
                  onHireClick();
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-secondary to-accent text-primary rounded-lg px-4 py-2 hover:opacity-90 transition-all duration-300 w-full font-mono text-sm"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
