import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar_list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar_list {
    display: flex;
    gap: 22px;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
    text-decoration: none;
  }
  .navbar-link {
    text-decoration: none;
  }
`;

export default Navbar;
