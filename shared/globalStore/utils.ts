import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
// It can persist save data in localStorage
const persistState = f => {
  return devtools(persist(f, { name: "aaa" }));
};
export default persistState;
