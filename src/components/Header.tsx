import React, { useState } from 'react';
import { Menu, X, Home, Phone, MessageCircle, Moon, Sun } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Header = ({ language, setLanguage, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translations = {
    english: {
      services: 'SERVICES',
      projects: 'PROJECTS',
      process: 'PROCESS',
      about: 'ABOUT US',
      requestCall: 'REQUEST A CALL'
    },
    italian: {
      services: 'SERVIZI',
      projects: 'PROGETTI',
      process: 'PROCESSO',
      about: 'CHI SIAMO',
      requestCall: 'RICHIEDI UNA CHIAMATA'
    },
    romanian: {
      services: 'SERVICII',
      projects: 'PROIECTE',
      process: 'PROCES',
      about: 'DESPRE NOI',
      requestCall: 'SOLICITĂ UN APEL'
    }
  };

  const t = translations[language];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: t.services, href: '#services' },
    { name: t.projects, href: '#portfolio' },
    { name: t.process, href: '#process' },
    { name: t.about, href: '#about' },
  ];

  return (
    <header className={`fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900/95' : 'bg-stone-50/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <img 
              src="/Blue And White Illustration Home Decor Logo (1).png" 
              alt="Renovation Group Logo" 
             className="w-20 h-20 object-contain"
             style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1084%) hue-rotate(21deg) brightness(95%) contrast(89%)' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`hover:text-[#716154] transition-colors duration-300 font-medium text-sm tracking-wide ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <div className={`flex items-center rounded-full p-1 ${
                isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
              }`}>
                <button
                  onClick={() => setLanguage('english')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'english'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('italian')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'italian'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => setLanguage('romanian')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'romanian'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  RO
                </button>
              </div>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-stone-100 hover:bg-stone-200 text-gray-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>+39 329 718 8180</span>
              <a 
                href="https://wa.me/393297188180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Selector */}
            <div className="relative">
              <div className={`flex items-center rounded-full p-1 ${
                isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
              }`}>
                <button
                  onClick={() => setLanguage('english')}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'english'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('italian')}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'italian'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => setLanguage('romanian')}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    language === 'romanian'
                      ? 'bg-[#716154] text-white'
                      : `text-[#716154] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-stone-200'}`
                  }`}
                >
                  RO
                </button>
              </div>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-stone-100 hover:bg-stone-200 text-gray-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
             className={`hover:text-[#716154] transition-colors duration-300 ${
               isDarkMode ? 'text-white' : 'text-black'
             }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            isDarkMode ? 'border-gray-700' : 'border-stone-200'
          }`}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`hover:text-[#716154] transition-colors duration-300 font-medium text-sm tracking-wide ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className={`pt-4 border-t ${
                isDarkMode ? 'border-gray-700' : 'border-stone-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>+39 329 718 8180</span>
                  <a 
                    href="https://wa.me/393297188180" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <MessageCircle className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </header>
  );
};

export default Header;