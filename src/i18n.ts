import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationBG from './locales/bg/translation.json';

const resources = {
  en: { translation: translationEN },
  bg: { translation: translationBG },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
