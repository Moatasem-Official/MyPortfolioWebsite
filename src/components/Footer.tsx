import { motion } from 'framer-motion';
import { getPublicUrl } from '../config/paths';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-[#1a1a1a] text-textSecondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04eiIgZmlsbD0icmdiYSg5NiwgMjM5LCAyNTUsIDAuMDIpIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-5" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <img 
              src={getPublicUrl('/logo.png')}
              alt="Logo" 
              className="h-16 brightness-200"
            />
            <p className="text-sm font-mono leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300 text-center">
              Network Automation Engineer | Making Networks Smarter
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full">
            <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm font-mono opacity-60 hover:opacity-100 transition-opacity duration-300">
            &copy; {currentYear} Moatasem Nagy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
