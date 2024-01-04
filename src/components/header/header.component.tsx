import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CustomLink } from "../../utilities/components.styles";
import "./header.styles.scss";
import { CustomHashLink } from "../../utilities/components.styles";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <CustomLink to={"/"}>
            <Navbar.Brand href="/">Panser Nature</Navbar.Brand>
          </CustomLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#about">
                  <CustomHashLink to="/#about">About us</CustomHashLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/#support">
                  <CustomHashLink to="/#support">Support</CustomHashLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="/#books">
                  <CustomHashLink to="/#books">Books</CustomHashLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>
              <CustomLink to={"/articles"}>
                <Nav.Link href="/articles">Articles</Nav.Link>
              </CustomLink>
              {/* 未ログイン状態の場合は"Sign in"というボタンを表示する */}
              {/* <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Your profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
