import React, { memo } from "react";
import styles from "./index.module.scss";
import MDDetail from "../MDDetail";
import LastPostsCard from "@/shared/components/LastPostCard";
import globalStore from "@/shared/globalStore";
import { RoutePath } from "@/shared/types";
const Home: React.FC = () => {
  const { homePost } = globalStore();
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        {homePost && <MDDetail contents={homePost?.content} />}
      </div>
      <div className={styles.contents}>
        {
          <LastPostsCard
            readMoreLink={`/${RoutePath.blogs}`}
            title="LATEST POSTS"
          />
        }
      </div>
    </div>
  );
};
export default memo(Home);
