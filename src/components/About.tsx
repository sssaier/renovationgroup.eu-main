import React from 'react';

const About = ({ language = 'english', isDarkMode = false }) => {
  const translations = {
    english: {
      subtitle: '— ABOUT',
      title: 'RENOVATION - HUB',
      description1: 'With over 20 years of proven experience, we specialize in delivering high-quality painting and finishing solutions for both interiors and exteriors. Our services range from classic wall painting to advanced decorative techniques, tailored to bring elegance and personality to every space.',
      description2: 'We are experts in: Interior & Exterior Painting – flawless finishes that last. Drywall & Plasterboard (Cartongesso) – precise installation and seamless surfaces. Decorative Paints & Textures – unique designs that transform walls into works of art. Marble Effects & Special Finishes – sophisticated, timeless looks with a luxury touch. Our commitment is simple: craftsmanship, attention to detail, and results that exceed expectations. Whether you are renovating your home, upgrading your business space, or looking for a signature decorative effect, we bring creativity and professionalism to every project.',
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      learnMore: 'LEARN MORE ABOUT US',
      qualityAssurance: 'Quality Assurance',
      qualityDesc: 'Every project undergoes rigorous quality checks to ensure exceptional standards.',
      timelyDelivery: 'Timely Delivery',
      timelyDesc: 'We pride ourselves on completing projects on time without compromising quality.',
      expertTeam: 'Expert Team',
      expertDesc: 'Our skilled professionals bring years of experience to every project.'
    },
    italian: {
      subtitle: '— CHI SIAMO',
      title: 'RENOVATION - HUB',
      description1: 'RENOVATION GROUP è specializzato nei servizi di contratti di allestimento. I nostri professionisti autorizzati, armati di un impegno implacabile per l\'eccellenza, trasformano spazi commerciali e non commerciali, ville lussuose, hotel, appartamenti o grattacieli imponenti.',
      description2: 'Il nostro team di esperti è specializzato nel trasformare gli spazi in ambienti straordinari. Dal concept al completamento, forniamo soluzioni di allestimento impeccabili su misura per la tua visione unica. Con meticolosa attenzione ai dettagli e un impegno per la qualità, creiamo spazi che ispirano e impressionano.',
      yearsExperience: 'Anni di Esperienza',
      projectsCompleted: 'Progetti Completati',
      learnMore: 'SCOPRI DI PIÙ SU DI NOI',
      qualityAssurance: 'Garanzia di Qualità',
      qualityDesc: 'Ogni progetto subisce rigorosi controlli di qualità per garantire standard eccezionali.',
      timelyDelivery: 'Consegna Puntuale',
      timelyDesc: 'Ci vantiamo di completare i progetti in tempo senza compromettere la qualità.',
      expertTeam: 'Team di Esperti',
      expertDesc: 'I nostri professionisti qualificati portano anni di esperienza in ogni progetto.'
    },
    romanian: {
      subtitle: '— DESPRE NOI',
      title: 'RENOVATION - HUB',
      description1: 'RENOVATION GROUP este specializat în servicii de contracte de amenajare. Profesioniștii noștri autorizați, înarmați cu un angajament neclintit față de excelență, transformă spații comerciale și necomerciale, vile luxoase, hoteluri, apartamente sau zgârie-nori impunători.',
      description2: 'Echipa noastră de experți este specializată în transformarea spațiilor în medii extraordinare. De la concept la finalizare, oferim soluții de amenajare impecabile adaptate viziunii tale unice. Cu atenție meticulousă la detalii și un angajament pentru calitate, creăm spații care inspiră și impresion ează.',
      yearsExperience: 'Ani de Experiență',
      projectsCompleted: 'Proiecte Finalizate',
      learnMore: 'AFLAȚI MAI MULTE DESPRE NOI',
      qualityAssurance: 'Asigurarea Calității',
      qualityDesc: 'Fiecare proiect trece prin controale riguroase de calitate pentru a asigura standarde excepționale.',
      timelyDelivery: 'Livrare la Timp',
      timelyDesc: 'Ne mândrim cu finalizarea proiectelor la timp fără a compromite calitatea.',
      expertTeam: 'Echipă de Experți',
      expertDesc: 'Profesioniștii noștri calificați aduc ani de experiență în fiecare proiect.'
    }
  };

  const t = translations[language];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
            isDarkMode ? 'text-gray-400' : 'text-stone-600'
          }`}>
            {t.subtitle}
          </div>
          <h2 className={`text-4xl lg:text-5xl font-serif ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {t.title}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Renovation Hub Team"
              className="w-full h-96 object-cover shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className={`text-lg leading-relaxed space-y-6 ${
              isDarkMode ? 'text-gray-300' : 'text-stone-700'
            }`}>
              <p>
                {t.description1}
              </p>
              
              <p>
                {t.description2}
              </p>
            </div>

            {/* Stats or Features */}
            <div className={`grid grid-cols-2 gap-8 pt-8 border-t ${
              isDarkMode ? 'border-gray-700' : 'border-stone-200'
            }`}>
              <div>
                <div className={`text-3xl font-serif mb-2 ${
                  isDarkMode ? 'text-amber-400' : 'text-[#716154]'
                }`}>20+</div>
                <div className={`text-sm uppercase tracking-wide ${
                  isDarkMode ? 'text-gray-400' : 'text-stone-600'
                }`}>{t.yearsExperience}</div>
              </div>
              <div>
                <div className={`text-3xl font-serif mb-2 ${
                  isDarkMode ? 'text-amber-400' : 'text-[#716154]'
                }`}>500+</div>
                <div className={`text-sm uppercase tracking-wide ${
                  isDarkMode ? 'text-gray-400' : 'text-stone-600'
                }`}>{t.projectsCompleted}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className={`w-16 h-16 border rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600' 
                : 'bg-stone-100 border-stone-200'
            }`}>
              <svg className={`w-8 h-8 ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-lg font-serif mb-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>{t.qualityAssurance}</h3>
            <p className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              {t.qualityDesc}
            </p>
          </div>

          <div className="text-center">
            <div className={`w-16 h-16 border rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600' 
                : 'bg-stone-100 border-stone-200'
            }`}>
              <svg className={`w-8 h-8 ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-lg font-serif mb-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>{t.timelyDelivery}</h3>
            <p className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              {t.timelyDesc}
            </p>
          </div>

          <div className="text-center">
            <div className={`w-16 h-16 border rounded-full flex items-center justify-center mx-auto mb-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600' 
                : 'bg-stone-100 border-stone-200'
            }`}>
              <svg className={`w-8 h-8 ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className={`text-lg font-serif mb-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>{t.expertTeam}</h3>
            <p className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-stone-600'
            }`}>
              {t.expertDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;