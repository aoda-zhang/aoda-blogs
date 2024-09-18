import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import type { PostItemParam } from "@/types";
import getServerMDXContant from "@/shared/utils/getServerMDXContent";

const tutorialPath = `/${pageKeys.docs}/${pageKeys.tutorial}`;

export async function generateStaticParams() {
  return getServerMDXContant(tutorialPath);
}

export default function PostItemPage(params: PostItemParam) {
  const [locale, postPath] = params?.params?.slug ?? {};
  return (
    <MDXContainer
      locale={locale}
      postPath={postPath}
      fileFolder={tutorialPath}
    />
  );
}
