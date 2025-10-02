import React from 'react';

interface FeaturedProjectsProps {
  language?: string;
  isDarkMode?: boolean;
  onProjectClick?: (project: any) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ language = 'english', isDarkMode = false, onProjectClick }) => {
  const translations = {
    english: {
      title: 'Featured Projects',
      featured: 'Featured',
      viewAll: 'VIEW ALL PROJECTS',
      categories: {
        'Luxury Bathroom': 'Luxury Bathroom',
        'Master Bedroom': 'Master Bedroom',
        'Modern Living Room': 'Modern Living Room',
        'Contemporary Office': 'Contemporary Office',
        'Office Renovation': 'Office Renovation'
      }
    },
    italian: {
      title: 'Progetti in Evidenza',
      featured: 'In Evidenza',
      viewAll: 'VISUALIZZA TUTTI I PROGETTI',
      categories: {
        'Luxury Bathroom': 'Bagno di Lusso',
        'Master Bedroom': 'Camera da Letto Principale',
        'Modern Living Room': 'Soggiorno Moderno',
        'Contemporary Office': 'Ufficio Contemporaneo',
        'Office Renovation': 'Ristrutturazione Ufficio'
      }
    },
    romanian: {
      title: 'Proiecte Recomandate',
      featured: 'Recomandat',
      viewAll: 'VIZUALIZAȚI TOATE PROIECTELE',
      categories: {
        'Luxury Bathroom': 'Baie de Lux',
        'Master Bedroom': 'Dormitor Principal',
        'Modern Living Room': 'Sufragerie Modernă',
        'Contemporary Office': 'Birou Contemporan',
        'Office Renovation': 'Renovare Birou'
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'Shoreline 1',
      category: t.categories['Luxury Bathroom'],
      image: '/Screenshot_10.png',
      size: 'large',
      images: ['/Screenshot_10.png', '/Screenshot_11.png'],
      description: 'A stunning luxury bathroom renovation featuring premium materials, sophisticated fixtures, and elegant design elements that create a spa-like retreat.',
      details: {
        client: 'Private Residence',
        location: 'Dubai, UAE',
        duration: '3 months',
        services: ['Interior Design', 'Custom Cabinetry', 'Premium Fixtures', 'Lighting Design']
      }
    },
    {
      id: 2,
      title: 'Anantara South',
      category: t.categories['Master Bedroom'],
      image: '/Screenshot_13.png',
      size: 'small',
      images: ['/Screenshot_13.png'],
      description: 'An elegant master bedroom design combining comfort with contemporary aesthetics, featuring custom built-ins and sophisticated lighting.',
      details: {
        client: 'Anantara Residences',
        location: 'Dubai, UAE',
        duration: '2 months',
        services: ['Interior Design', 'Custom Furniture', 'Lighting Solutions']
      }
    },
    {
      id: 3,
      title: 'SHORELINE 1',
      category: t.categories['Modern Living Room'],
      image: '/Screenshot_7 copy.png',
      size: 'medium',
      featured: true,
      images: ['/Screenshot_7 copy.png', '/Screenshot_7.png'],
      description: 'A modern living space that seamlessly blends functionality with style, creating an inviting atmosphere for relaxation and entertainment.',
      details: {
        client: 'Shoreline Apartments',
        location: 'Dubai, UAE',
        duration: '4 months',
        services: ['Complete Renovation', 'Custom Millwork', 'Smart Home Integration']
      }
    },
    {
      id: 4,
      title: 'South Ridge',
      category: t.categories['Contemporary Office'],
      image: '/Screenshot_9.png',
      size: 'small',
      images: ['/Screenshot_9.png'],
      description: 'A contemporary office space designed to enhance productivity while maintaining a sophisticated and professional atmosphere.',
      details: {
        client: 'Corporate Client',
        location: 'Dubai, UAE',
        duration: '3 months',
        services: ['Office Design', 'Space Planning', 'Custom Solutions']
      }
    },
    {
      id: 5,
      title: 'Commercial Space',
      category: t.categories['Office Renovation'],
      image: '/Screenshot_12.png',
      size: 'medium',
      images: ['/Screenshot_12.png'],
      description: 'A comprehensive office renovation transforming the workspace into a modern, efficient, and inspiring environment.',
      details: {
        client: 'Commercial Building',
        location: 'Dubai, UAE',
        duration: '5 months',
        services: ['Full Renovation', 'MEP Upgrades', 'Interior Fit-Out']
      }
    }
  ];

  return (
    <section id="portfolio" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-stone-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-serif ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {t.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick?.(project)}
              className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } ${
                project.size === 'large' ? 'md:row-span-2' : 
                project.size === 'medium' ? 'lg:col-span-2' : ''
              } ${project.featured ? 'lg:row-span-1' : ''}`}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-stone-200'
                  }`}>
                    {project.category}
                  </div>
                  <h3 className={`text-xl font-serif mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100 group-hover:text-white' : 'text-white group-hover:text-stone-100'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${
                    isDarkMode 
                      ? 'bg-gray-800/90 text-white' 
                      : 'bg-white/90 text-black'
                  }`}>
                    {t.featured}
                  </div>
                )}

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;