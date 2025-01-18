import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const IpToolDemo = () => {
  const ipExamples = [
    { ip: "192.168.1.0", mask: "24" },
    { ip: "10.0.0.0", mask: "8" },
    { ip: "172.16.0.0", mask: "16" },
    { ip: "192.168.0.0", mask: "25" }
  ];

  const [currentExample, setCurrentExample] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [calculating, setCalculating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCalculating(true);
      setShowResults(false);
      
      // Change example after 0.5s
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % ipExamples.length);
      }, 500);

      // Show results after 1s
      setTimeout(() => {
        setCalculating(false);
        setShowResults(true);
      }, 1000);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentIP = ipExamples[currentExample].ip.split('.');
  const currentMask = ipExamples[currentExample].mask;

  // Calculate network details based on current IP and mask
  const calculateNetworkDetails = () => {
    const mask = parseInt(currentMask);
    const ipBinary = currentIP.map(octet => parseInt(octet).toString(2).padStart(8, '0')).join('');
    const networkBinary = ipBinary.substring(0, mask) + '0'.repeat(32 - mask);
    const broadcastBinary = ipBinary.substring(0, mask) + '1'.repeat(32 - mask);

    const networkIP = networkBinary.match(/.{8}/g)!.map(bin => parseInt(bin, 2)).join('.');
    const broadcastIP = broadcastBinary.match(/.{8}/g)!.map(bin => parseInt(bin, 2)).join('.');
    
    const firstHost = networkBinary.substring(0, mask) + '0'.repeat(31 - mask) + '1';
    const lastHost = networkBinary.substring(0, mask) + '1'.repeat(31 - mask) + '0';

    const firstHostIP = firstHost.match(/.{8}/g)!.map(bin => parseInt(bin, 2)).join('.');
    const lastHostIP = lastHost.match(/.{8}/g)!.map(bin => parseInt(bin, 2)).join('.');

    return {
      network: networkIP,
      broadcast: broadcastIP,
      firstHost: firstHostIP,
      lastHost: lastHostIP
    };
  };

  const networkDetails = calculateNetworkDetails();

  return (
    <div className="w-full flex items-center justify-center p-2 sm:p-4 md:p-6">
      <motion.div 
        className="relative w-full max-w-2xl bg-[#1a1a1a] rounded-lg border border-secondary/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tool Interface */}
        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
          {/* Title Bar */}
          <motion.div
            className="flex items-center gap-2 pb-3 sm:pb-4 border-b border-secondary/10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            <span className="ml-2 sm:ml-4 text-secondary/70 text-xs sm:text-sm">IP Address Converter Tool</span>
          </motion.div>

          {/* Input Section */}
          <motion.div className="space-y-3 sm:space-y-4">
            {/* IP Input */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="text-secondary/70 text-xs sm:text-sm w-full sm:w-24">IP Address:</label>
              <motion.div className="flex gap-1 sm:gap-2">
                {currentIP.map((octet, index) => (
                  <motion.input
                    key={index}
                    type="text"
                    value={octet}
                    readOnly
                    className="w-12 sm:w-14 px-1 sm:px-2 py-1 bg-secondary/5 border border-secondary/20 rounded text-center text-secondary text-xs sm:text-sm"
                    animate={{ 
                      borderColor: calculating ? ['rgba(0,255,135,0.2)', 'rgba(0,255,135,0.6)', 'rgba(0,255,135,0.2)'] : 'rgba(0,255,135,0.2)'
                    }}
                    transition={{ duration: 1, repeat: calculating ? Infinity : 0 }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Subnet Mask Input */}
            <motion.div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="text-secondary/70 text-xs sm:text-sm w-full sm:w-24">Subnet Mask:</label>
              <motion.input
                type="text"
                value={`/${currentMask}`}
                readOnly
                className="w-12 sm:w-14 px-1 sm:px-2 py-1 bg-secondary/5 border border-secondary/20 rounded text-center text-secondary text-xs sm:text-sm"
                animate={{ 
                  borderColor: calculating ? ['rgba(0,255,135,0.2)', 'rgba(0,255,135,0.6)', 'rgba(0,255,135,0.2)'] : 'rgba(0,255,135,0.2)'
                }}
                transition={{ duration: 1, repeat: calculating ? Infinity : 0 }}
              />
            </motion.div>

            {/* Calculate Button */}
            <motion.button
              className="w-full mt-2 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-secondary text-primary rounded-md text-xs sm:text-sm"
              animate={{ 
                scale: calculating ? [1, 1.02, 1] : 1,
                backgroundColor: calculating ? ['#00ff87', '#60efff', '#00ff87'] : '#00ff87'
              }}
              transition={{ duration: 1, repeat: calculating ? Infinity : 0 }}
            >
              {calculating ? 'Calculating...' : 'Calculate'}
            </motion.button>
          </motion.div>

          {/* Results Section */}
          {showResults && (
            <motion.div
              className="mt-4 sm:mt-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Network Information */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-secondary/5 p-3 sm:p-4 rounded-lg border border-secondary/20"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { label: 'Network Address:', value: networkDetails.network },
                  { label: 'Broadcast Address:', value: networkDetails.broadcast },
                  { label: 'First Host:', value: networkDetails.firstHost },
                  { label: 'Last Host:', value: networkDetails.lastHost }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-secondary/70 text-xs sm:text-sm">{item.label}</span>
                    <motion.span
                      className="text-accent font-mono text-xs sm:text-sm break-all"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl pointer-events-none"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default IpToolDemo;
