import { memo } from "react";
import MDCardItem from "../MDCardItem";
import { MDFileItemType, MDRenderType } from "@/shared/types";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import globalStore from "@/shared/globalStore";
const MDRender: React.FC<MDRenderType & { className?: string }> = ({
  datas,
  className,
}) => {
  const router = useRouter();
  const { setCurrentPost } = globalStore();
  const onClick = (item: MDFileItemType) => {
    setCurrentPost(item);
    router.push({
      pathname: "/MDDetail",
    });
  };
  return (
    <div className={styles.mdRender}>
      {Array.isArray(datas) &&
        datas?.map((item: MDFileItemType, i: number) => {
          return (
            <div
              key={i}
              className={classNames([className, styles.item])}
              onClick={() => {
                onClick(item);
              }}
            >
              <MDCardItem source={item} />
            </div>
          );
        })}
    </div>
  );
};
export default memo(MDRender);
