import fs from "fs";
import path from "path";

import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import { PostItemParam } from "@/types";

const blogPath = `/${pageKeys.docs}/${pageKeys.blog}`;

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), blogPath);
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map(name => ({
    slug: name.replace(/\.mdx$/, ""),
  }));
}

export default async function PostItemPage(params: PostItemParam) {
  const { slug } = params?.params;
  return <MDXContainer slug={slug} fileFolder={blogPath} />;
}
