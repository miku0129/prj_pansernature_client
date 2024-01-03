import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Panser Nature</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="About us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Activity
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Books</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">Articles</Nav.Link>

              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Your profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
