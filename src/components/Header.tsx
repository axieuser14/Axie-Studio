import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, Mail, ChevronDown, Bot, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import BookingModal from './BookingModal';

const Header: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    {
      name: t('nav.websites'),
      href: `/${currentLanguage.code}/#websites`,
      section: 'websites'
    },
    {
      name: t('nav.booking'),
      href: `/${currentLanguage.code}/#booking`,
      section: 'booking'
    },
    {
      name: t('nav.apps'),
      href: `/${currentLanguage.code}/#apps`,
      section: 'apps'
    },
    {
      name: t('nav.commerce'),
      href: `/${currentLanguage.code}/#commerce`,
      section: 'commerce'
    },
    {
      name: t('nav.services'),
      href: `/${currentLanguage.code}/#services`,
      section: 'services'
    }
  ];

  const handleNavClick = (href: string, section: string) => {
    if (location.pathname === `/${currentLanguage.code}/` || location.pathname === `/${currentLanguage.code}`) {
      // We're on the home page, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to={`/${currentLanguage.code}/`}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="Axie Studio" 
                  className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Axie Studio
                </h1>
                <p className="text-xs text-gray-600 font-medium">Digital Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50/50 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              {/* AI Agent Link */}
              <Link
                to={`/${currentLanguage.code}/ai-agent`}
                className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 rounded-lg hover:bg-purple-50/50 relative group flex items-center"
              >
                <Bot className="mr-1" size={16} />
                AI Agent
                <Sparkles className="ml-1 text-purple-500" size={14} />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <Calendar className="mr-2" size={18} />
                {t('nav.bookTime')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <LanguageSwitcher />
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Mobile Menu Panel */}
              <motion.div
                className="fixed top-16 left-0 right-0 bg-white shadow-2xl border-t border-gray-200/50 z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href, item.section)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg font-medium transition-colors duration-200 flex items-center justify-between group"
                      >
                        {item.name}
                        <ChevronDown className="group-hover:rotate-180 transition-transform duration-200" size={16} />
                      </button>
                    ))}
                    
                    {/* AI Agent Link */}
                    <Link
                      to={`/${currentLanguage.code}/ai-agent`}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50/50 rounded-lg font-medium transition-colors duration-200 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bot className="mr-2" size={18} />
                      AI Agent
                      <Sparkles className="ml-2 text-purple-500" size={16} />
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-6" />

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      {t('contact.title')}
                    </h3>
                    
                    <a
                      href="tel:+46735132620"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50/50 rounded-lg transition-colors duration-200"
                    >
                      <Phone className="mr-3" size={18} />
                      <div>
                        <div className="font-medium">+46 735 132 620</div>
                        <div className="text-sm text-gray-500">Ring oss direkt</div>
                      </div>
                    </a>
                    
                    <a
                      href="mailto:stefan@axiestudio.se"
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-200"
                    >
                      <Mail className="mr-3" size={18} />
                      <div>
                        <div className="font-medium">stefan@axiestudio.se</div>
                        <div className="text-sm text-gray-500">Skicka ett mejl</div>
                      </div>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsBookingModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center"
                    >
                      <Calendar className="mr-2" size={20} />
                      {t('nav.bookTime')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Header;