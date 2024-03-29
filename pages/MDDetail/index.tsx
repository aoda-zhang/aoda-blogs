import React, { memo, useEffect } from "react";
import styles from "./index.module.scss";
import "highlight.js/styles/github-dark.min.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import globalStore from "@/shared/globalStore";
import classNames from "classnames";
import formatPostDate from "@/shared/utils/formatPostDate";
import Tags from "@/shared/components/Tags";
const MDDetail: React.FC<{
  contents: string | undefined;
  className?: string;
}> = ({ contents = "", className }) => {
  const { currentPost } = globalStore();
  useEffect(() => {
    hljs.registerLanguage("tsx", typescript);
    hljs.highlightAll();
  }, [contents]);
  return (
    <>
      {contents ? (
        <div
          className={styles.contents}
          dangerouslySetInnerHTML={{ __html: contents ?? "" }}
        ></div>
      ) : (
        <>
          <div className={classNames([className, styles.title])}>
            {currentPost?.title}
          </div>
          <div className={styles.header}>
            <span className={styles.date}>{`Created: ${formatPostDate(
              currentPost?.date,
            )}`}</span>
            <Tags tags={currentPost?.tags} />
          </div>

          <div
            className={styles.contents}
            dangerouslySetInnerHTML={{ __html: currentPost?.content ?? "" }}
          ></div>
        </>
      )}
    </>
  );
};
export default memo(MDDetail);
