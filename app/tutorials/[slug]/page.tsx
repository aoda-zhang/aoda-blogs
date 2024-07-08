import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import { PostItemParam } from "@/types";
import getServerMDXContant from "@/shared/utils/getServerMDXContent";

const tutorialPath = `/${pageKeys.docs}/${pageKeys.tutorial}`;

export async function generateStaticParams() {
  return getServerMDXContant(tutorialPath);
}

export default async function PostItemPage(params: PostItemParam) {
  const { slug } = params?.params;
  return <MDXContainer slug={slug} fileFolder={tutorialPath} />;
}
