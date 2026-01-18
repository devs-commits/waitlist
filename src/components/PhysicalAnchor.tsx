import { motion } from 'framer-motion';
import { Building, Award, ExternalLink } from 'lucide-react';

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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-coral/20 flex items-center justify-center">
              <div className="flex items-center justify-center w-12 h-12 rounded bg-primary">
                <span className="text-primary-foreground font-bold text-xl">W</span>
              </div>
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
            className="bg-card border border-border rounded-2xl p-8 text-center hover:border-teal/50 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal/20 to-yellow/20 flex items-center justify-center">
              <Award className="w-12 h-12 text-teal" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">ACTD Accredited</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Accredited by the Abuja Chamber of Training & Development. Your certificate carries weight with Nigerian employers.
            </p>
            <a
              href="#actd"
              className="inline-flex items-center gap-2 text-teal hover:text-teal/80 text-sm font-semibold transition-colors"
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
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Graduates</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Physical Campuses</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">15+</p>
            <p className="text-sm text-muted-foreground">Industry Partners</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foreground">92%</p>
            <p className="text-sm text-muted-foreground">Employment Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysicalAnchor;