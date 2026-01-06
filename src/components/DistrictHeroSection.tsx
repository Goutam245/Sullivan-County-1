import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Eye } from 'lucide-react';
import districtBg from '@/assets/district-bg.jpg';

const stats = [
  { icon: MapPin, number: '8', label: 'Districts' },
  { icon: Users, number: '150K+', label: 'Residents' },
  { icon: Eye, number: '1', label: 'Vision' },
];

const DistrictHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="district" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={districtBg}
          alt="East Tennessee scenic countryside with morning mist"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-section-mobile md:text-section lg:text-hero text-primary-foreground mb-6 leading-tight">
            2026: District 8 Starts It.{' '}
            <span className="text-accent">Sullivan County Feels It.</span>
          </h2>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            A movement powered by District 8, built for every family, every town, 
            and every future in Sullivan County.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-3" />
              <div className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-primary-foreground/70 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DistrictHeroSection;
