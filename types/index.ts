import LanguageKeys from "@/constants/languageKeys";

export type MDRenderType = {
  datas: MDFileItemType[] | [];
};
export type MDFilesType = {
  [K in RoutePath]?: MDFileItemType[];
};
export type MDFileItemType = {
  title?: string;
  date?: string;
  summary?: string;
  content: string | undefined;
  tags?: string;
  [key: string]: string | number | Date | undefined;
};
export type MDFileOption = {
  path: string;
  name: string;
};
export enum RoutePath {
  home = "home",
  blogs = "blogs",
  about = "about",
}

export type PostItemType = {
  coverPath: string;
  title: string;
  desc: string;
  postPath: string;
  index?: number;
  tags: string[];
  date: string;
};

export type ItemType = {
  postPath: string;
  fileFolder: string;
  locale?: keyof LanguageKeys;
};

export type PostItemParam = {
  params: {slug:[keyof LanguageKeys,string]};
};
