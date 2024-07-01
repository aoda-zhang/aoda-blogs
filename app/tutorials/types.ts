export type PostItemType = {
  title: string;
  desc: string;
  path: string;
  index?: number;
};

export type ItemType = {
  slug: string;
  fileFolder: string;
  language?: string;
};

export type PostItemParam = {
  params: ItemType;
};
