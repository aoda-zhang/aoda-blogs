import React from "react";
import { MDRenderType } from "@/shared/types";
import Layout from "@/shared/components/layout";
import styles from "./index.module.scss";
import MDRender from "@/shared/components/MDRender";
import getMDFileContent from "@/shared/utils/getMDContents";
import Image from "next/image";
import globalStore from "@/shared/globalStore";
const FrontEnd: React.FC<MDRenderType> = ({ datas }) => {
  const { frontEndOption } = globalStore();
  return (
    <Layout>
      <div className={styles.frontend}>
        <Image
          src="/images/frontend.png"
          alt="SVG Image"
          width={50}
          height={50}
          className={styles.icon}
          layout="responsive"
        />
        <div className={styles.summary}>{frontEndOption}</div>
      </div>
      <MDRender datas={datas} />
    </Layout>
  );
};
export default FrontEnd;

export function getStaticProps() {
  return getMDFileContent("contents/frontEnd");
}
