import React, { memo, useMemo } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import globalStore from "@/shared/globalStore";
import { MDFileItemType } from "@/shared/types";
import formatPostDate from "@/shared/utils/formatPostDate";
import Tags from "../Tags";

const LastPostsCard: React.FC<{
  readMoreLink: string;
  title: string;
}> = ({ readMoreLink, title }) => {
  const { setCurrentPost, allPosts } = globalStore();
  const router = useRouter();
  const onReadMore = () => {
    router.push(readMoreLink);
  };
  const onReadPost = (item: MDFileItemType) => {
    setCurrentPost(item);
    router.push({
      pathname: "/MDDetail",
    });
  };
  const latestPost = useMemo(() => {
    return allPosts?.blogs?.[allPosts?.blogs?.length - 1] ?? { content: "" };
  }, [allPosts?.blogs]);
  return (
    <div className={styles.lastPostCard}>
      <div className={styles.item}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span onClick={onReadMore} className={styles.readMore}>
            READ MORE
            <Image
              src="/images/right.svg"
              alt="SVG Image"
              width={50}
              height={20}
              className={styles.icon}
            />
          </span>
        </div>
        <div className={styles.card}>
          {
            <div
              onClick={() => {
                onReadPost(latestPost);
              }}
              className={styles.content}
            >
              <div className={styles.left}>
                {formatPostDate(latestPost?.date)}
              </div>
              <div className={styles.right}>
                <div>
                  <div className={styles.title}>{latestPost?.title}</div>
                  <Tags tags={latestPost?.tags} />
                </div>
                <div className={styles.summary}>{latestPost?.summary}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
export default memo(LastPostsCard);
