import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: require("./locales/en/common.json"),
      toturial: require("./locales/en/toturial.json"),
    },
    zh: {
      common: require("./locales/zh/common.json"),
      toturial: require("./locales/zh/toturial.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
