import React from "react";
import { useDispatch } from "react-redux";
import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const toggleNav = () => dispatch(ACTION_TOGGLE_NAV());

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>My Job Offers</h2>
      <div className={styles.hamburger} onClick={handleLinkClick}>
        <p>&#9776;</p>
      </div>
    </header>
  );
};

export default Header;
