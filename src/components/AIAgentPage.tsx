import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Sparkles, Zap, MessageCircle, Clock, Brain, Shield, BarChart3, Users, Headphones, Globe, Star, Volume2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AIAgentPage = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  const features = [
    {
      icon: Clock,
      title: "24/7 Tillgänglighet",
      description: "Din AI-agent arbetar dygnet runt och svarar på kundfrågor även när du sover.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Omedelbara Svar",
      description: "Blixtsnabba svar på vanliga frågor och automatisk dirigering av komplexa ärenden.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "Smart Inlärning",
      description: "Lär sig från varje konversation och blir bättre på att hjälpa dina kunder över tid.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageCircle,
      title: "Chat & Röst",
      description: "Kommunicerar både via text och röst för en naturlig kundupplevelse.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Säker & Pålitlig",
      description: "Hanterar känslig information säkert och följer alla dataskyddsregler.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Detaljerad Analys",
      description: "Få insikter om kundinteraktioner, vanliga frågor och förbättringsområden.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const useCases = [
    {
      title: "Chatbot för Kundservice",
      description: "Hantera vanliga frågor, supportärenden och produktinformation automatiskt via text.",
      icon: MessageCircle,
      examples: ["Öppettider och kontaktinfo", "Produktspecifikationer", "Returpolicy", "Teknisk support"]
    },
    {
      title: "Röst AI-Agent",
      description: "Naturliga röstkonversationer som känns som att prata med en riktig person.",
      icon: Volume2,
      examples: ["Telefonbeställningar", "Röstbaserad support", "Interaktiva samtal", "Flerspråkig röstassistent"]
    },
    {
      title: "Försäljningsstöd",
      description: "Kvalificera leads, boka möten och guida kunder genom köpprocessen.",
      icon: Users,
      examples: ["Lead-kvalificering", "Produktrekommendationer", "Prisförfrågningar", "Mötesbokning"]
    },
    {
      title: "Flerspråkig Support",
      description: "Kommunicera med kunder på flera språk och nå en global marknad.",
      icon: Globe,
      examples: ["Svenska", "Engelska", "Tyska", "Spanska"]
    }
  ];

  const benefits = [
    {
      title: "Minska Arbetsbördan",
      description: "Automatisera upp till 80% av repetitiva kundinteraktioner",
      stat: "80%",
      color: "text-blue-600"
    },
    {
      title: "Förbättra Kundnöjdhet",
      description: "Snabbare svar leder till nöjdare kunder och högre betyg",
      stat: "95%",
      color: "text-green-600"
    },
    {
      title: "Sänk Kostnader",
      description: "Reducera behovet av manuell kundservice med upp till 60%",
      stat: "60%",
      color: "text-purple-600"
    },
    {
      title: "Öka Försäljning",
      description: "Kvalificera fler leads och konvertera fler besökare till kunder",
      stat: "+40%",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold mb-8 shadow-lg"
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Bot className="mr-3 animate-bounce" size={24} />
              AI AGENT
              <Sparkles className="ml-3 animate-pulse" size={24} />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Din Intelligenta
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI-Assistent
              </span>
            </h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Revolutionera din kundservice med en AI-agent som förstår ditt företag, 
              svarar på frågor och hjälper dina kunder 24/7 - både via text och röst.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="mr-3" size={24} />
                Kom igång med AI-Agent
              </button>
              
              <button 
                onClick={() => setIsShowcaseOpen(true)}
                className="bg-white/90 backdrop-blur-sm border-2 border-blue-600/50 text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <ExternalLink className="mr-3" size={24} />
                Se Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Embedded AI Agent */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Bot size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Axie AI Agent</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm opacity-90">Live & Redo att Hjälpa</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="text-yellow-300" size={24} />
                  <span className="text-sm font-medium">Powered by AI</span>
                </div>
              </div>
            </div>

            {/* Embedded AI Agent */}
            <div className="relative h-96 md:h-[600px]">
              <iframe
                src="https://axieagent.netlify.app/"
                className="w-full h-full border-0"
                title="Axie AI Agent"
                allow="microphone; camera; geolocation"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Kraftfulla AI-Funktioner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vår AI-agent är utrustad med avancerade funktioner som gör den till den perfekta digitala medarbetaren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Chatbot eller Röst AI-Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Välj mellan textbaserad chatbot eller röstbaserad AI-agent - eller kombinera båda för maximal flexibilitet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <useCase.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {useCase.examples.map((example, exIndex) => (
                    <div key={exIndex} className="bg-blue-50 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-blue-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Mätbara Resultat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Se hur vår AI-agent kan förbättra din verksamhet med konkreta resultat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className={`text-6xl font-black mb-4 ${benefit.color}`}>
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Redo att Revolutionera din Kundservice?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Låt vår AI-agent ta hand om dina kunder medan du fokuserar på att växa ditt företag. 
              Kom igång idag med en kostnadsfri konsultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Star className="mr-3" size={24} />
                Starta din AI-Agent
              </button>
              
              <button 
                onClick={() => setIsShowcaseOpen(true)}
                className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="mr-3" size={24} />
                Se Showcase Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Showcase Modal */}
      {isShowcaseOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl h-[90vh] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Bot size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Chatbot Showcase</h3>
                  <p className="text-sm opacity-90">Se hur din chatbot kan hjälpa ditt företag</p>
                </div>
              </div>
              <button
                onClick={() => setIsShowcaseOpen(false)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Embedded Showcase */}
            <div className="h-full">
              <iframe
                src="https://chatbotex1.netlify.app/"
                className="w-full h-full border-0"
                title="AI Chatbot Showcase"
                allow="microphone; camera"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AIAgentPage;