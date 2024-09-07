import React, { FC, memo, useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Modal } from "@mui/material";

import menuKeys from "@/constants/menuKeys";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";
import TutorialItem from "../TutorialItem";
import tutorialRouters from "@/docs/tutorials/router";

const TutorialMenu: FC = () => {
  const locale = globalStore(state => state?.locale);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        onMouseEnter={handleOpen}
        onClick={handleOpen}
        className={styles.tutorialTitle}
      >
        {menuKeys?.[locale]?.fullStackGuide}
        <KeyboardArrowDown />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.toturailMenumodal}>
          {tutorialRouters?.map((item, i) => (
            <TutorialItem
              onItemClick={handleClose}
              isShowDesc={false}
              locale={locale}
              className={styles.menuItem}
              key={item?.title}
              {...item}
              index={i + 1}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};
export default memo(TutorialMenu);
