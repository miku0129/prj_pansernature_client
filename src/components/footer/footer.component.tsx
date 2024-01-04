import { Fragment } from "react";

import { ContentLayout } from "../../utilities/components.styles";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer" id="footer">
        <div className="viewport-container">
          <div className="footer__content">
            <section className="first-column">
              <ContentLayout>
                <h2>Panser Nature</h2>
                <ul>
                  <li>
                    <span className="address">Address of Panser Nature</span>
                  </li>
                </ul>
              </ContentLayout>
            </section>
          </div>
          <div className="footer-logo-container">
            <ContentLayout>
              <p className="footer-logo">Facebook logo</p>
            </ContentLayout>
          </div>
        </div>
        <div className="footer__disclaimer">
          <div className="viewport-container">
            <ContentLayout>
              <p>© 2023, Panser Nature</p>
            </ContentLayout>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
