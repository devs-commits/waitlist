import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain, BarChart3, Shield, Palette, Bug, MonitorCheck, Coins, GraduationCap, Calendar, Search } from 'lucide-react';
import wdcLogo from '../assets/wdc-logo.jpg';
import actd_logo from '../assets/ACTD.png';

interface CourseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

const NavbarDark = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const softwareEngineeringCourses: CourseItem[] = [
    {
      icon: <Brain className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Artificial Intelligence',
      description: 'Understand the future of work with our 6 weeks Artificial Intelligence Program',
      href: '#ai-course',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Data Analytics',
      description: 'Explore the exciting world of data with our Data Analytics Program for Beginners',
      href: '#data-analytics',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Cybersecurity',
      description: 'Get started in a rewarding Cybersecurity career with our Cybersecurity Training Program',
      href: '#cybersecurity',
    },
    {
      icon: <Palette className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Product Design',
      description: 'Become a certified Product Designer in 8 weeks',
      href: '#product-design',
    },
    {
      icon: <Bug className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Ethical Hacking',
      description: 'Join our Advanced Ethical Hacking Training Program and master the skills top companies are looking for.',
      href: '#ethical-hacking',
    },
    {
      icon: <MonitorCheck className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Certified SOC Analyst (CSA)',
      description: 'Coming Soon',
      href: '#soc-analyst',
      comingSoon: true,
    },
    {
      icon: <Coins className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Blockchain Finance Certification (BFC)',
      description: 'Coming Soon',
      href: '#blockchain-finance',
      comingSoon: true,
    },
  ];
  const digitalMarketingCourses: CourseItem[] = [
    {
      icon: <GraduationCap className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Digital Internship Programme',
      description: 'Our Digital Internship Programme (DIP) is a seven-week intensive digital training program.',
      href: '#digital-internship',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#4A90A4]" />,
      title: 'Digital Marketing Weekend',
      description: 'Become Certified in Digital Marketing in 8 weekends even if you have a 9-5.',
      href: '#digital-marketing-weekend',
    },
    {
      icon: <Search className="w-6 h-6 text-[#4A90A4]" />,
      title: 'SEO & Paid Media Training',
      description: 'Master the art of driving traffic and boosting conversions with our specialized training in Paid Media and SEO',
      href: '#seo-paid-media',
    },
  ];

  const navLinks = [
    { label: 'Software Engineering Courses', dropdownKey: 'software' },
    { label: 'Digital Marketing Courses', dropdownKey: 'digital' },
    { label: 'Blog', href: 'https://wdc.ng/blog/' },
    { label: 'About us', href: 'https://wdc.ng/about-us/'},
    { label: 'Contact us', href: 'https://wdc.ng/contact_us/' },
  ];

  const handleMouseEnter = (key: string) => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  const renderCourseCard = (course: CourseItem) => (
    <a
      key={course.title}
      href={course.href}
      className="flex items-start gap-4 p-4 rounded-xl border border-[#E5EEF2] bg-gradient-to-br from-white to-[#F8FBFC] hover:border-[#4A90A4]/30 hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center border border-[#D0E8EF]">
        {course.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[#1A3A4A] group-hover:text-[#4A90A4] transition-colors text-sm leading-tight">
          {course.title}
        </h4>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
          {course.description}
        </p>
      </div>
    </a>
  );
  const getDropdownCourses = (key: string) => {
    if (key === 'software') return softwareEngineeringCourses;
    if (key === 'digital') return digitalMarketingCourses;
    return [];
  };
  const getDropdownColumns = (key: string) => {
    if (key === 'software') return 'grid-cols-3';
    if (key === 'digital') return 'grid-cols-3';
    return 'grid-cols-1';
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[hsla(207,36%,95%,1)]">
      <div className="mx-auto px-4">
        <div className="flex h-auto md:h-20 items-center justify-between py-2 md:py-0">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={wdcLogo} alt="WDC Labs" className="h-16 md:h-[75px] w-auto" />
            </a>
          </div>



          <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdownKey && handleMouseEnter(link.dropdownKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdownKey ? (
                    <button
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.dropdownKey ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
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

      {/* Desktop Mega Menu Dropdowns */}
      <AnimatePresence>
        {activeDropdown && !isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full bg-gradient-to-b from-[#E8F4F8] to-[#D8EDF3] shadow-xl border-t border-[#4A90A4]/20 hidden lg:block" // Add hidden on smaller screens
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-8 py-8">
              <div className={`grid ${getDropdownColumns(activeDropdown)} gap-4`}>
                {getDropdownCourses(activeDropdown).map(renderCourseCard)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#1A3A4A]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdownKey ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.dropdownKey ? null : link.dropdownKey!)}
                        className="flex items-center justify-between w-full text-sm font-medium text-white py-3 px-2"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.dropdownKey ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.dropdownKey && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 pl-4"
                          >
                            {getDropdownCourses(link.dropdownKey!).map((course) => (
                              <a
                                key={course.title}
                                href={course.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 text-sm text-white py-2 px-2 hover:text-white/80"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                                  {course.icon}
                                </div>
                                <span className="font-medium">{course.title}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm font-medium text-white py-3 px-2 hover:text-white/80"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarDark;