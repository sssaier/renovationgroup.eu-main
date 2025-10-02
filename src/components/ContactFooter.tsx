import React from 'react';
import { MapPin, MessageCircle, Phone, Mail, Instagram } from 'lucide-react';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

const ContactFooter = ({ language = 'english', isDarkMode = false }) => {
  const translations = {
    english: {
      title: 'Let\'s bring visions to life',
      requestQuote: 'REQUEST A QUOTE',
      located: 'LOCATED',
      whatsapp: 'WHATSAPP',
      contactUs: 'CONTACT US',
      writeUs: 'WRITE US',
      pages: 'PAGES',
      connectSocials: 'CONNECT ON SOCIALS!',
      instagram: 'Instagram',
      copyright: '© 2025 RENOVATION-GROUP, All Rights Reserved',
      navigation: {
        services: 'Services',
        projects: 'Projects',
        process: 'Process',
        about: 'About us'
      }
    },
    italian: {
      title: 'Diamo vita alle visioni',
      requestQuote: 'RICHIEDI UN PREVENTIVO',
      located: 'SITUATI',
      whatsapp: 'WHATSAPP',
      contactUs: 'CONTATTACI',
      writeUs: 'SCRIVICI',
      pages: 'PAGINE',
      connectSocials: 'CONNETTITI SUI SOCIAL!',
      instagram: 'Instagram',
      copyright: '© 2025 RENOVATION-GROUP, Tutti i Diritti Riservati',
      navigation: {
        services: 'Servizi',
        projects: 'Progetti',
        process: 'Processo',
        about: 'Chi siamo'
      }
    },
    romanian: {
      title: 'Să dăm viață viziunilor',
      requestQuote: 'SOLICITĂ O OFERTĂ',
      located: 'LOCAȚIE',
      whatsapp: 'WHATSAPP',
      contactUs: 'CONTACTEAZĂ-NE',
      writeUs: 'SCRIE-NE',
      pages: 'PAGINI',
      connectSocials: 'CONECTEAZĂ-TE PE SOCIAL!',
      instagram: 'Instagram',
      copyright: '© 2025 RENOVATION-GROUP, Toate Drepturile Rezervate',
      navigation: {
        services: 'Servicii',
        projects: 'Proiecte',
        process: 'Proces',
        about: 'Despre noi'
      }
    }
  };

  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: t.located,
      details: ['Padua, Italy'],
      link: null,
      mobileOnly: false
    },
    {
      icon: MessageCircle,
      title: t.whatsapp,
      details: ['+39 329 718 8180'],
      link: 'https://wa.me/393297188180',
      mobileOnly: false
    },
    {
      icon: Phone,
      title: t.contactUs,
      details: ['+39 329 718 8180'],
      link: 'tel:+393297188180',
      mobileOnly: true
    },
    {
      icon: Mail,
      title: t.writeUs,
      details: ['andreselmariusdorin40@gmail.com'],
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=andreselmariusdorin40@gmail.com',
      mobileOnly: false
    }
  ];

  const pages = [
    { name: t.navigation.services, href: '#services' },
    { name: t.navigation.projects, href: '#portfolio' },
    { name: t.navigation.process, href: '#process' },
    { name: t.navigation.about, href: '#about' }
  ];

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-stone-50'
    }`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        }}
      >
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-gray-900/85' : 'bg-white/85'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif leading-tight mb-8 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {t.title.includes('Diamo') ? (
              <>Diamo vita<br />alle visioni</>
            ) : t.title.includes('dăm') ? (
              <>Să dăm viață<br />viziunilor</>
            ) : (
              <>Let's bring<br />visions to life</>
            )}
          </h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className={`px-12 py-4 transition-colors duration-300 font-medium text-sm tracking-[0.1em] uppercase ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-black text-white hover:bg-stone-800'
            }`}
          >
            {t.requestQuote}
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Left - Logo and Contact Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-12">
              <img
                src="/Blue And White Illustration Home Decor Logo (2).png"
                alt="Renovation Group Logo"
                className="w-12 h-12 object-contain"
                style={{ filter: isDarkMode ? 'brightness(0) saturate(100%) invert(82%) sepia(30%) saturate(1084%) hue-rotate(21deg) brightness(95%) contrast(89%)' : 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1084%) hue-rotate(21deg) brightness(95%) contrast(89%)' }}
              />
              <div className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                <div>Renovation</div>
                <div className={`text-sm font-normal ${
                  isDarkMode ? 'text-amber-400' : 'text-[#716154]'
                }`}>GROUP</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDarkMode ? 'bg-amber-400' : 'bg-[#716154]'
                    }`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold mb-1 tracking-wide ${
                        isDarkMode ? 'text-amber-400' : 'text-[#716154]'
                      }`}>
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        info.link ? (
                          <a
                            key={detailIndex}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm transition-colors duration-300 ${
                              info.mobileOnly ? 'lg:pointer-events-none lg:no-underline' : 'hover:underline'
                            } ${
                              isDarkMode ? 'text-white hover:text-amber-400' : 'text-black hover:text-[#716154]'
                            }`}
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detailIndex} className={`text-sm ${
                            isDarkMode ? 'text-white' : 'text-black'
                          }`}>
                            {detail}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center - Pages */}
          <div className="lg:col-span-1 lg:flex lg:flex-col lg:items-center">
            <div>
              <h3 className={`text-sm font-semibold mb-8 tracking-wide ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`}>
                {t.pages}
              </h3>
              <ul className="space-y-4">
                {pages.map((page, index) => (
                  <li key={index}>
                    <a
                      href={page.href}
                      className={`transition-colors duration-300 text-sm ${
                        isDarkMode
                          ? 'text-white hover:text-amber-400'
                          : 'text-black hover:text-[#716154]'
                      }`}
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="lg:col-span-1 lg:flex lg:justify-end">
            <div>
              <h3 className={`text-sm font-semibold mb-8 tracking-wide ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`}>
                {t.connectSocials}
              </h3>
              <div className="flex items-center space-x-3">
                <Instagram className={`h-5 w-5 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`} />
                <span className={`text-sm ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>{t.instagram}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t pt-8 ${
          isDarkMode ? 'border-gray-700' : 'border-stone-300'
        }`}>
          <div className="text-center">
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              {t.copyright}
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/393297188180" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </section>
  );
};

export default ContactFooter;