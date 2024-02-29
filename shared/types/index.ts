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
export enum StoreKeys {
  globalStore = "globalStore",
}
