import { motion } from 'framer-motion';
import ChatInterface from './ChatInterface';
import ReviewsScroll from './ReviewsScroll';
import chatBgCircle from './../assets/circle.png';

interface ChatSectionV3Props {
  onTrialsExhausted?: () => void;
}

const ChatSectionV3 = ({ onTrialsExhausted }: ChatSectionV3Props) => {
  return (
    <section className="py-8 md:py-12 bg-[hsla(205,98%,16%,0.42)] relative overflow-hidden" id="chat-with-tolu">
      {/* Background circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={chatBgCircle} 
          alt="" 
          className="w-full h-full object-contain opacity-100"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Meet Tolu. <span className="text-[#ff6b35]">Your Nightmare.</span>
          </h2>
          <p className="text-base text-[#4a5568] max-w-2xl mx-auto">
            Tolu is our AI HR Manager. She doesn't care about your "passion". She cares about output. You have exactly{' '}
            <span className="text-[hsla(359,100%,61%,1)] font-semibold">3 chances</span> to impress her before she blocks you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Reviews - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full max-w-md"
          >
            <ReviewsScroll variant="v3" />
          </motion.div>

          {/* Chat Interface - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 w-full max-w-md"
          >
            <ChatInterface variant="v3" onTrialsExhausted={onTrialsExhausted} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatSectionV3;