import React from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Head() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className="header" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Router>
            <NavLink to="/features">
              <h6 className="linkText">Features</h6>
            </NavLink>
            <NavLink to="/pricing">
              <h6 className="linkText">Pricing</h6>
            </NavLink>
            <NavLink to="/deets">
              <h6 className="linkText">More deets</h6>
            </NavLink>
          </Router>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Head;
