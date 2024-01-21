import React from "react";
import { MDRenderType } from "@/shared/types";
import Layout from "@/shared/components/Layout";
import styles from "./index.module.scss";
import MDRender from "@/shared/components/MDRender";
import getMDFileContent from "@/shared/utils/getMDContents";
const Blogs: React.FC<MDRenderType> = ({ datas }) => {
  return (
    <Layout>
      <MDRender className={styles.blogs} datas={datas} />
    </Layout>
  );
};
export default Blogs;

export function getStaticProps() {
  return getMDFileContent("contents/blogs");
}
