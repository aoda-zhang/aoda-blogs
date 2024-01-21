import { MDFileItemType, MDFilesType } from "@/shared/types";
export type GlobalState = {
  frontEndOption: string;
  backEndOptions: Record<string, unknown>;
  menuOptions: { label: string; path: string }[];
  bio: {
    title: string;
    info: string;
  };
  allPosts: MDFilesType;
  homePost: MDFileItemType;
  currentPost: MDFileItemType;
  latestPosts: MDFileItemType[];
};
export type GlobalAction = {
  setAllPosts: (posts: MDFilesType) => void;
  setHomePost: (post: MDFileItemType) => void;
  setCurrentPost: (post: MDFileItemType) => void;
  setLatestPosts: (posts: MDFileItemType[]) => void;
};
