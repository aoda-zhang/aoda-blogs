import React, { memo } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import globalStore from "@/shared/globalStore";
const Menu: React.FC = () => {
  const router = useRouter();
  const { menuOptions } = globalStore();
  const onClickMenu = (path: string) => {
    router.push({
      pathname: path,
    });
  };
  return (
    <div className={styles.menu}>
      <Image
        src="/images/cat.png"
        alt="My Image"
        width={30}
        height={30}
        onClick={() => {
          router.push({
            pathname: "/",
          });
        }}
      />
      <div className={styles.paths}>
        {menuOptions?.map((item, i) => (
          <span
            className={styles.item}
            key={i}
            onClick={() => {
              onClickMenu(item?.path);
            }}
          >
            {item?.label}
          </span>
        ))}
      </div>
    </div>
  );
};
export default memo(Menu);
