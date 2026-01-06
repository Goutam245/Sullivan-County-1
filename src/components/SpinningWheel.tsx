import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const wheelSegments = [
  { word: 'Listen', color: 'primary' },
  { word: 'Plan', color: 'accent' },
  { word: 'Fix', color: 'primary' },
  { word: 'Build', color: 'accent' },
  { word: 'Deliver', color: 'primary' },
  { word: 'Protect', color: 'accent' },
  { word: 'Grow', color: 'primary' },
  { word: 'Lead', color: 'accent' },
];

const SpinningWheel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="font-display text-section-mobile md:text-section text-foreground mt-4">
            A Cycle of <span className="text-gradient">Action</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Spinning Wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-72 h-72 md:w-96 md:h-96 animate-spin-slow"
              style={{ animationPlayState: 'running' }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                />
              </defs>
              
              {/* Wheel segments */}
              {wheelSegments.map((segment, index) => {
                const angle = (index * 45) - 90;
                const radians = (angle * Math.PI) / 180;
                const x = 200 + 120 * Math.cos(radians);
                const y = 200 + 120 * Math.sin(radians);
                
                return (
                  <g key={segment.word}>
                    {/* Segment line */}
                    <line
                      x1="200"
                      y1="200"
                      x2={200 + 170 * Math.cos(radians)}
                      y2={200 + 170 * Math.sin(radians)}
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    
                    {/* Word */}
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`font-display font-bold text-sm md:text-base ${
                        segment.color === 'primary' ? 'fill-primary' : 'fill-accent'
                      }`}
                      transform={`rotate(${angle + 90}, ${x}, ${y})`}
                    >
                      {segment.word}
                    </text>
                  </g>
                );
              })}
              
              {/* Center circle */}
              <circle
                cx="200"
                cy="200"
                r="60"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                className="shadow-campaign"
              />
              
              {/* Center text */}
              <text
                x="200"
                y="195"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-primary font-display font-bold text-lg"
              >
                WARD
              </text>
              <text
                x="200"
                y="215"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-accent font-medium text-xs"
              >
                2026
              </text>
            </svg>
            
            {/* Outer ring decoration */}
            <div className="absolute inset-0 border-4 border-dashed border-primary/10 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md text-center lg:text-left"
          >
            <h3 className="font-display text-subsection-mobile md:text-subsection text-foreground mb-6">
              Eight Pillars of Progress
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From listening to your concerns to leading with integrity, 
              our approach covers every step of effective governance. 
              This isn't just a campaign—it's a commitment to continuous improvement.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {wheelSegments.slice(0, 4).map((segment, index) => (
                <motion.div
                  key={segment.word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-3 h-3 rounded-full ${
                    segment.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} />
                  <span className="font-medium text-foreground">{segment.word}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpinningWheel;
