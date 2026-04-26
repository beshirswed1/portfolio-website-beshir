'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: 'en',
          includedLanguages: 'tr,ar,en,es,fr,de,ru',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Try to detect currently selected language from cookies
    const cookie = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
    if (cookie) {
      const langCode = cookie.split('=')[1].split('/')[2];
      const foundLang = languages.find(l => l.code === langCode);
      if (foundLang) setCurrentLang(foundLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);

    // Change the hidden Google Translate dropdown
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = lang.code;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // Fallback: Set cookie and reload if the widget hasn't loaded properly
      document.cookie = `googtrans=/en/${lang.code}; path=/;`;
      window.location.reload();
    }
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Visually hidden original widget */}
      <div id="google_translate_element" className="absolute opacity-0 pointer-events-none -z-10"></div>

      {/* Custom Switcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 hover:border-sky-400/50 hover:bg-white/[0.05] transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-sky-400" />
        <span className="text-sm font-medium text-white">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Custom Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 py-2 bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-white/[0.08] transition-colors ${
                  currentLang.code === lang.code ? 'bg-sky-500/10 text-sky-400' : 'text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GoogleTranslate;
