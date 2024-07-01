import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import ThemeKeys from "@/constants/themeKeys";
import storageKeys from "@/constants/storageKeys";
import LanguageKeys from "@/constants/languageKeys";
type GlobalStage = {
  theme: ThemeKeys;
  language: string;
};
type GlobalAction = {
  setTheme: (theme: ThemeKeys) => void;
  setLanguage: () => void;
};
const initialState: GlobalStage = {
  theme: ThemeKeys.light,
  language: LanguageKeys.en_US,
};
const globalPersist = persist<GlobalStage & GlobalAction>(
  set => ({
    ...initialState,
    setTheme: (theme: ThemeKeys) => set(() => ({ theme })),
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
