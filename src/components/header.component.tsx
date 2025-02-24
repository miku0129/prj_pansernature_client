import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  CustomHeadline,
  CustomLink,
  CustomHashLink,
} from "../utilities/components.styles";
import {
  aboutUsHeadline,
  aboutMichelHeadline,
  desInfosHeadline,
  entryPayassoHeadline,
  orgName,
} from "../asset";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <CustomLink className="mr-20" to={"/"}>
          <CustomHeadline>{orgName}</CustomHeadline>
        </CustomLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <div className="flex flex-col p-2">
                <CustomHashLink className="m-1" to="/#about-us">
                  <span className="text-slate-600">{aboutUsHeadline}</span>
                </CustomHashLink>
                <CustomHashLink className="m-1" to="/#about-michel">
                  <span className="text-slate-600">{aboutMichelHeadline}</span>
                </CustomHashLink>
                <CustomHashLink className="m-1" to="/#infos">
                  <span className="text-slate-600">{desInfosHeadline}</span>
                </CustomHashLink>
                <CustomHashLink className="m-1" to="/#entry-payasso">
                  <span className="text-slate-600">{entryPayassoHeadline}</span>
                </CustomHashLink>
                <NavDropdown.Divider />
                <CustomLink className="m-1 text-slate-600" to={"/contact"}>
                  Contact
                </CustomLink>
              </div>
            </NavDropdown>

            <NavDropdown title="Articles" id="basic-nav-dropdown">
              <div className="flex flex-col p-2">
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
                <CustomLink className="m-1 text-slate-600" to={"/articles"}>
                  Tous les articles
                </CustomLink>
                <NavDropdown.Divider />
                <CustomLink className="m-1 text-slate-600" to={"/articles/0"}>
                  L'auteur
                </CustomLink>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
