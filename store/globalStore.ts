import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import storageKeys from "@/constants/storageKeys";
import LanguageKeys from "@/constants/languageKeys";
type GlobalStage = {
  isDarkMode: boolean;
  language: string;
};
type GlobalAction = {
  setDarkMode: () => void;
  setLanguage: () => void;
};
const initialState: GlobalStage = {
  isDarkMode: false,
  language:
    navigator.language === LanguageKeys.zh_CN
      ? LanguageKeys?.zh_CN
      : LanguageKeys.en_US,
};
const globalPersist = persist<GlobalStage & GlobalAction>(
  set => ({
    ...initialState,
    setDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode })),
    setLanguage: () =>
      set(state => ({
        language:
          state.language === LanguageKeys.en_US
            ? LanguageKeys.zh_CN
            : LanguageKeys.en_US,
      })),
  }),
  {
    name: storageKeys.GLOBAL,
    storage: createJSONStorage(() => sessionStorage),
  },
);

const globalStore = create<GlobalStage & GlobalAction>()(globalPersist);
export default globalStore;
