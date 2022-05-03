import React, { FC } from "react";
import styles from "./NavItem.module.scss";

type NavItemProps = {
  name: string;
  to: string;
};

export const NavItem: FC<NavItemProps> = ({ name, to }) => {
  return (
    <li
      onClick={() => {
        console.log(`Go to ${to}`);
      }}
      className={styles.NavItem}
    >
      {name}
    </li>
  );
};
