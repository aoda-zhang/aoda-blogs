import path from "path";
import fs from "fs";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";

import { ItemType, PostItemType } from "@/types";
// U can choose the theme that u prefered
import "highlight.js/styles/stackoverflow-dark.min.css";
import pageKeys from "@/constants/pageKey";
import firstLetterUp from "@/shared/utils/firstLetterUp";

import EmptyContent from "../Empty";

import styles from "./index.module.scss";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};
const getMdxContent = (
  postPath: string,
  fileFolder: string,
  locale: string,
) => {
  const matchedPostPath = locale === "en" ? postPath : `${postPath}.${locale}`;
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${matchedPostPath}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
};
const getCurrentPostOptions = async (postPath: string, fileFolder: string) => {
  let currentPostLists: PostItemType[] = [];

  if (fileFolder === `/${pageKeys.docs}/${pageKeys.blog}`) {
    currentPostLists = (await import("@/docs/blogs/router")).default;
  }
  if (fileFolder === `/${pageKeys.docs}/${pageKeys.tutorial}`) {
    currentPostLists = (await import("@/docs/tutorials/router")).default;
  }
  return currentPostLists?.find(item => item?.postPath === postPath);
};

export default async function MDXContainer(params: ItemType) {
  const { postPath, fileFolder, locale } = params;
  const currentPost = await getCurrentPostOptions(postPath, fileFolder);
  const isContentEmpty = Boolean(getMdxContent(postPath, fileFolder, locale));

  return (
    <div className={styles.MDXContainer}>
      <div className={styles.mdxHeader}>
        <p className={styles.title}>{currentPost?.title}</p>
        <p className={styles.flag}>
          <span className={styles.tags}>
            {currentPost?.tags?.map(item => (
              <span key={item}>{`#${firstLetterUp(item)}`}</span>
            ))}
          </span>
        </p>
        {currentPost?.coverPath && (
          <Image
            className={styles.coverPath}
            src={currentPost?.coverPath}
            alt={""}
            width={600}
            height={600}
          />
        )}
      </div>
      <div className={styles.mdxContent}>
        {isContentEmpty ? (
          <MDXRemote
            source={getMdxContent(postPath, fileFolder, locale)}
            options={options}
          />
        ) : (
          <EmptyContent />
        )}
      </div>
    </div>
  );
}
