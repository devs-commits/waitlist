import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import corporateTraining from '../assets/corporate-training.jpg';

interface CTASectionDarkProps {
  onSecureSpotClick?: () => void;
}

const CTASectionDark = ({ onSecureSpotClick }: CTASectionDarkProps) => {
  return (
    <section className="bg-[hsla(207,36%,95%,1)] py-6 md:py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center bg-[hsla(0,0%,100%,1)] border border-border rounded-3xl p-8 md:p-16 shadow-lg">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={corporateTraining} 
              alt="Corporate training session"
              className="rounded-2xl shadow-2xl w-full object-cover h-64 md:h-80"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              In 2026 Degrees Are Not Enough
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              Employers want experience.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              WDC Labs gives you that experience.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              For ₦15,000.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Secure your desk in the Virtual Office before the batch closes.
            </p>
            <Button 
              onClick={onSecureSpotClick}
              className="bg-[hsla(205,98%,16%,1)] text-white px-8 py-6 text-base font-semibold"
            >
              Secure My Spot
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionDark;