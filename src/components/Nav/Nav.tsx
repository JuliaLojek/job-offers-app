import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateModel } from "../../store/modules/models";
import { selectIsNavOpen } from "../../store/modules/selectors";
import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const toggleNav = () => dispatch(ACTION_TOGGLE_NAV());
  const isNavOpen = useSelector((state: StateModel) => selectIsNavOpen(state));
  
  const handleLinkClick = () => {
    toggleNav();
  }

  return (
    <nav className={isNavOpen ? "nav navOpen" : "nav"}>
      <Link to="/" onClick={handleLinkClick}>all offers</Link>
      <Link to="/requirements" onClick={handleLinkClick}>top requirements</Link>
      <Link to="/cities" onClick={handleLinkClick}>top cities</Link>
    </nav>
  )
}

export default Nav;