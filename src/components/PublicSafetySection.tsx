import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import publicSafetyImg from '@/assets/public-safety.jpg';

const PublicSafetySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="safety" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-campaign-lg">
              <img
                src={publicSafetyImg}
                alt="Firefighters and sheriff deputies working together at a Sullivan County community event"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-2xl shadow-campaign-lg border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-foreground">100%</div>
                  <div className="text-muted-foreground text-sm">Committed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Priority #1
            </span>
            
            <h2 className="font-display text-section-mobile md:text-section text-foreground mb-6 leading-tight">
              Safety Isn't Political. <br />
              <span className="text-gradient">It's Personal.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              More support for public safety. Stronger funding for the Sullivan County 
              Sheriff's Department, deputy retention, and recruiting the next generation 
              of volunteer firefighters for Warriors Path VFD and Sullivan West VFD.
            </p>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-muted/50 border border-border rounded-xl p-6 card-lift cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    Public Safety First
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    See the complete plan for protecting our community.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80 group/btn">
                    Explore Public Safety
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublicSafetySection;
