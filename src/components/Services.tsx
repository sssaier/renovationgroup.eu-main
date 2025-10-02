import React from 'react';

const Services = ({ language = 'english', isDarkMode = false }) => {
  const translations = {
    english: {
      subtitle: 'EXPERT SOLUTIONS',
      title: 'Our Services',
      viewAll: 'VIEW ALL SERVICES',
      services: [
        {
          category: 'CUSTOM HOME',
          title: 'RESIDENTIAL RENOVATION',
          description: 'Complete home transformations with modern design and premium finishes'
        },
        {
          category: 'LUXURY SPACE STYLING',
          title: 'Decorative Painting',
          description: 'Sophisticated interior design with attention to every detail'
        },
        {
          category: 'MODERN LIVING',
          title: 'BATHROOM RENOVATION',
          description: 'Professional workspace design for productivity and style'
        },
        {
          category: 'CORPORATE OFFICE SPACES',
          title: 'RETAIL FIT-OUTS',
          description: 'Commercial spaces designed to enhance customer experience'
        }
      ]
    },
    italian: {
      subtitle: 'SOLUZIONI ESPERTE',
      title: 'I Nostri Servizi',
      viewAll: 'VISUALIZZA TUTTI I SERVIZI',
      services: [
        {
          category: 'CASA PERSONALIZZATA',
          title: 'RISTRUTTURAZIONE RESIDENZIALE',
          description: 'Trasformazioni complete della casa con design moderno e finiture premium'
        },
        {
          category: 'STYLING SPAZI DI LUSSO',
          title: 'Pittura Decorativa',
          description: 'Design sofisticato degli interni con attenzione ad ogni dettaglio'
        },
        {
          category: 'VITA MODERNA',
          title: 'RISTRUTTURAZIONE UFFICI',
          description: 'Design di spazi di lavoro professionali per produttività e stile'
        },
        {
          category: 'SPAZI UFFICI AZIENDALI',
          title: 'ALLESTIMENTI RETAIL',
          description: 'Spazi commerciali progettati per migliorare l\'esperienza del cliente'
        }
      ]
    },
    romanian: {
      subtitle: 'SOLUȚII EXPERTE',
      title: 'Serviciile Noastre',
      viewAll: 'VIZUALIZAȚI TOATE SERVICIILE',
      services: [
        {
          category: 'CASĂ PERSONALIZATĂ',
          title: 'RENOVARE REZIDENȚIALĂ',
          description: 'Transformări complete ale casei cu design modern și finisaje premium'
        },
        {
          category: 'STILIZARE SPAȚII DE LUX',
          title: 'Pictură Decorativă',
          description: 'Design sofisticat de interior cu atenție la fiecare detaliu'
        },
        {
          category: 'TRAI MODERN',
          title: 'RENOVARE BĂI',
          description: 'Design profesional de spații de lucru pentru productivitate și stil'
        },
        {
          category: 'SPAȚII BIROURI CORPORATIVE',
          title: 'AMENAJĂRI RETAIL',
          description: 'Spații comerciale proiectate pentru a îmbunătăți experiența clientului'
        }
      ]
    }
  };

  const t = translations[language];

  const serviceImages = [
    '/Screenshot_2.png',
    '/Screenshot_1.png',
    '/Screenshot_4 copy.png',
    '/Screenshot_3.png'
  ];

  return (
    <section id="services" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
            isDarkMode ? 'text-amber-400' : 'text-[#716154]'
          }`}>
            {t.subtitle}
          </div>
          <h2 className={`text-4xl lg:text-5xl font-serif ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {t.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-none shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-200'
                  }`}>
                    {service.category}
                  </div>
                  <h3 className={`text-2xl font-serif mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100 group-hover:text-white' : 'text-white group-hover:text-stone-100'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-200'
                  }`}>
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;