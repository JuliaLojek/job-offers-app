import React from "react";
// import { useDispatch } from "react-redux";
// import { ACTION_TOGGLE_NAV } from "../../store/modules/actions";
import Nav from "../Nav/Nav";

const Header: React.FC = () => {
  // const dispatch = useDispatch();
  // const toggleNav = () => dispatch(ACTION_TOGGLE_NAV());

  return (
    <header>
      <Nav />
    </header>
  );
};

export default Header;
