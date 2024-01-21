import { memo } from "react";
import { MDFileItemType } from "@/shared/types";
import styles from "./index.module.scss";
const MDCardItem: React.FC<{ source: MDFileItemType }> = ({ source }) => {
  return (
    <>
      {
        <>
          <div className={styles.title}>{source?.title}</div>
          <div className={styles.summary}>{source?.summary}</div>
        </>
      }
    </>
  );
};
export default memo(MDCardItem);
