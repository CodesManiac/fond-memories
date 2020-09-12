import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
          <Navbar.Brand href="#home">
            <h2 className="logo">M<span className="ee">ee</span><span>m</span>o</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">
                <h6 className="linkText">About</h6>
              </Nav.Link>
              <Nav.Link href="#help">
                <h6 className="linkText">Help</h6>
              </Nav.Link>
              <Nav.Link href="#signup">
                <h6 className="linkText">Sign up</h6>
              </Nav.Link>
              <Nav.Link href="#login">
                <h6 className="linkText">Login</h6>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
