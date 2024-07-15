import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import { PostItemParam } from "@/types";
import getServerMDXContant from "@/shared/utils/getServerMDXContent";

const blogPath = `/${pageKeys.docs}/${pageKeys.blog}`;

export async function generateStaticParams() {
  return getServerMDXContant(blogPath);
}

export default function PostItemPage(params: PostItemParam) {
  const [locale,postPath] = params?.params?.slug
  return <MDXContainer postPath={postPath} locale={locale} fileFolder={blogPath}  />;
}
