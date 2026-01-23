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
  const checkClass = isFeatured ? 'text-violet-400' : 'text-violet-600';

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

      <div className="mb-6">
        <h3 className={`font-semibold ${textSecondaryClass} mb-2 text-sm`}>{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl md:text-4xl font-bold ${textPrimaryClass}`}>₦{price}</span>
        </div>
        <p className={`text-xs font-medium mt-1 ${periodClass}`}>{period}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className={`w-4 h-4 ${checkClass} mt-0.5 flex-shrink-0`} />
            <span className={`text-sm ${textSecondaryClass}`}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 7-Day Refund Badge
      {showRefundBadge && (
        <div className={`mb-4 inline-flex items-center gap-2 ${
          isFeatured 
            ? 'bg-violet-500/20 border-violet-400/30 text-violet-300' 
            : 'bg-violet-100 border-violet-200 text-violet-700'
        } border px-3 py-2 rounded-lg w-full justify-center`}>
          <Shield className="w-4 h-4" />
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold">7-DAY DOUBLE-BLIND</span>
            <span className="text-[10px] opacity-80">Money-Back Guarantee</span>
          </div>
        </div>
      )} */}

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