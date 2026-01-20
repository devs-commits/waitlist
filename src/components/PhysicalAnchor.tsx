import { motion } from 'framer-motion';
import { Building, ExternalLink } from 'lucide-react';
import actdLogo from '../assets/actd-logo.png';
import wdcLogo from '../assets/wdc-logo.jpg';

const PhysicalAnchor = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Building className="w-4 h-4" />
            PHYSICAL ANCHOR
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Powered by <span className="text-coral">Wild Fusion Digital Centre</span>
          </h2>

          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            WDC Labs isn't just another online program. We're backed by Wild Fusion Digital Centre—a recognized training institution with physical presence and ACTD accreditation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Wild Fusion Digital Centre */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-16 mx-auto mb-6 flex items-center justify-center">
              <img src={wdcLogo} alt="Wild Fusion Digital Centre" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Wild Fusion Digital Centre</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nigeria's premier digital skills training institution. Physical campuses. Real instructors. Industry partnerships.
            </p>
            <a
              href="https://wildfusion.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* ACTD Accreditation */}
          <motion.div
            className="bg-[#003366] border border-[#003366] rounded-2xl p-8 text-center hover:border-[#c5a54e]/50 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <img src={actdLogo} alt="ACTD Accreditation" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ACTD Accredited</h3>
            <p className="text-sm text-white/70 mb-4">
              Accredited by the American Council of Training and Development. Your certificate is internationally recognized.
            </p>
            <a
              href="https://www.actd.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#c5a54e] hover:text-[#c5a54e]/80 text-sm font-semibold transition-colors"
            >
              Verify Accreditation
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">4,000+</p>
            <p className="text-sm text-muted-foreground">Certified Graduates</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">Lagos</p>
            <p className="text-sm text-muted-foreground">Ikoyi Campus</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Corporate Partners</p>
          </div>
        </motion.div>

        {/* Location Details */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            📍 276B Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysicalAnchor;