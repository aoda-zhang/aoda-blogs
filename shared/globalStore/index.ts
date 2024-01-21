import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { GlobalAction, GlobalState } from "./types";
import { MDFileItemType, MDFilesType, StoreKeys } from "../types";
import formatPostDate from "../utils/formatPostDate";

const defaultState: GlobalState = {
  allPosts: {},
  currentPost: {
    content: "",
  },
  latestPosts: [],
  homePost: {
    content: "",
  },
  menuOptions: [
    {
      label: "FrontEnd",
      path: "/frontEnd",
    },
    // {
    //   label: "BackEnd",
    //   path: "/backEnd",
    // },
    {
      label: "About",
      path: "/about",
    },
  ],
  bio: {
    title: "Hi, I’m Aoda 👋",
    info: "I am a full-stack development engineer from mainland China-mainland. I have extensive working experience in global multinational companies. In the past, I worked for Newegg, an e-commerce company in the United States, and Manulife, a financial company in Canada. I have very good relationships with colleagues from other countries. It’s a pleasant cooperation experience. I love them. I like writing code and exploring all new and unknown things. I enjoy that my career can bring some good changes to all walks of life.",
  },
  frontEndOption:
    "This is about frontEnd content, mainly including HTML CSS and JS and some front-end related frameworks or technology stacks, react, scss, vite and so on",
  backEndOptions: {},
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
        setLatestPosts: (posts: MDFileItemType[]) =>
          set(() => {
            return { latestPosts: posts };
          }),
      }),
      { name: StoreKeys.globalStore },
    ),
  ),
);
export default useBearStore;
