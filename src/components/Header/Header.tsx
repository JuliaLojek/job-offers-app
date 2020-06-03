import React from "react";
import { useDispatch } from "react-redux";
import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const toggleNav = () => dispatch(ACTION_TOGGLE_NAV());

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.hamburger} onClick={handleLinkClick}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
