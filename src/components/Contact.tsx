import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+39 329 718 8180',
      subtitle: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'andreselmariusdorin40@gmail.com',
      subtitle: '24/7 Response'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM',
      subtitle: 'Sat: 9AM-4PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto">
            Ready to transform your home? Contact us today for a free consultation and detailed project estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-stone-50 rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-black mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Remodeling</option>
                    <option value="whole-home">Whole Home Renovation</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="carpentry">Custom Carpentry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-semibold text-black mb-2">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-200k">$100,000 - $200,000</option>
                  <option value="over-200k">Over $200,000</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-stone-50 to-stone-100 border-2 border-[#716154] text-[#716154] py-4 rounded-lg hover:from-stone-100 hover:to-stone-200 hover:border-[#716154] transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Free Quote Request</span>
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-stone-50 to-stone-100 border-2 border-[#716154] rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-[#716154]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">{info.title}</h3>
                      <p className="text-[#716154] font-medium">{info.details}</p>
                      <p className="text-sm text-[#716154]">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;