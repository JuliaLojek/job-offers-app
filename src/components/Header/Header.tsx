import React from "react";
import { useDispatch } from "react-redux";
import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";
import hamburgerIcon from "../../img/icons8-menu-100.png";

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
        <img src={hamburgerIcon} alt="menu icon" className={styles.menuIcon} />
      </div>
    </header>
  );
};

export default Header;

// hamburger symbol: &#9776;
