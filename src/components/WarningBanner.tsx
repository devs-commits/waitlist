import { motion } from 'framer-motion';

interface WarningBannerProps {
  spotsLeft?: number;
  batch?: string;
}

const WarningBanner = ({ spotsLeft = 124, batch = "JAN BATCH" }: WarningBannerProps) => {
  return (
    <motion.div 
      className="warning-banner p-2 px-2 text-center justify-center mx-auto border rounded-2xl border-red-500 max-w-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xs md:text-sm font-semibold text-background tracking-wide">
        ⚠️ WARNING: ONLY {spotsLeft} SPOTS LEFT FOR {batch}
      </p>
    </motion.div>
  );
};

export default WarningBanner;