import { motion } from 'framer-motion';

const IpConverterAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-[#1a1a1a] py-6 px-3 rounded-xl">
      <motion.div 
        className="relative w-full aspect-[4/3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Network Container */}
        <motion.div 
          className="absolute inset-0 border-2 border-secondary/30 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Network Title */}
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a] px-2 sm:px-3 text-xs sm:text-sm md:text-base text-secondary font-mono whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            192.168.1.0/24
          </motion.div>

          {/* Subnets Container */}
          <div className="absolute inset-3 sm:inset-4 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
            {/* 4 Subnets */}
            {[
              '192.168.1.0/26',
              '192.168.1.64/26',
              '192.168.1.128/26',
              '192.168.1.192/26'
            ].map((subnet, index) => (
              <motion.div
                key={index}
                className="relative border border-secondary/20 rounded-md p-1.5 sm:p-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                {/* Subnet Title */}
                <motion.div
                  className="text-[10px] xs:text-xs sm:text-sm font-mono text-accent truncate"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {subnet}
                </motion.div>
                
                {/* Hosts Grid */}
                <div className="mt-0.5 sm:mt-1 grid grid-cols-4 gap-0.5">
                  {Array(8).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-0.5 sm:h-1 bg-secondary/30 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1.2 + index * 0.2 + i * 0.1 }}
                    />
                  ))}
                </div>

                {/* Available Hosts Counter */}
                <motion.div
                  className="absolute bottom-0.5 sm:bottom-1 right-1 sm:right-2 text-[8px] xs:text-[10px] sm:text-xs text-secondary/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  62 hosts
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* CIDR Notation */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1a1a1a] px-2 sm:px-3 text-[10px] xs:text-xs text-secondary/70 font-mono whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Subnet Mask: 255.255.255.192
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IpConverterAnimation;
