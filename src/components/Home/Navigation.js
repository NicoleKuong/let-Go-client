import React, { Component } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_no_text from "../../assets/logo_no_text.png";
import "./Home.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        {/* <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="info"> */}
        <Navbar
          className="nav-bar"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo_no_text}
              width="60"
              height="45"
              className="d-inline-block align-top"
              alt="letGO logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/signup">
                SIGN UP
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                LOG IN
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/items">
                MAKE AN OFFER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}