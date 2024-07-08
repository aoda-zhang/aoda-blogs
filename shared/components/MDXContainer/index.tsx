import path from "path";
import fs from "fs";

import { ItemType } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
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
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  return (
    <div className={styles.MDXContainer}>
      <MDXRemote source={source} options={options} />
    </div>
  );
}
