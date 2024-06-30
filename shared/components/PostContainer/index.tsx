import { ItemType } from "@/app/tutorials/types";
import path from "path";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PostContainer(params: ItemType) {
  const { slug, fileFolder } = params;
  const postsDirectory = path.join(process.cwd(), fileFolder);
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <div>
      <MDXRemote source={source} />
    </div>
  );
}
