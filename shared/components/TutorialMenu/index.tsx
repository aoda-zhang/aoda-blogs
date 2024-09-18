import React, { type FC, memo, useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, Modal } from "@mui/material";

import menuKeys from "@/constants/menuKeys";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";
import TutorialItem from "../TutorialItem";
import tutorialRouters from "@/docs/tutorials/router";
import classNames from "classnames";

const TutorialMenu: FC = () => {
  const locale = globalStore(state => state?.locale);
  const [isPCOpen, setPCOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const MenuIContents = ({ itemClassName = "" }) => {
    return (
      <>
        <div className={styles.headline}>Choose your progress !</div>
        <div className={styles.content}>
          {tutorialRouters?.map((item, i) => (
            <TutorialItem
              onItemClick={() => {
                setPCOpen(false);
                setMobileOpen(false);
              }}
              isShowDesc={false}
              locale={locale}
              className={classNames([styles.menuItem, itemClassName])}
              key={item?.title}
              {...item}
              index={i + 1}
            />
          ))}
        </div>
      </>
    );
  };
  const PCMenu = () => {
    return (
      <Modal
        open={isPCOpen}
        onClose={() => {
          setPCOpen(false);
        }}
        className={styles.pcMenuModal}
      >
        <div className={styles.pcMenuContent}>
          <MenuIContents itemClassName={styles.pcItem} />
        </div>
      </Modal>
    );
  };
  const MobileMenu = () => {
    return (
      <Drawer
        open={isMobileOpen}
        onClose={() => {
          setMobileOpen(false);
        }}
        anchor="bottom"
        className={styles.mobileMenuModal}
      >
        <MenuIContents itemClassName={styles.mobileItem} />
      </Drawer>
    );
  };

  const onToturialAction = () => {
    setPCOpen(true);
    setMobileOpen(true);
  };

  return (
    <>
      <div
        onMouseEnter={onToturialAction}
        onClick={onToturialAction}
        className={styles.tutorialMenu}
      >
        {menuKeys?.[locale]?.fullStackGuide}
        <KeyboardArrowDown />
      </div>
      <PCMenu />
      <MobileMenu />
    </>
  );
};
export default memo(TutorialMenu);
