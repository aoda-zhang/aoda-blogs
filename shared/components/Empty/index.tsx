import Image from "next/image";

import empty from "@/public/images/empty.svg";

import styles from "./index.module.scss";

const EmptyContent = () => {
  return (
    <div className={styles.empty}>
      <Image src={empty} alt={""} />
      <div>Calm down,this post is writing , please look back later!</div>
    </div>
  );
};
export default EmptyContent;
