import path from "path";
import fs from "fs";

import { MDXRemote } from "next-mdx-remote/rsc";

import { ItemType } from "@/app/tutorials/types";
import LanguageKeys from "@/constants/languageKeys";

export default function PostContainer(params: ItemType) {
  const { slug, fileFolder, language = LanguageKeys.en_US } = params;
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(
    postsDirectory,
    language === LanguageKeys.zh_CN
      ? `${slug}.${LanguageKeys.zh_CN}.mdx`
      : `${slug}.mdx`,
  );
  const source = fs.readFileSync(filePath, "utf-8");

  return <MDXRemote source={source} />;
}
