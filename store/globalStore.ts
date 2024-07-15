import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import storageKeys from "@/constants/storageKeys";
import LanguageKeys from "@/constants/languageKeys";
type GlobalStage = {
  isDarkMode: boolean;
  locale: LanguageKeys;
};
type GlobalAction = {
  setDarkMode: () => void;
  setLocale: () => void;
};
const initialState: GlobalStage = {
  isDarkMode: false,
  locale: LanguageKeys.en,
};
const globalPersist = persist<GlobalStage & GlobalAction>(
  set => ({
    ...initialState,
    setDarkMode: () => set(state => ({ isDarkMode: !state.isDarkMode })),
    setLocale: () =>
      set(state => ({
        locale:
          state.locale === LanguageKeys.en
            ? LanguageKeys.zh
            : LanguageKeys.en,
      })),
  }),
  {
    name: storageKeys.GLOBAL,
    storage: createJSONStorage(() => sessionStorage),
  },
);

const globalStore = create<GlobalStage & GlobalAction>()(globalPersist);
export default globalStore;
