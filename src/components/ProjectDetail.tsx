import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    images?: string[];
    description?: string;
    details?: {
      client?: string;
      location?: string;
      duration?: string;
      services?: string[];
    };
  };
  onBack: () => void;
  language?: string;
  isDarkMode?: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  language = 'english',
  isDarkMode = false
}) => {
  const translations = {
    english: {
      back: 'Back to Projects',
      client: 'Client',
      location: 'Location',
      duration: 'Duration',
      services: 'Services Provided',
      gallery: 'Project Gallery',
      overview: 'Project Overview'
    },
    italian: {
      back: 'Torna ai Progetti',
      client: 'Cliente',
      location: 'Posizione',
      duration: 'Durata',
      services: 'Servizi Forniti',
      gallery: 'Galleria del Progetto',
      overview: 'Panoramica del Progetto'
    },
    romanian: {
      back: 'Înapoi la Proiecte',
      client: 'Client',
      location: 'Locație',
      duration: 'Durată',
      services: 'Servicii Oferite',
      gallery: 'Galerie Proiect',
      overview: 'Prezentare Proiect'
    }
  };

  const t = translations[language];

  // Default gallery images if not provided
  const galleryImages = project.images || [project.image];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-stone-50'
    }`}>
      {/* Header with Back Button */}
      <div className={`sticky top-0 z-40 ${
        isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${
        isDarkMode ? 'border-gray-700' : 'border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-stone-600 hover:text-black'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">{t.back}</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm font-medium tracking-[0.15em] uppercase mb-2 text-stone-200">
              {project.category}
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Project Details Sidebar */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg p-8 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              {project.details?.client && (
                <div className="mb-6">
                  <h3 className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-stone-500'
                  }`}>
                    {t.client}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-200' : 'text-black'
                  }`}>
                    {project.details.client}
                  </p>
                </div>
              )}

              {project.details?.location && (
                <div className="mb-6">
                  <h3 className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-stone-500'
                  }`}>
                    {t.location}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-200' : 'text-black'
                  }`}>
                    {project.details.location}
                  </p>
                </div>
              )}

              {project.details?.duration && (
                <div className="mb-6">
                  <h3 className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-stone-500'
                  }`}>
                    {t.duration}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-200' : 'text-black'
                  }`}>
                    {project.details.duration}
                  </p>
                </div>
              )}

              {project.details?.services && project.details.services.length > 0 && (
                <div>
                  <h3 className={`text-xs font-medium tracking-[0.15em] uppercase mb-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-stone-500'
                  }`}>
                    {t.services}
                  </h3>
                  <ul className={`space-y-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-black'
                  }`}>
                    {project.details.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Project Description and Gallery */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            {project.description && (
              <div>
                <h2 className={`text-3xl font-serif mb-6 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  {t.overview}
                </h2>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-stone-700'
                }`}>
                  {project.description}
                </p>
              </div>
            )}

            {/* Gallery */}
            {galleryImages.length > 1 && (
              <div>
                <h2 className={`text-3xl font-serif mb-6 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  {t.gallery}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] group"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
