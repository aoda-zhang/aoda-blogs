import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { GlobalAction, GlobalState } from "./types";
import { MDFileItemType, MDFilesType, RoutePath, StoreKeys } from "../types";
import formatPostDate from "../utils/formatPostDate";

const defaultState: GlobalState = {
  allPosts: {},
  currentPost: {
    content: "",
  },
  homePost: {
    content: "",
  },
  menuOptions: [
    {
      label: "Blogs",
      path: `/${RoutePath.blogs}`,
    },
    {
      label: "About",
      path: `/${RoutePath.about}`,
    },
  ],
  bio: {
    title: "Hi, I’m Aoda 👋",
    info: "I am a full-stack development engineer from mainland China-mainland. I have extensive working experience in global multinational companies. In the past, I worked for Newegg, an e-commerce company in the United States, and Manulife, a financial company in Canada. I have very good relationships with colleagues from other countries. It’s a pleasant cooperation experience. I love them. I like writing code and exploring all new and unknown things. I enjoy that my career can bring some good changes to all walks of life.",
  },
};
const useBearStore = create<GlobalState & GlobalAction>()(
  immer(
    devtools(
      set => ({
        ...defaultState,
        setAllPosts: (posts: MDFilesType) =>
          set(() => {
            return { allPosts: posts };
          }),
        setCurrentPost: (post: MDFileItemType) =>
          set(state => {
            state.currentPost = { ...post, date: formatPostDate(post?.date) };
          }),
        setHomePost: (post: MDFileItemType) =>
          set(() => ({ homePost: { ...post } })),
      }),
      { name: StoreKeys.globalStore },
    ),
  ),
);
export default useBearStore;
