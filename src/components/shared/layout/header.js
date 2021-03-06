/* eslint-disable */
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import router from "../../../scripts/shared/router";
import Searchbar from "../searchbar";

const Nav = styled.nav`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const Initials = styled(Link)`
  font-family: "Bungee", cursive;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: hsl(204, 86%, 53%) !important;
  }
`;

const Toggle = styled.input`
  &#nav-toggle-state {
    display: none;
  }

  &#nav-toggle-state:checked ~ .navbar-menu {
    display: block;
  }
`;

const NavLink = styled(Link)`
  @media screen and (min-width: 769px) {
    &:hover {
      border-bottom: solid 5px hsl(204, 86%, 53%);
    }
  }
`;

const NavDropdown = styled.div`
  &:hover {
    &::after {
      background-color: hsl(204, 86%, 53%) !important;
    }
  }
`;

const ProductLink = styled(Link)`
  &:hover {
    border-left: solid 5px hsl(204, 86%, 53%);
    color: hsl(204, 86%, 53%) !important;
  }
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: hsl(204, 86%, 53%) !important;
  }
`

export default () => {
  return (
    <Nav
      className="navbar is-fixed-top is-transparent is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Initials className="navbar-item" to="/">
            UN
          </Initials>

          <label
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            htmlFor="nav-toggle-state"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </label>
        </div>
        <Toggle type="checkbox" id="nav-toggle-state" />

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/posts">
              Library
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable" href="/">
              <NavDropdown className="navbar-link">Docs</NavDropdown>
              <div className="navbar-dropdown">
                <ProductLink
                  to={router.getProductSlug("remapt")}
                  className="navbar-item"
                >
                  Remapt
                </ProductLink>
                <ProductLink
                  to={router.getProductSlug("prefixed")}
                  className="navbar-item"
                >
                  Prefixed
                </ProductLink>
                <ProductLink
                  to={router.getProductSlug("cursory")}
                  className="navbar-item"
                >
                  Cursory
                </ProductLink>
              </div>
            </div>
            <NavLink className="navbar-item" to="/spectacle">
              Spectacle
            </NavLink>
            <NavLink className="navbar-item" to="/about">
              About
            </NavLink>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/unrealisticdev" target="_blank" rel="noopener noreferrer">
              <GitHubIcon icon={faGithub} size="lg" className="is-hidden-mobile"/>
              <span className="is-hidden-desktop">GitHub</span>
            </a>
            <div className="navbar-item">
              <Searchbar index="Articles" />
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};
