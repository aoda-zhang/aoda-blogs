export type MDRenderType = {
  datas: MDFileItemType[] | [];
};
export type MDFilesType = {
  home?: MDFileItemType[];
  blogs?: MDFileItemType[];
  about?: MDFileItemType[];
};
export type MDFileItemType = {
  title?: string;
  date?: string;
  summary?: string;
  content: string;
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
  footer = "footer",
}
export enum StoreKeys {
  globalStore = "globalStore",
}
