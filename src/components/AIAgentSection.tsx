import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Sparkles, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const AIAgentSection = () => {
  const { t, currentLanguage } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -10 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Bot className="mr-2 animate-bounce" size={20} />
            {t('aiAgent.badge')}
            <Sparkles className="ml-2 animate-pulse" size={20} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('aiAgent.title')}
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('aiAgent.subtitle')}
          </motion.p>

          {/* CTA to AI Agent Page */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to={`/${currentLanguage.code}/ai-agent`}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Bot className="mr-3" size={24} />
              Utforska AI Agent
              <ExternalLink className="ml-3" size={20} />
            </Link>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/90 backdrop-blur-sm border-2 border-purple-600/50 text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <Sparkles className="mr-3" size={20} />
              Kom igång idag
            </button>
          </motion.div>
        </motion.div>

        {/* Features Preview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bot className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('aiAgent.features.availability.title')}</h3>
            <p className="text-gray-600">{t('aiAgent.features.availability.description')}</p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('aiAgent.features.responses.title')}</h3>
            <p className="text-gray-600">{t('aiAgent.features.responses.description')}</p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('aiAgent.features.learning.title')}</h3>
            <p className="text-gray-600">{t('aiAgent.features.learning.description')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgentSection;