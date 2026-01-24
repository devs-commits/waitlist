import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import wdcLogo from '../assets/wdc-logo.jpg';
import actd_logo from '../assets/ACTD.png';

interface NavbarDarkProps {
  onJoinWaitlistClick?: () => void; 
}

const NavbarDark = ({ onJoinWaitlistClick}: NavbarDarkProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
    { label: 'Software Engineering Courses', href: '#courses' },
    { label: 'Digital Marketing Courses', href: '#marketing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact'},
    { label: 'About us', href: '#about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[hsla(207,36%,95%,1)]">
      <div className="mx-auto px-4">
        <div className="flex h-auto md:h-20 items-center justify-between py-2 md:py-0">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={wdcLogo} alt="WDC Labs" className="h-16 md:h-[75px] w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <a href="https://www.actd.us/wildfusiondigitalcentre/" className="flex items-center">
              <img src={actd_logo} alt="ACTD Logo" className="h-[62.4px] w-[161px]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={onJoinWaitlistClick}
                className="btn-primary-gradient text-primary-foreground w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarDark;