import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.styles.scss";
import {
  CustomLink,
  CustomHashLink,
} from "../../utilities/components.styles";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <CustomLink className="mr-20" to={"/"}>
            <h2 className="text-green-700 text-4xl">Panser Nature</h2>
          </CustomLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <div className="header-dropdown-menu-container"> */}
              <NavDropdown title="About" id="basic-nav-dropdown">
                <CustomHashLink className="m-1" to="/#about">
                  About us
                </CustomHashLink>
                <CustomHashLink className="m-1" to="/#support">
                  Support
                </CustomHashLink>
                <CustomHashLink className="m-1" to="/#books">
                  Books
                </CustomHashLink>
                <NavDropdown.Divider />
                <CustomLink className="m-1 text-slate-600" to={"/contact"}>
                  Contact
                </CustomLink>
              </NavDropdown>
              {/* </div> */}
              {/* <div className="header-dropdown-menu-container"> */}
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <CustomLink
                  className="m-1 text-slate-600"
                  to={"/articles"}
                  state={{ previewtype: "Agri-jardin" }}
                >
                  Agri jardin
                </CustomLink>
                <CustomLink
                  className="m-1 text-slate-600"
                  to={"/articles"}
                  state={{ previewtype: "Vie-associative" }}
                >
                  Vie associative
                </CustomLink>
                <CustomLink
                  className="m-1 text-slate-600"
                  to={"/articles"}
                  state={{ previewtype: "Désobéissance-civile" }}
                >
                  Désobéissance civile
                </CustomLink>
                <CustomLink
                  className="m-1 text-slate-600"
                  to={"/articles"}
                  state={{ previewtype: "Santé" }}
                >
                  Santé
                </CustomLink>

                <NavDropdown.Divider />
                <CustomLink className="m-1 text-slate-600" to={"/articles/0"}>
                  L'auteur
                </CustomLink>

                <NavDropdown.Divider />
                <CustomLink className="m-1 text-slate-600" to={"/articles"}>
                  All articles
                </CustomLink>
              </NavDropdown>
              {/* </div> */}

              {/* <div className="header-dropdown-menu-container">
                <CustomBtn className="header-button">
                  {" "}
                  <CustomLink
                    className="header-dropdown-menu"
                    to={"/authentication"}
                  >
                    Sign in
                  </CustomLink>
                </CustomBtn> */}

              {/* <CustomBtn className="header-button">
                  <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Your profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Setting
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Sign out
                    </NavDropdown.Item>
                  </NavDropdown>
                </CustomBtn> */}

              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
