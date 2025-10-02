import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Kitchen Renovation', href: '#services' },
    { name: 'Bathroom Remodeling', href: '#services' },
    { name: 'Whole Home Renovation', href: '#services' },
    { name: 'Basement Finishing', href: '#services' },
    { name: 'Interior Design', href: '#services' },
    { name: 'Custom Carpentry', href: '#services' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/Blue And White Illustration Home Decor Logo copy.png" 
                alt="Renovation Hub Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Renovation Hub</span>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Transforming homes with expert craftsmanship and exceptional service for over 20 years. Your dream home is our passion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:border hover:border-[#716154] rounded-lg flex items-center justify-center transition-all duration-300"
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-stone-100 hover:to-stone-200 hover:border hover:border-[#716154] rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent className="h-5 w-5 hover:text-[#716154]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-[#716154] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-amber-100 hover:text-[#716154] transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#716154] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-100">Padua, Italy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#716154] flex-shrink-0" />
                <p className="text-amber-100">+39 329 718 8180</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#716154] flex-shrink-0" />
                <p className="text-amber-100">andreselmariusdorin40@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-100 text-sm">
              © 2025 Renovation Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300">
              </a>
              <a href="#" className="text-amber-100 hover:text-[#716154] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-100 hover:text-[#716154] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-amber-100 hover:text-[#716154] transition-colors duration-300">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;