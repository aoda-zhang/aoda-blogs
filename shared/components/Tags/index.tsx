import React, { memo } from "react";
import styles from "./index.module.scss";
type Props = {
  tags: string | undefined;
};
const Tags: React.FC<Props> = ({ tags }) => {
  const tagList = tags?.split(",") ?? [];
  return (
    <div className={styles.tags}>
      {tagList?.map((_item, i) => (
        <span key={i}>{`#${_item?.toUpperCase()}`}</span>
      ))}
    </div>
  );
};
export default memo(Tags);
