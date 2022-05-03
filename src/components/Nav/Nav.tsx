import React, { FC } from "react";
import styles from "./Nav.module.scss";

type NavProps = {
  children: React.ReactNode;
};

export const Nav: FC<NavProps> = ({ children }) => {
  return (
    <nav className={styles.Nav}>
      <ul className={styles.Nav__items}>{children}</ul>
      <div className={styles.Nav__login}>Login</div>
    </nav>
  );
};
