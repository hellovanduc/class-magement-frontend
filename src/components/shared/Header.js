import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Class Management
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link exact as={NavLink} to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/class" activeClassName="active">
            Class
          </Nav.Link>
          <NavDropdown
            title="Account"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item as={NavLink} to="/account/update" activeClassName="active">
              Update account
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/account/logout" activeClassName="active">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
