import React from "react";

import { Nav, NavElement } from "../Style/NavStyle";

const NavBar = ({ moveToPage, active, scrollDir }) => {
  return (
    <Nav scrollDir={scrollDir}>
      <NavElement onClick={() => moveToPage(0)} active={active === 0 && "1"}>
        1
      </NavElement>
      <NavElement onClick={() => moveToPage(1)} active={active === 1 && "1"}>
        2
      </NavElement>
      <NavElement onClick={() => moveToPage(2)} active={active === 2 && "1"}>
        3
      </NavElement>
    </Nav>
  );
};

export default NavBar;
