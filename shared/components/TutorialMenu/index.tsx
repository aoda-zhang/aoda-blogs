"use client";
import React, { FC, memo, useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Drawer, Modal } from "@mui/material";

import menuKeys from "@/constants/menuKeys";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";
import TutorialItem from "../TutorialItem";
import tutorialRouters from "@/docs/tutorials/router";
import useIsMobile from "@/shared/hooks/useIsMobile";
import classNames from "classnames";

const TutorialMenu: FC = () => {
  const locale = globalStore(state => state?.locale);
  const isMobile = useIsMobile();
  const [isPCOpen, setPCOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const MenuIContents = ({ itemClassName = "" }) => {
    return (
      <>
        <div className={styles.headline}>Pick up your process !</div>
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
      !isMobile && (
        <Modal
          open={isPCOpen}
          onClose={() => {
            setPCOpen(false);
          }}
        >
          <div className={styles.pcMenuModal}>
            <MenuIContents itemClassName={styles.pcItem} />
          </div>
        </Modal>
      )
    );
  };
  const MobileMenu = () => {
    return (
      isMobile && (
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
      )
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
