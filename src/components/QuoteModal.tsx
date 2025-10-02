import React, { useState } from 'react';
import { useEffect } from 'react';
import { X, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'english' | 'italian' | 'romanian';
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const translations = {
    english: {
      title: "Let's Design the Home You've Always Imagined",
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      namePlaceholder: 'Enter your full name',
      phonePlaceholder: 'Enter your phone number',
      emailPlaceholder: 'Enter your email address',
      phoneError: 'Phone number can only contain numbers',
      emailError: 'Email must contain @',
      send: 'SEND',
      sending: 'SENDING...',
      successMessage: 'Thank you for your request! Your email client will open to send the quote request.',
      errorMessage: 'There was an error processing your request. Please try again.',
      emailSubject: 'New Quote Request from Website',
      emailBody: 'New Quote Request:'
    },
    italian: {
      title: "Progettiamo la Casa che Hai Sempre Immaginato",
      name: 'Nome',
      phone: 'Telefono',
      email: 'Email',
      namePlaceholder: 'Inserisci il tuo nome completo',
      phonePlaceholder: 'Inserisci il tuo numero di telefono',
      emailPlaceholder: 'Inserisci il tuo indirizzo email',
      phoneError: 'Il numero di telefono può contenere solo numeri',
      emailError: "L'email deve contenere @",
      send: 'INVIA',
      sending: 'INVIO IN CORSO...',
      successMessage: 'Grazie per la tua richiesta! Il tuo client email si aprirà per inviare la richiesta di preventivo.',
      errorMessage: 'Si è verificato un errore durante l\'elaborazione della richiesta. Riprova.',
      emailSubject: 'Nuova Richiesta di Preventivo dal Sito Web',
      emailBody: 'Nuova Richiesta di Preventivo:'
    },
    romanian: {
      title: 'Să Proiectăm Casa pe Care Ai Visat-o Întotdeauna',
      name: 'Nume',
      phone: 'Telefon',
      email: 'Email',
      namePlaceholder: 'Introduceți numele complet',
      phonePlaceholder: 'Introduceți numărul de telefon',
      emailPlaceholder: 'Introduceți adresa de email',
      phoneError: 'Numărul de telefon poate conține doar cifre',
      emailError: 'Email-ul trebuie să conțină @',
      send: 'TRIMITE',
      sending: 'SE TRIMITE...',
      successMessage: 'Vă mulțumim pentru solicitare! Clientul dvs. de email se va deschide pentru a trimite cererea de ofertă.',
      errorMessage: 'A apărut o eroare la procesarea solicitării. Vă rugăm să încercați din nou.',
      emailSubject: 'Solicitare Nouă de Ofertă de pe Site',
      emailBody: 'Solicitare Nouă de Ofertă:'
    }
  };

  const t = translations[language];

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalContent = document.querySelector('.modal-content');
      if (modalContent && !modalContent.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Clear previous errors
    setErrors(prev => ({ ...prev, [name]: '' }));
    
    // Phone number validation - only allow numbers, spaces, hyphens, parentheses, and plus
    if (name === 'phone') {
      const phoneRegex = /^[0-9\s\-\(\)\+]*$/;
      if (value && !phoneRegex.test(value)) {
        setErrors(prev => ({ ...prev, phone: t.phoneError }));
        return;
      }
    }

    // Email validation - must contain @
    if (name === 'email') {
      if (value && !value.includes('@')) {
        setErrors(prev => ({ ...prev, email: t.emailError }));
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    const newErrors = { phone: '', email: '' };
    
    // Validate phone number
    const phoneRegex = /^[0-9\s\-\(\)\+]+$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = t.phoneError;
    }

    // Validate email
    if (!formData.email.includes('@')) {
      newErrors.email = t.emailError;
    }
    
    if (newErrors.phone || newErrors.email) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(t.emailSubject);
      const body = encodeURIComponent(`
${t.emailBody}

${t.name}: ${formData.name}
${t.phone}: ${formData.phone}
${t.email}: ${formData.email}

Please contact this client for their renovation project.
      `);

      const mailtoLink = `mailto:andreselmariusdorin40@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      alert(t.successMessage);

      // Reset form and close modal
      setFormData({ name: '', phone: '', email: '' });
      onClose();
    } catch (error) {
      alert(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-stone-100 rounded-lg shadow-2xl max-w-md w-full relative modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black hover:text-[#716154] transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h2 className="text-3xl font-serif text-black mb-2 leading-tight">
            {t.title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300"
                placeholder={t.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300 ${
                  errors.phone ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder={t.phonePlaceholder}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-[#716154] focus:border-transparent transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder={t.emailPlaceholder}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-[#716154] transition-colors duration-300 font-medium text-sm tracking-[0.1em] uppercase flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>{t.sending}</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>{t.send}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;