import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const quotes = [
  {
    text: "Real leadership means showing up, listening, and taking action. Sullivan County deserves nothing less.",
    author: "T.R. Ward",
    title: "Candidate for District 8"
  },
  {
    text: "Our firefighters and deputies put their lives on the line every day. It's time our county put them first.",
    author: "T.R. Ward",
    title: "On Public Safety"
  },
  {
    text: "District 8 isn't just where I live — it's where I'm raising my family, building my future, and fighting for change.",
    author: "T.R. Ward",
    title: "On Community"
  },
  {
    text: "We don't need more promises. We need more pavement, more deputies, and more results.",
    author: "T.R. Ward",
    title: "On Infrastructure"
  },
  {
    text: "When District 8 wins, all of Sullivan County wins. That's the vision I'm running on.",
    author: "T.R. Ward",
    title: "Campaign Vision"
  },
];

const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % quotes.length);
          return 0;
        }
        return prev + (100 / 70); // 7 seconds
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrev = () => {
    setCurrentIndex((current) => (current - 1 + quotes.length) % quotes.length);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % quotes.length);
    setProgress(0);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Quote Icon */}
          <Quote className="w-16 h-16 md:w-24 md:h-24 text-accent/15 mx-auto mb-8" />

          {/* Quote Content */}
          <div className="relative min-h-[200px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <blockquote className="font-display text-xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
                  "{quotes[currentIndex].text}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">
                    {quotes[currentIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {quotes[currentIndex].title}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="h-0.5 bg-border rounded-full mt-12 mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous */}
            <button
              onClick={goToPrev}
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-accent w-8' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSlider;
