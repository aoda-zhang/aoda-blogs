import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, memo } from "react";
import Link from "next/link";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import menuKeys from "@/constants/menuKeys";
import pageKeys from "@/constants/pageKey";
import globalStore from "@/store/globalStore";

import TutorialItem from "../TutorialItem";
import tutorialRouters from "../../../docs/tutorials/router";

import styles from "./index.module.scss";

const TutorialMenu: FC = () => {
  const { locale } = globalStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const expandMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onMouseEnter={expandMenu} className={styles.title}>
        {menuKeys?.[locale]?.fullStackGuide}
        <KeyboardArrowDown />
      </div>
      <Menu
        anchorEl={anchorEl}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
      >
        {tutorialRouters?.[locale]?.map(item => (
          <MenuItem onClick={handleClose} key={item?.title}>
            <Link href={`/${pageKeys.tutorial}/${item?.postPath}`}>
              <TutorialItem {...item} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default memo(TutorialMenu);
