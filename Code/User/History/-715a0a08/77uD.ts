import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as languages from "./languages";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    ...Object.entries(languages).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: "en",
});

export { i18n };
