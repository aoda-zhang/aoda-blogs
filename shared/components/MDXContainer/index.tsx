import path from "path";
import fs from "fs";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import { ItemType } from "@/types";

// U can choose the theme that u prefered
import "highlight.js/styles/github-dark.min.css";
import styles from "./index.module.scss";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function MDXContainer(params: ItemType) {
  const { slug, fileFolder } = params;
  // const aa = "@/docs/blogs/router";
  // const routers = await import(`${aa}`);
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  return (
    <div className={styles.MDXContainer}>
      <MDXRemote source={source} options={options} />
    </div>
  );
}
