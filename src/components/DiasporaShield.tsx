import { motion } from 'framer-motion';
import { Shield, Globe } from 'lucide-react';

const DiasporaShield = () => {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 py-8 px-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <Shield className="w-4 h-4" />
        <span className="text-xs font-medium">International Payments Accepted</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Stripe */}
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
          <div className="w-12 h-6 bg-[#635BFF] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">stripe</span>
          </div>
        </div>

        {/* Visa */}
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
          <div className="w-12 h-6 bg-[#1A1F71] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs italic">VISA</span>
          </div>
        </div>

        {/* Mastercard */}
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
          <div className="w-12 h-6 bg-gradient-to-r from-[#EB001B] to-[#F79E1B] rounded flex items-center justify-center relative">
            <div className="absolute left-1/3 w-3 h-3 bg-[#EB001B] rounded-full opacity-80" />
            <div className="absolute right-1/3 w-3 h-3 bg-[#F79E1B] rounded-full opacity-80" />
          </div>
        </div>

        {/* Paystack */}
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
          <div className="w-12 h-6 bg-[#00C3F7] rounded flex items-center justify-center">
            <span className="text-white font-bold text-[8px]">Paystack</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground">
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium">Diaspora-Friendly</span>
      </div>
    </motion.div>
  );
};

export default DiasporaShield;