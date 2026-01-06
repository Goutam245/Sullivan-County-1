import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Why I\'m Running', href: '#why' },
  { label: 'Public Safety', href: '#safety' },
  { label: 'District 8', href: '#district' },
  { label: 'Get Involved', href: '#involved' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-campaign py-3'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 md:gap-3 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`font-display font-bold text-lg sm:text-xl md:text-2xl ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}>
                <span className="text-accent">T.R.</span> Ward
              </div>
              <span className={`hidden sm:inline-block text-xs md:text-sm font-medium ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}>
                for District 8
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`story-link font-medium text-sm whitespace-nowrap transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:text-accent' 
                      : 'text-primary-foreground/90 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Button 
                variant={isScrolled ? "hero" : "heroOutline"} 
                size="default"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-primary-foreground hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-campaign-navy/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-campaign-navy p-6 sm:p-8"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary-foreground p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-16">
                {/* Mobile Logo */}
                <div className="font-display font-bold text-xl text-primary-foreground mb-8">
                  <span className="text-accent">T.R.</span> Ward
                  <span className="block text-sm font-normal text-primary-foreground/70 mt-1">
                    for District 8
                  </span>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-primary-foreground text-lg font-medium hover:text-accent transition-colors py-2"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <Button variant="hero" size="lg" className="mt-6 w-full">
                    Contact Us
                  </Button>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
