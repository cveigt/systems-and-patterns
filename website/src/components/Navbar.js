import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  width: 80%;
  height: 10vh;
  margin: auto;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 500;
  font-size: 1.3rem;
  text-decoration: none;
  flex: 1;
`;
const Nav = styled.nav``;
const NavLink = styled(Link)`
  padding: 8px;
  margin: 0 16px;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Header>
      <Logo>christian veigt</Logo>
      <Nav>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Contact</NavLink>
      </Nav>
    </Header>
  );
};

export default Navbar;
