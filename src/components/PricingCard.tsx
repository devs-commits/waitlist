import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Check} from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured?: boolean;
}

interface PricingCardProps extends PricingPlan {
  variant?: 'dark' | 'light';
  delay?: number;
  onPayYourselfClick?: () => void;
  onAskSponsorClick?: () => void;
  showRefundBadge?: boolean;
}

const PricingCard = ({ 
  name, 
  price, 
  period, 
  features, 
  isFeatured = false,
  delay = 0,
  onPayYourselfClick,
  onAskSponsorClick,
  // showRefundBadge = false,
}: PricingCardProps) => {
  const cardBgClass = isFeatured 
    ? 'bg-[hsla(205,98%,16%,1)] text-white' 
    : 'bg-[hsla(0,0%,91%,1)] text-[#1a2744] shadow-lg';
  
  const textPrimaryClass = isFeatured ? 'text-white' : 'text-[#1a2744]';
  const textSecondaryClass = isFeatured ? 'text-white/80' : 'text-[#1a2744]/70';
  const periodClass = isFeatured ? 'text-[hsla(244,100%,69%,1)]' : 'text-[hsla(244,100%,69%,1)]';

  return (
    <motion.div
      className={`${cardBgClass} rounded-2xl p-6 relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[hsla(244,100%,69%,1)] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide">
            Best Value
          </span>
        </div>
      )}

      <div className={`mb-6 p-4 rounded-xl ${
        isFeatured 
          ? 'bg-[hsla(0,0%,100%,0.23)]' 
          : 'bg-[hsla(0,0%,100%,0.41)]'
      }`}>
        <h3 className={`font-semibold ${textSecondaryClass} mb-2 text-sm`}>{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl md:text-4xl font-bold ${textPrimaryClass}`}>₦{price}</span>
        </div>
        <p className={`text-xs font-medium mt-1 ${periodClass}`}>{period}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                isFeatured 
                  ? '' 
                  : 'bg-[hsla(205,98%,16%,1)]'
              }`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className={`text-sm ${textSecondaryClass}`}>{feature}</span>
            </li>
        ))}
      </ul>

      <div className="space-y-3">
        <Button 
          onClick={onPayYourselfClick}
          className={`w-full py-5 font-semibold ${
            isFeatured 
              ? 'bg-[hsla(244,100%,69%,1)] hover:bg-[hsla(244,100%,69%,1)]/50 text-white' 
              : 'bg-[hsla(205,98%,16%,1)] hover:bg-[hsla(205,98%,16%,1)]/50 text-white'
          }`}
        >
          Pay Yourself
        </Button>
        <Button 
          onClick={onAskSponsorClick}
          variant="outline"
          className={`w-full py-5 font-medium ${
            isFeatured 
              ? 'border-[hsla(244,100%,69%,1)] text-[hsla(244,100%,69%,1)] hover:bg-white/10 bg-transparent' 
              : 'border-[hsla(205,98%,16%,1)] text-[hsla(205,98%,16%,1)] hover:bg-[#1a2744]/5'
          }`}
        >
          Ask Mentor to Pay
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;