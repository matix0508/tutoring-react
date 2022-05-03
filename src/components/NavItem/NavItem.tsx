import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavItem.module.scss";

type NavItemProps = {
  name: string;
  to: string;
};

export const NavItem: FC<NavItemProps> = ({ name, to }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(to);
      }}
      className={styles.NavItem}
    >
      {name}
    </li>
  );
};
