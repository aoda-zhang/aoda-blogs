export type PostItemType = {
  title: string;
  desc: string;
  path: string;
  index?: number;
};

export type ItemType = {
  slug: string;
  fileFolder: string;
};

export type PostItemParam = {
  params: ItemType;
};
