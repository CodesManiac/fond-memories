import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { withRouter, NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="/">
            <h2 className="logo">
              M<span className="ee">ee</span>
              <span>m</span>o
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <NavLink to="/about" className="linkText" activeClassName="active">
              About
            </NavLink>
            <NavLink
              exact
              to="/help"
              className="linkText"
              activeClassName="active"
            >
              Help
            </NavLink>
            <NavLink
              to="/form/sign-up"
              className="linkText"
              activeClassName="active"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/form/sign-in"
              className="linkText"
              activeClassName="active"
            >
              Sign in
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header);
