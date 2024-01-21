export type MDRenderType = {
  datas: MDFileItemType[];
};
export type MDFilesType = {
  home?: MDFileItemType[];
  frontEnd?: MDFileItemType[];
  backEnd?: MDFileItemType[];
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
  frontEnd = "frontEnd",
  backEnd = "backEnd",
  about = "about",
  footer = "footer",
}
export enum StoreKeys {
  globalStore = "globalStore",
}
