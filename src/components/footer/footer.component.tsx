import { Fragment } from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer" id="footer">
        <div className="viewport-container">
          <div className="footer__content">
            <section className="first-column">
              <h2>Panser Nature</h2>
              <ul>
                <li>
                  <span className="address">Address of Panser Nature</span>
                </li>
              </ul>
            </section>
          </div>
          <div className="footer-logo-container"><p className="footer-logo">Facebook logo</p></div>
        </div>
        <div className="footer__disclaimer">
          <div className="viewport-container">
            <p>© 2023, Panser Nature</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
