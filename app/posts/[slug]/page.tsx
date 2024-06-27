import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PostItemParam } from "../types";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "contents");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map(name => ({
    slug: name.replace(/\.mdx$/, ""),
  }));
}

export default async function PostItemPage(params: PostItemParam) {
  const { slug } = params?.params;
  const postsDirectory = path.join(process.cwd(), "contents");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <div>
      <MDXRemote source={source} />
    </div>
  );
}
