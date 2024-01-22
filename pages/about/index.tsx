import React, { memo } from "react";
import MDDetail from "../MDDetail";
import Layout from "@/shared/components/Layout";
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
              width={400}
              height={340}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAmElEQVR42mP8/wcAAwAB/ADblY6JAAAAABJRU5ErkJggg=="
              className={styles.avatar}
            />
            <div className={styles.info}>
              <div className={styles.title}>{bio?.title}</div>
              <div className={styles.value}>{bio?.info}</div>
            </div>
          </div>
          <MDDetail contents={allPosts?.about?.[0]?.content ?? ""} />
        </Layout>
      }
    </>
  );
};
export default memo(About);
