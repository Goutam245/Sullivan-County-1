import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VoteReadySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Sullivan County Silhouette Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-[800px] h-[800px]">
          <path
            d="M30,60 L50,40 L80,35 L120,45 L150,30 L170,50 L180,80 L175,120 L160,150 L130,170 L90,175 L50,160 L25,130 L20,90 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-accent" />
          </motion.div>

          <h2 className="font-display text-section-mobile md:text-section text-foreground mb-6">
            Be <span className="text-gradient">Vote-Ready</span> in Sullivan County
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Verify registration, register to vote, and stay current on important dates. 
            For accuracy, always confirm current deadlines, polling details, and 
            registration status with official election administrators.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="ctaLarge" 
              size="xxl"
              className="group"
              asChild
            >
              <a 
                href="https://tnsos.gov/elections" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Vote-Ready
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 mt-16"
          >
            {[
              'Check Registration',
              'Find Polling Location',
              'Know Key Dates'
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 text-foreground"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoteReadySection;
