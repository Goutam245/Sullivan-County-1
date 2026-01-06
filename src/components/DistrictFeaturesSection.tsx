import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Mountain,
    title: 'Natural Beauty',
    description: 'Pristine Appalachian landscapes and outdoor recreation'
  },
  {
    icon: Users,
    title: 'Strong Communities',
    description: 'Tight-knit neighborhoods with Tennessee values'
  },
  {
    icon: TrendingUp,
    title: 'Growing Economy',
    description: 'Thriving local businesses and new opportunities'
  },
];

const DistrictFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Discover
          </span>
          <h2 className="font-display text-section-mobile md:text-section text-foreground mt-4">
            District 8: Where East Tennessee{' '}
            <span className="text-gradient">Shines</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 text-center card-lift"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            Features of District 8
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DistrictFeaturesSection;
