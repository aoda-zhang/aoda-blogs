import path from "node:path";
import fs from "node:fs";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";

import type { ItemType, PostItemType } from "@/types";
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
const getMdxContent = (postPath: string, fileFolder: string) => {
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${postPath}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
};
const getCurrentPostOptions = async (postPath: string, fileFolder: string) => {
  let currentPostLists: PostItemType[] = [];

  if (fileFolder === `/${pageKeys.docs}/${pageKeys.blog}`) {
    currentPostLists = (await import("@/docs/blogs/router")).default;
  }
  return currentPostLists?.find(item => item?.postPath === postPath);
};

export default async function MDXContainer(params: ItemType) {
  const { postPath, fileFolder } = params;
  const currentPost = await getCurrentPostOptions(postPath, fileFolder);
  const isContentEmpty = Boolean(getMdxContent(postPath, fileFolder));

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
            source={getMdxContent(postPath, fileFolder)}
            options={options}
          />
        ) : (
          <EmptyContent />
        )}
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.button} type="button">
          {"< Previous Post"}
        </button>
        <button className={styles.button} type="button">
          {"Next Post >"}
        </button>
      </div>
    </div>
  );
}
