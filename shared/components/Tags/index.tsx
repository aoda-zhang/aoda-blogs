import React, { memo } from "react";
import styles from "./index.module.scss";
type Props = {
  tags: string | undefined;
};
const Tags: React.FC<Props> = ({ tags }) => {
  const tagList =
    tags
      ?.split(",")
      ?.map(item => `${item?.charAt(0)?.toUpperCase()}${item?.slice(1)}`) ?? [];
  return (
    <div className={styles.tags}>
      {tagList?.map((_item, i) => (
        <span key={i} className={styles.value}>{`#${_item}`}</span>
      ))}
    </div>
  );
};
export default memo(Tags);
