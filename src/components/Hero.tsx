import React from 'react';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

const Hero = ({ language = 'english', isDarkMode = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translations = {
    english: {
      subtitle: 'Your Life. Your Style. Your Space.',
      title: 'DESIGNING VISIONS CRAFTING QUALITY',
      requestQuote: 'REQUEST A QUOTE'
    },
    italian: {
      subtitle: 'La Tua Vita. Il Tuo Stile. Il Tuo Spazio.',
      title: 'PROGETTARE VISIONI CREARE QUALITÀ',
      requestQuote: 'RICHIEDI UN PREVENTIVO'
    },
    romanian: {
      subtitle: 'Viața Ta. Stilul Tău. Spațiul Tău.',
      title: 'PROIECTĂM VIZIUNI CREĂM CALITATE',
      requestQuote: 'SOLICITĂ O OFERTĂ'
    }
  };

  const t = translations[language];

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Subtitle */}
          <div className={`text-sm font-medium tracking-[0.1em] ${
            isDarkMode ? 'text-gray-200' : 'text-white'
          }`}>
            {t.subtitle}
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl lg:text-7xl font-serif leading-tight ${
            isDarkMode ? 'text-gray-100' : 'text-white'
          }`}>
            {t.title}
          </h1>

          {/* CTA Button */}
          <div className="pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-12 py-4 rounded-none font-medium text-sm tracking-[0.1em] uppercase transition-all duration-300 backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-100 border-gray-400/20 hover:border-gray-300/40'
                  : 'bg-black/80 hover:bg-black text-white border-white/20 hover:border-white/40'
              }`}
            >
              {t.requestQuote}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </section>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </>
  );
};

export default Hero;