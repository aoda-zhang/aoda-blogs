import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
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
  bio: "",
  frontEndOption:
    "This is about frontEnd content, mainly including HTML CSS and JS and some front-end related frameworks or technology stacks, react, scss, vite and so on",
  backEndOptions: {},
};
const useBearStore = create<GlobalState & GlobalAction>()(
  immer(
    devtools(
      persist(
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
  ),
);
export default useBearStore;
