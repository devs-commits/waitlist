import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, FileCheck, Zap } from 'lucide-react';

const FreeTasteTest = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-teal/5 via-transparent to-coral/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left - Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Center - Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Zap className="w-3 h-3" />
                FREE TASTE TEST
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Try Before You Commit
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Chat with Tolu (our AI HR Manager) and get a free resume audit. No payment required. See what you're missing before joining the waitlist.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MessageCircle className="w-4 h-4 text-teal" />
                  <span>Free AI Interview</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <FileCheck className="w-4 h-4 text-teal" />
                  <span>Free Resume Audit</span>
                </div>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="flex-shrink-0">
              <a
                href="#chat-with-tolu"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Tolu
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default FreeTasteTest;