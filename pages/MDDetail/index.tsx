import React, { memo, useEffect } from "react";
import styles from "./index.module.scss";
import "highlight.js/styles/github-dark.min.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import globalStore from "@/shared/globalStore";
import Layout from "@/shared/components/layout";
import classNames from "classnames";
import formatPostDate from "@/shared/utils/formatPostDate";
const MDDetail: React.FC<{ contents: string; className?: string }> = ({
  contents = "",
  className,
}) => {
  const { currentPost } = globalStore();
  useEffect(() => {
    hljs.registerLanguage("tsx", typescript);
    hljs.highlightAll();
  }, [contents]);
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
    <>
      {contents ? (
        <div
          className={styles.contents}
          dangerouslySetInnerHTML={{ __html: contents }}
        ></div>
      ) : (
        <Layout>
          <div className={classNames([className, styles.title])}>
            {currentPost?.title}
          </div>
          <div className={styles.header}>
            <span className={styles.date}>{`Created: ${formatPostDate(
              currentPost?.date,
            )}`}</span>
            {renderTags(currentPost?.tags ?? "")}
          </div>

          <div
            className={styles.contents}
            dangerouslySetInnerHTML={{ __html: currentPost?.content }}
          ></div>
        </Layout>
      )}
    </>
  );
};
export default memo(MDDetail);
