import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Heart, Calendar, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isPricingDropdownOpen && !(event.target as Element).closest('.pricing-dropdown')) {
        setIsPricingDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPricingDropdownOpen]);

  const pricingOptions = [
    {
      name: "Webbplats",
      price: "8,995 kr",
      monthly: "495 kr/mån",
      description: "Professionell webbplats med SEO och support",
      href: "#websites"
    },
    {
      name: "E-handel",
      price: "10,995 kr", 
      monthly: "895 kr/mån",
      description: "Komplett webshop med betalningar",
      href: "#commerce"
    },
    {
      name: "Bokningssystem",
      price: "10,995 kr",
      monthly: "995 kr/mån", 
      description: "Avancerat bokningssystem med CRM",
      href: "#booking",
      popular: true
    },
    {
      name: "Komplett",
      price: "14,995 kr",
      monthly: "1,495 kr/mån",
      description: "Allt-i-ett med mobilapp",
      href: "#apps"
    }
  ];

  // Create full paths with language code
  const getFullPath = (path: string) => {
    const basePath = location.pathname.split('#')[0];
    if (path.startsWith('#')) {
      return `${basePath}${path}`;
    }
    return `/${currentLanguage.code}/${path.replace(/^\//, '')}`;
  };

  return (
    <>
      <motion.header 
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
            : 'bg-white/90 backdrop-blur-lg shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            {/* Logo */}
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to={`/${currentLanguage.code}/`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <img 
                    src="/logo.jpg" 
                    alt="Axie Studio" 
                    className="relative h-10 sm:h-12 w-auto transition-all duration-300 group-hover:brightness-110 rounded-lg"
                  />
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* AI Agent Link */}
              <motion.a
                href={getFullPath("/ai-agent")}
                className="group relative px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 text-base font-semibold overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="relative">AI Agent</span>
              </motion.a>
              
              {/* Pricing Dropdown */}
              <div className="relative pricing-dropdown">
                <motion.button
                  onClick={() => {
                    setIsPricingDropdownOpen(false);
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 text-base font-semibold overflow-hidden flex items-center ${
                    isPricingDropdownOpen ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="relative mr-2">Priser</span>
                </motion.button>
              </div>

              {/* Contact */}
              <motion.a
                href={getFullPath("#contact")}
                className="group relative px-6 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-blue-50 text-base font-semibold overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="relative">Kontakt</span>
              </motion.a>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSwitcher />
              
              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-500 flex items-center text-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="mr-2 relative z-10" size={16} />
                <span className="relative z-10">Boka tid</span>
              </motion.button>

              <motion.a 
                href="https://app.axiestudio.se/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 flex items-center text-sm shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Heart className="mr-2 relative z-10" size={16} />
                <span className="relative z-10">Logga in</span>
                <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all relative z-10" size={16} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden py-6 border-t border-gray-200 max-h-[70vh] overflow-y-auto"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-3 px-2">
                  {/* Pricing Section in Mobile */}
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 px-4">
                      Priser
                    </h3>
                    {pricingOptions.map((option, index) => (
                      <motion.a
                        key={index}
                        href={getFullPath(option.href)}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold touch-manipulation min-h-[48px] mb-2"
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{option.name}</span>
                            <div className="text-right">
                              <div className="text-sm font-bold text-blue-600">{option.price}</div>
                              <div className="text-xs text-gray-500">{option.monthly}</div>
                            </div>
                          </div>
                          {option.popular && (
                            <span className="text-xs text-blue-500 font-medium">Populär</span>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Contact */}
                  <motion.a
                    href={getFullPath("/ai-agent")}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold touch-manipulation min-h-[48px]"
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    AI Agent
                  </motion.a>
                  
                  <motion.a
                    href={getFullPath("#contact")}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-semibold touch-manipulation min-h-[48px]"
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    Kontakt
                  </motion.a>
                  
                  <div className="px-4 py-2">
                    <LanguageSwitcher />
                  </div>
                  
                  <motion.button
                    onClick={() => {
                      setIsBookingModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-500 flex items-center justify-center mt-4 shadow-lg touch-manipulation min-h-[48px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="mr-2" size={18} />
                    Boka tid
                  </motion.button>
                  
                  <motion.a 
                    href="https://app.axiestudio.se/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 flex items-center justify-center shadow-lg touch-manipulation min-h-[48px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart className="mr-2" size={18} />
                    Logga in
                    <ExternalLink className="ml-2" size={18} />
                  </motion.a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Header;