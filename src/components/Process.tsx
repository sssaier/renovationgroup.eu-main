import React from 'react';

const Process = ({ language = 'english', isDarkMode = false }) => {
  const translations = {
    english: {
      subtitle: 'PROCESS',
      title: 'Our working process',
      steps: [
        {
          title: 'Site Visit & Cost estimation',
          description: 'Visiting site, gathering all the information, making briefings, check clients ideas and make a quotation based on the visit.'
        },
        {
          title: 'Planning and Design',
          description: 'Visiting site, gathering all the information, making briefings, check clients ideas and make a quotation based on the visit.'
        },
        {
          title: 'Procurement and Delivery',
          description: 'Procure all the materials required for the project and create a timeline for delivery.'
        },
        {
          title: 'Building Phase',
          description: 'Develop clear design plans that align with your vision and maximize space functionality.'
        },
        {
          title: 'Final Touches',
          description: 'Develop clear design plans that align with your vision and maximize space functionality.'
        },
        {
          title: 'Delivery of the Project',
          description: 'Develop clear design plans that align with your vision and maximize space functionality.'
        }
      ]
    },
    italian: {
      subtitle: 'PROCESSO',
      title: 'Il nostro processo di lavoro',
      steps: [
        {
          title: 'Sopralluogo e Stima dei Costi',
          description: 'Visita del sito, raccolta di tutte le informazioni, briefing, verifica delle idee del cliente e preventivo basato sulla visita.'
        },
        {
          title: 'Pianificazione e Design',
          description: 'Sviluppo di piani di progettazione chiari che si allineano con la tua visione e massimizzano la funzionalità dello spazio.'
        },
        {
          title: 'Approvvigionamento e Consegna',
          description: 'Approvvigionamento di tutti i materiali necessari per il progetto e creazione di una timeline per la consegna.'
        },
        {
          title: 'Fase di Costruzione',
          description: 'Sviluppo di piani di progettazione chiari che si allineano con la tua visione e massimizzano la funzionalità dello spazio.'
        },
        {
          title: 'Tocchi Finali',
          description: 'Sviluppo di piani di progettazione chiari che si allineano con la tua visione e massimizzano la funzionalità dello spazio.'
        },
        {
          title: 'Consegna del Progetto',
          description: 'Sviluppo di piani di progettazione chiari che si allineano con la tua visione e massimizzano la funzionalità dello spazio.'
        }
      ]
    },
    romanian: {
      subtitle: 'PROCES',
      title: 'Procesul nostru de lucru',
      steps: [
        {
          title: 'Vizită la Fața Locului și Estimare Costuri',
          description: 'Vizitarea locului, colectarea tuturor informațiilor, briefing-uri, verificarea ideilor clientului și realizarea unei oferte bazate pe vizită.'
        },
        {
          title: 'Planificare și Design',
          description: 'Dezvoltarea unor planuri de design clare care se aliniază cu viziunea ta și maximizează funcționalitatea spațiului.'
        },
        {
          title: 'Aprovizionare și Livrare',
          description: 'Aprovizionarea tuturor materialelor necesare pentru proiect și crearea unui calendar pentru livrare.'
        },
        {
          title: 'Faza de Construcție',
          description: 'Dezvoltarea unor planuri de design clare care se aliniază cu viziunea ta și maximizează funcționalitatea spațiului.'
        },
        {
          title: 'Retusuri Finale',
          description: 'Dezvoltarea unor planuri de design clare care se aliniază cu viziunea ta și maximizează funcționalitatea spațiului.'
        },
        {
          title: 'Livrarea Proiectului',
          description: 'Dezvoltarea unor planuri de design clare care se aliniază cu viziunea ta și maximizează funcționalitatea spațiului.'
        }
      ]
    }
  };

  const t = translations[language];

  const processSteps = [
    {
      number: '01',
      title: t.steps[0].title,
      description: t.steps[0].description,
      size: 'large'
    },
    {
      number: '02',
      title: t.steps[1].title,
      description: t.steps[1].description,
      size: 'large'
    },
    {
      number: '03',
      title: t.steps[2].title,
      description: t.steps[2].description,
      size: 'small'
    },
    {
      number: '04',
      title: t.steps[3].title,
      description: t.steps[3].description,
      size: 'small'
    },
    {
      number: '05',
      title: t.steps[4].title,
      description: t.steps[4].description,
      size: 'small'
    },
    {
      number: '06',
      title: t.steps[5].title,
      description: t.steps[5].description,
      size: 'small'
    }
  ];

  return (
    <section id="process" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-stone-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className={`text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
                isDarkMode ? 'text-amber-400' : 'text-[#716154]'
              }`}>
                {t.subtitle}
              </div>
              <h2 className={`text-4xl lg:text-5xl font-serif leading-tight ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                {t.title.includes('nostro') ? (
                  <>Il nostro processo<br />di lavoro</>
                ) : t.title.includes('nostru') ? (
                  <>Procesul nostru<br />de lucru</>
                ) : (
                  <>Our working<br />process</>
                )}
              </h2>
            </div>
          </div>

          {/* Right side - Process Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-none p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-stone-200'
                  } ${
                    step.size === 'large' && index < 2 ? 'md:col-span-1' : ''
                  }`}
                >
                  <div className="mb-6">
                    <span className={`text-3xl font-light font-serif ${
                      isDarkMode ? 'text-amber-400' : 'text-[#716154]'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-serif mb-4 leading-tight ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`leading-relaxed text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;