import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import { PostItemParam } from "@/types";
import getServerMDXContant from "@/shared/utils/getServerMDXContent";

const tutorialPath = `/${pageKeys.docs}/${pageKeys.tutorial}`;

export async function generateStaticParams() {
  return getServerMDXContant(tutorialPath);
}

export default async function PostItemPage(params: PostItemParam) {
  const [locale,postPath] = params?.params?.slug
  console.log('locale,postPathlocale,postPath',locale,postPath);
  
  return <MDXContainer  locale={locale} postPath={postPath} fileFolder={tutorialPath} />;
}
