import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div``;
const NavbarWrap = styled.div``;
const Logo = styled.div``;
const Nav = styled.nav``;
const NavLink = styled(Link)``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo></Logo>
        <Nav>
          <NavLink to="/">Work</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Contact</NavLink>
        </Nav>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
