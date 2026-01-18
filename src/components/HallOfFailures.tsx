import { motion } from 'framer-motion';
import { X, AlertTriangle, FileX, Code, Briefcase } from 'lucide-react';

interface FailureExample {
  id: string;
  studentName: string;
  task: string;
  submission: string;
  aiVerdict: string;
  reason: string;
  icon: React.ReactNode;
}

const failures: FailureExample[] = [
  {
    id: '1',
    studentName: 'Anonymous Student A',
    task: 'Build a responsive landing page',
    submission: 'Static HTML with no CSS',
    aiVerdict: 'REJECTED',
    reason: 'No responsive design. No semantic HTML. Would embarrass you in a real interview.',
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: '2',
    studentName: 'Anonymous Student B',
    task: 'Create a marketing campaign brief',
    submission: 'Copy-pasted ChatGPT output',
    aiVerdict: 'REJECTED',
    reason: 'AI-generated content detected. Zero original thinking. Employers can spot this immediately.',
    icon: <FileX className="w-5 h-5" />,
  },
  {
    id: '3',
    studentName: 'Anonymous Student C',
    task: 'Design a database schema',
    submission: 'Single table with 47 columns',
    aiVerdict: 'REJECTED',
    reason: 'No normalization. No foreign keys. This would crash any real-world application.',
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const HallOfFailures = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            HALL OF FAILURES
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Our AI Supervisors <span className="text-coral">Don't Sugarcoat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real examples of rejected work. Our AI supervisors hold you to industry standards—because real employers will too.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {failures.map((failure, index) => (
            <motion.div
              key={failure.id}
              className="bg-card border border-destructive/30 rounded-2xl p-6 relative overflow-hidden group hover:border-destructive/60 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Rejected stamp */}
              <div className="absolute top-4 right-4 bg-destructive text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <X className="w-3 h-3" />
                REJECTED
              </div>

              <div className="mb-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mb-3">
                  {failure.icon}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{failure.studentName}</h3>
                <p className="text-xs text-muted-foreground">Task: {failure.task}</p>
              </div>

              <div className="mb-4 p-3 bg-secondary rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Submitted:</p>
                <p className="text-sm text-foreground font-medium">{failure.submission}</p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-destructive mb-1">AI Supervisor Verdict:</p>
                <p className="text-sm text-foreground/90">{failure.reason}</p>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          💡 <strong>The lesson?</strong> WDC Labs trains you to pass real-world scrutiny. Our AI supervisors prepare you for the brutal truth of the job market.
        </motion.p>
      </div>
    </section>
  );
};

export default HallOfFailures;