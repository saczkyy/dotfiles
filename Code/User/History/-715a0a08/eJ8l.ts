import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es } from "./languages";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: require("./languages/en.json"),
    },
    es: {
      translation: require("./languages/es.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
