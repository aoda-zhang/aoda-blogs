import fs from "fs";
import path from "path";
const getServerMDXContant = (postPath: string) => {
  const postsDirectory = path.join(process.cwd(), postPath);
  const filenames = fs.readdirSync(postsDirectory);
  // Only read mdx files
  const mdxFiles = filenames.filter(name => name.endsWith(".mdx"));
  return mdxFiles?.map(name => ({
    postPath: name.replace(/\.mdx$/, ""),
  }));
};
export default getServerMDXContant;
