import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { default as en } from "./languages/en.json";
import { default as es } from "./languages/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: es,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
