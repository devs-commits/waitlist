import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
// import DiasporaShield from './DiasporaShield';

interface PricingSectionProps {
  variant?: 'dark' | 'light';
  onPayClick?: (plan: string) => void;
  onSponsorClick?: (plan: string) => void;
  showRefundBadge?: boolean;
}

const plans = [
  {
    name: 'The Monthly Grind',
    price: '15,000',
    period: '/ MONTH SUBSCRIPTION',
    features: [
      'Full Access to Dashboard',
      'AI Project Manager (Emem)',
      'Basic Portfolio Builder',
    ],
    isFeatured: false,
  },
  {
    name: 'The Career Accelerator',
    price: '45,000',
    period: '/ 3 MONTHS BUNDLE',
    features: [
      'Guaranteed Recommendation Letter',
      'Full Career Portfolio',
      'Priority Review by Sola (Supervisor)',
    ],
    isFeatured: true,
  },
  {
    name: 'The Titan',
    price: '150,000',
    period: '/ ANNUAL ACCESS',
    features: [
      '1-on-1 Career Coaching',
      'Unlimited Project Reviews',
      'Alumni "Japa" Network Access',
    ],
    isFeatured: false,
  },
];

const PricingSection = ({ variant = 'light', onPayClick, onSponsorClick, showRefundBadge = true }: PricingSectionProps) => {
  return (
    <section className={`py-8 md:py-6 ${variant === 'dark' ? 'section-dark' : 'bg-[hsla(207,36%,95%,1)]'}`} id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Invest in Your Future.{' '}
            <span className="text-[hsla(244,100%,69%,1)]">Or Get Someone Else To.</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Can't afford the subscription? Don't let that stop you. Send a sponsorship link to a mentor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              variant={variant}
              delay={index * 0.1}
              onPayYourselfClick={() => onPayClick?.(plan.name)}
              onAskSponsorClick={() => onSponsorClick?.(plan.name)}
              showRefundBadge={showRefundBadge}
            />
          ))}
        </div>
{/* 
        Diaspora Shield - Payment Logos
        <DiasporaShield /> */}
      </div>
    </section>
  );
};

export default PricingSection;