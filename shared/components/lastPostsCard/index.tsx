import React, { memo } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import globalStore from "@/shared/globalStore";
import { MDFileItemType } from "@/shared/types";
import formatPostDate from "@/shared/utils/formatPostDate";

const LastPostsCard: React.FC<{
  readMoreLink: string;
  title: string;
}> = ({ readMoreLink, title }) => {
  const { latestPosts, setCurrentPost } = globalStore();
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
  const renderTags = (tag: string) => {
    const tagList = tag?.split(",");
    return (
      <div className={styles.tags}>
        {tagList?.map((_item, i) => (
          <span key={i}>{_item?.toUpperCase()}</span>
        ))}
      </div>
    );
  };
  return (
    <div className={styles.LastPostsCard}>
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
          {latestPosts &&
            latestPosts?.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  onReadPost(item);
                }}
                className={styles.content}
              >
                <div className={styles.left}>{formatPostDate(item?.date)}</div>
                <div className={styles.right}>
                  <div>
                    <div className={styles.title}>{item?.title}</div>
                    {renderTags(item?.tags ?? "")}
                  </div>
                  <div className={styles.summary}>{item?.summary}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default memo(LastPostsCard);
