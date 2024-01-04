import { Fragment } from "react";

import { aboutUsText } from "../../asset";
import "./about-us.styles.scss";

const AboutUs = () => {
  return (
    <Fragment>
        <div className="about-us-contentainer">
          <div className="about-us-card-container">
            <h2 className="about-us-card-title">About us...</h2>
            <div className="about-us-card">
              <span>
                {aboutUsText}
              </span>
            </div>
          </div>
          <div className="about-us-img-container">
              <img
                className="about-us-img"
                src="https://i.ibb.co/WDRL90W/pansenature-4.jpg"
              />
          </div>
        </div>
    </Fragment>
  );
};

export default AboutUs;
