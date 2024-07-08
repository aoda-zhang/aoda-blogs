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
  path: string;
  index?: number;
  tags: string[];
  date: string;
};

export type ItemType = {
  slug: string;
  fileFolder: string;
  language?: string;
};

export type PostItemParam = {
  params: ItemType;
};
