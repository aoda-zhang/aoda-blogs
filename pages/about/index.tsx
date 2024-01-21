import React, { memo } from "react";
import MDDetail from "../MDDetail";
import Layout from "@/shared/components/layout";
import globalStore from "@/shared/globalStore";
import styles from "./index.module.scss";
import Image from "next/image";
const About: React.FC = () => {
  const { allPosts, bio } = globalStore();
  return (
    <>
      {
        <Layout>
          <div className={styles.bio}>
            <Image
              src="/images/me.jpg"
              alt="me"
              width={420}
              height={340}
              className={styles.avatar}
            />
            <div className={styles.info}>{bio}</div>
          </div>
          <MDDetail contents={allPosts?.about?.[0]?.content ?? ""} />
        </Layout>
      }
    </>
  );
};
export default memo(About);
