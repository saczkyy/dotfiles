import i18n from "i18next";
import { initReactI18next } from "react-i18next";

console.log({
  resources: {
    en: {
      translation: require("./languages/en.json"),
    },
    fr: {
      translation: require("./languages/es.json"),
    },
  },
});

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./languages/en.json"),
    },
    fr: {
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
