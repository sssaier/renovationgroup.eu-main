import React from 'react';

const CallToAction = ({ language = 'english', isDarkMode = false }) => {
  const translations = {
    english: {
      title: 'Elevate your living space',
      description: 'Experience luxury redefined with bespoke interiors that blend elegance and functionality seamlessly. Transform your home with timeless designs, crafted for comfort and sophistication. Elevate your space to reflect your unique style and vision.',
      followInstagram: 'FOLLOW US ON INSTAGRAM'
    },
    italian: {
      title: 'Eleva il tuo spazio abitativo',
      description: 'Sperimenta il lusso ridefinito con interni su misura che fondono eleganza e funzionalità senza soluzione di continuità. Trasforma la tua casa con design senza tempo, creati per comfort e raffinatezza. Eleva il tuo spazio per riflettere il tuo stile e la tua visione unici.',
      followInstagram: 'SEGUICI SU INSTAGRAM'
    },
    romanian: {
      title: 'Ridică nivelul spațiului tău de locuit',
      description: 'Experimen tează luxul redefinit cu interioare personalizate care îmbină eleganța și funcționalitatea fără probleme. Transformă-ți casa cu design-uri intemporale, create pentru confort și sofisticare. Ridică spațiul tău pentru a-ți reflecta stilul și viziunea unice.',
      followInstagram: 'URMEAZĂ-NE PE INSTAGRAM'
    }
  };

  const t = translations[language];

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
    }`}>
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
          {/* Main Heading */}
          <h2 className={`text-4xl lg:text-5xl font-serif leading-tight ${
            isDarkMode ? 'text-gray-100' : 'text-white'
          }`}>
            {t.title}
          </h2>

          {/* Description */}
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-200' : 'text-white/90'
          }`}>
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className={`bg-transparent px-8 py-4 font-medium text-sm tracking-[0.1em] uppercase transition-all duration-300 backdrop-blur-sm border-2 ${
              isDarkMode 
                ? 'hover:bg-gray-700/20 text-gray-100 border-gray-300/50 hover:border-gray-200'
                : 'hover:bg-white/10 text-white border-white/50 hover:border-white'
            }`}>
              {t.followInstagram}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full opacity-20"></div>
    </section>
  );
};

export default CallToAction;