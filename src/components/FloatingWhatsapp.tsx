import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const whatsappNumber = '+2349078298987'; // Replace with actual number
  const message = encodeURIComponent("Hi! I need support regarding WDC Labs.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-24 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold text-sm hidden md:block">Whatsapp Support</span>
      
      {/* Pulse effect */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/30" />
      </span>
    </motion.button>
  );
};

export default FloatingWhatsApp;