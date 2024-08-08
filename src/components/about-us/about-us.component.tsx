import { Fragment } from "react";

import { aboutUs, aboutUsText, aboutUsImg } from "../../asset";
import "./about-us.styles.scss";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="about-us-contentainer" id="about">
        <div className="about-us-card-container">
          <h2 className="about-us-card-title" >{aboutUs}</h2>
          <div className="about-us-card">
            <span>{aboutUsText}</span>
          </div>
        </div>
        <div className="about-us-img-container">
          <img
            className="about-us-img"
            alt="about us visual"
            src={aboutUsImg}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
