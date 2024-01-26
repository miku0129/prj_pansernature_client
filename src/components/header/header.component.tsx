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
            <h2 className="header-title">Panser Nature</h2>
          </CustomLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <CustomHashLink to="/#about">About us</CustomHashLink>
                <CustomHashLink to="/#support">Support</CustomHashLink>
                <CustomHashLink to="/#books">Books</CustomHashLink>
                <NavDropdown.Divider />
                <CustomHashLink to="/#contact">Contact</CustomHashLink>
              </NavDropdown>
              <div className="header-articles-container">
                <NavDropdown title="Articles" id="basic-nav-dropdown">
                  <CustomLink
                    className="header-articles"
                    to={"/articles"}
                    state={{ previewtype: "Agri-jardin" }}
                  >
                    Agri jardin
                  </CustomLink>
                  <CustomLink
                    className="header-articles"
                    to={"/articles"}
                    state={{ previewtype: "Vie-associative" }}
                  >
                    Vie associative
                  </CustomLink>
                  <CustomLink
                    className="header-articles"
                    to={"/articles"}
                    state={{ previewtype: "Désobéissance-civile" }}
                  >
                    Désobéissance civile
                  </CustomLink>

                  <NavDropdown.Divider />
                  <CustomLink className="header-articles" to={"/articles"}>
                    All articles
                  </CustomLink>
                </NavDropdown>
              </div>

              {/* <CustomLink to={"/articles"}>
                <Nav.Link href="/articles">Articles</Nav.Link>
              </CustomLink> */}

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
