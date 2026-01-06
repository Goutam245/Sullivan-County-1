import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Why I\'m Running', href: '#why' },
  { label: 'District Map', href: '#district' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const resources = [
  { label: '2026 Election Calendar', href: '#calendar' },
  { label: 'Register to Vote', href: 'https://tnsos.gov/elections' },
  { label: 'Know Your District', href: '#district' },
  { label: 'Volunteer', href: '#volunteer' },
];

const Footer = () => {
  return (
    <footer className="bg-campaign-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Branding */}
          <div>
            <div className="font-display font-bold text-2xl mb-2">
              <span className="text-accent">T.R.</span> Ward
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Moving Sullivan County Forward. Starting in District 8.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  campaign@wardforsullivan.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  (423) 555-0126
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Sullivan County, TN
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="bg-card text-foreground border-2 border-border rounded-lg p-5 text-center mb-8">
            <p className="text-sm font-medium">
              2026 Ward For Sullivan County Commission District 8. 
              Paid for by Elect Ward For Sullivan County Commissioner 2026
            </p>
          </div>
          
          <div className="text-center text-primary-foreground/50 text-sm">
            <p>© 2026 Ward for Sullivan County Commission. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
