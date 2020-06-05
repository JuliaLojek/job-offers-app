import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateModel } from "../../store/modules/models";
import { selectIsNavOpen } from "../../store/modules/selectors";
import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const toggleNav = () => dispatch(ACTION_TOGGLE_NAV());
  const isNavOpen = useSelector((state: StateModel) => selectIsNavOpen(state));

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <nav className={isNavOpen ? styles.nav + " " + styles.navOpen : styles.nav}>
      <Link to="/" className={styles.link} onClick={handleLinkClick}>
        ALL OFFERS
      </Link>
      <Link to="/addoffer" className={styles.link} onClick={handleLinkClick}>
        ADD NEW OFFER
      </Link>
      <Link
        to="/requirements"
        className={styles.link}
        onClick={handleLinkClick}
      >
        TOP REQUIREMENTS
      </Link>
      <Link to="/cities" className={styles.link} onClick={handleLinkClick}>
        TOP CITIES
      </Link>
    </nav>
  );
};

export default Nav;
