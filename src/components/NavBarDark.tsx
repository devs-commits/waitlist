import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import wdcLogo from '../assets/wdc-logo.jpg';
import actd_logo from '../assets/ACTD.png';

interface NavbarDarkProps {
  onChatClick?: () => void;
  onJoinWaitlistClick?: () => void;
}

const NavbarDark = ({ onChatClick, onJoinWaitlistClick }: NavbarDarkProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Chat with Tolu', onClick: onChatClick },
    { label: 'The Value', href: '#arsenal' },
    { label: 'Get Sponsored', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[hsla(207,36%,95%,1)]">
      <div className="mx-auto px-4 my-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="max-w-7xl justify-left md:ml-10 sm:ml-5">
              <a href="/" className="flex items-left">
                <img src={wdcLogo} alt="WDC Labs" className="h-[50px] w-[120px] sm:h-[55px] sm:w-[180px]" />
              </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.onClick}
                className="nav-link cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="max-w-7xl justify-left md:mr-10 sm:mr-5 my-auto">
              <a href="/" className="flex items-left">
                <img src={actd_logo} alt="WDC Labs" className="h-[50px] w-[180px] sm:h-[65px] sm:w-[200px]" />
              </a>
          </div>
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
                  onClick={() => {
                    link.onClick?.();
                    setIsMobileMenuOpen(false);
                  }}
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