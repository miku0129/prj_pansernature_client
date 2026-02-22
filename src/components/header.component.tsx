import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  aboutMichelHeadline,
  aboutUsHeadline,
  desInfosHeadline,
  entryHelloAssoHeadline,
  orgName,
} from "../asset";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="mr-20 no-underline" to={"/"}>
          <div className="text-4xl text-main">{orgName}</div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <div className="flex flex-col p-2">
                <HashLink className="m-1 no-underline" to="/#about-us">
                  <span className="text-slate-600">{aboutUsHeadline}</span>
                </HashLink>
                <HashLink className="m-1 no-underline" to="/#about-michel">
                  <span className="text-slate-600">{aboutMichelHeadline}</span>
                </HashLink>
                <HashLink className="m-1 no-underline" to="/#infos">
                  <span className="text-slate-600">{desInfosHeadline}</span>
                </HashLink>
                <HashLink className="m-1 no-underline" to="/#entry-helloasso">
                  <span className="text-slate-600">
                    {entryHelloAssoHeadline}
                  </span>
                </HashLink>
                <NavDropdown.Divider />
                <Link className="m-1 no-underline" to={"/contact"}>
                  <span className="text-slate-600">Contact</span>
                </Link>
              </div>
            </NavDropdown>

            <NavDropdown title="Articles" id="basic-nav-dropdown">
              <div className="flex flex-col p-2">
                <Link className="m-1 no-underline" to={"/articles/0"}>
                  <span className="text-slate-600">L'auteur</span>
                </Link>
                <NavDropdown.Divider />
                <Link className="m-1 no-underline" to={"/articles"}>
                  <span className="text-slate-600">Tous les articles</span>
                </Link>
                <NavDropdown.Divider />

                <Link
                  className="m-1 no-underline"
                  to={"/articles"}
                  state={{ previewtype: "Agri-jardin" }}
                >
                  <span className="text-slate-600">Agri jardin</span>
                </Link>
                <Link
                  className="m-1 no-underline"
                  to={"/articles"}
                  state={{ previewtype: "Vie-associative" }}
                >
                  <span className="text-slate-600">Vie associative</span>
                </Link>
                <Link
                  className="m-1 no-underline"
                  to={"/articles"}
                  state={{ previewtype: "Désobéissance-civile" }}
                >
                  <span className="text-slate-600">Désobéissance civile</span>
                </Link>
                <Link
                  className="m-1 no-underline"
                  to={"/articles"}
                  state={{ previewtype: "Santé" }}
                >
                  <span className="text-slate-600">Santé</span>
                </Link>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
