import { motion } from 'framer-motion';
import ChatInterface from './ChatInterface';
import ReviewsScroll from './ReviewsScroll';
import { Sparkles } from 'lucide-react';

interface ChatSectionProps {
  onTrialsExhausted?: () => void;
}

const ChatSection = ({ onTrialsExhausted }: ChatSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-[hsla(207,36%,95%,1)]" id="chat-with-tolu">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Free Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            FREE TASTE TEST - No Payment Required
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Meet Tolu. <span className="text-coral">Your Nightmare.</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Tolu is our AI HR Manager. She doesn't care about your "passion". She cares about output. You have exactly{' '}
            <span className="text-coral font-semibold">3 chances</span> to impress her before she blocks you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Reviews - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full max-w-md"
          >
            <ReviewsScroll variant="light" />
          </motion.div>

          {/* Chat Interface - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 w-full max-w-md"
          >
            <ChatInterface variant="light" onTrialsExhausted={onTrialsExhausted} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;