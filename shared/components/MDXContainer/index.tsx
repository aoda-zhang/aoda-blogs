import path from "path";
import fs from "fs";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

import { ItemType, PostItemType } from "@/types";
// U can choose the theme that u prefered
import "highlight.js/styles/github-dark.min.css";
import pageKeys from "@/constants/pageKey";

import styles from "./index.module.scss";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};
const getMdxContent = (slug: string, fileFolder: string) => {
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
};
const getCurrentPostOptions = async (slug: string, fileFolder: string) => {
  let currentPostLists: PostItemType[] = [];
  if (fileFolder === `/${pageKeys.docs}/${pageKeys.blog}`) {
    currentPostLists = (await import("@/docs/blogs/router")).default;
  }
  if (fileFolder === `/${pageKeys.docs}/${pageKeys.tutorial}`) {
    currentPostLists = (await import("@/docs/tutorials/router")).default;
  }
  return currentPostLists?.find(item => item?.path === slug);
};

export default async function MDXContainer(params: ItemType) {
  const { slug, fileFolder } = params;
  const currentPost = await getCurrentPostOptions(slug, fileFolder);
  return (
    <div className={styles.MDXContainer}>
      <div className={styles.mdxHeader}>
        <p className={styles.title}>{currentPost?.title}</p>
        <p className={styles.flag}>
          <span className={styles.date}>
            <CalendarMonth />
            {currentPost?.date}
          </span>
          <span className={styles.tags}>
            {currentPost?.tags?.map(item => (
              <span key={item}>{`#${item}`}</span>
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
        <MDXRemote source={getMdxContent(slug, fileFolder)} options={options} />
      </div>
    </div>
  );
}
