import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeatureCardDarkProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: 'teal' | 'coral' | 'yellow' | 'purple';
  delay?: number;
}

const FeatureCardDark = ({ 
  icon, 
  title, 
  description, 
  accentColor = 'teal',
  delay = 0 
}: FeatureCardDarkProps) => {
  const accentClasses = {
    teal: 'text-[hsla(135,90%,41%,1)]',
    coral: 'text-[hsla(220,94%,62%,1)]',
    yellow: 'text-[hsla(45,78%,50%,1)]',
    purple: 'text-[hsla(271,85%,64%,1)]'
  };

  return (
    <motion.div
      className="feature-card-light rounded-xl p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`mb-4 ${accentClasses[accentColor]}`}>
        {icon}
      </div>
      <h3 className={`font-semibold mb-2 ${accentClasses[accentColor]}`}>
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCardDark;