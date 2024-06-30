import fs from "fs";
import path from "path";
import { PostItemParam } from "../types";
import pageKeys from "@/constants/pageKey";
import PostContainer from "@/shared/components/PostContainer";

const tutorialPath = `/app/${pageKeys.tutorial}/${pageKeys.docs}`;

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), tutorialPath);
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map(name => ({
    slug: name.replace(/\.mdx$/, ""),
  }));
}

export default async function PostItemPage(params: PostItemParam) {
  const { slug } = params?.params;
  return <PostContainer slug={slug} fileFolder={tutorialPath} />;
}
