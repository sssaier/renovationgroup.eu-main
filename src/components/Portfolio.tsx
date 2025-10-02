import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Bathroom', 'Living Room', 'Bedroom'];

  const projects = [
    {
      id: 1,
      category: 'Kitchen',
      title: 'Modern Farmhouse Kitchen',
      before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete kitchen transformation with custom cabinetry and marble countertops.',
    },
    {
      id: 2,
      category: 'Bathroom',
      title: 'Luxury Master Bathroom',
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/2129019/pexels-photo-2129019.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spa-like bathroom renovation with premium fixtures and natural stone.',
    },
    {
      id: 3,
      category: 'Living Room',
      title: 'Contemporary Living Space',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Open concept living area with modern finishes and built-in entertainment center.',
    },
    {
      id: 4,
      category: 'Bedroom',
      title: 'Master Bedroom Suite',
      before: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant master bedroom with custom built-ins and walk-in closet.',
    },
    {
      id: 5,
      category: 'Kitchen',
      title: 'Traditional Kitchen Remodel',
      before: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Classic kitchen design with hardwood floors and granite countertops.',
    },
    {
      id: 6,
      category: 'Bathroom',
      title: 'Guest Bathroom Makeover',
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Compact bathroom renovation maximizing space and functionality.',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto mb-8">
            Explore our before and after transformations showcasing our commitment to quality and attention to detail.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-stone-100 to-stone-200 border-2 border-[#716154] text-[#716154] shadow-lg'
                    : 'bg-white text-black hover:text-[#716154] shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.before}
                    alt={`${project.title} - Before`}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-amber-600">
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#716154]">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hover to see after
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-amber-900 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#716154] font-semibold">View Details</span>
                  <ChevronRight className="h-5 w-5 text-[#716154] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;