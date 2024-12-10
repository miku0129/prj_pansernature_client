import { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  aboutMichelHeadline,
  aboutMichelText,
  aboutMichelImg,
  aboutMichelBtnLabel,
} from "../../asset";
import "./about-michel.styles.scss";

import { CustomBtn, CustomLink } from "../../utilities/components.styles";

const AboutMichel = () => {
  return (
    <Fragment>
      <div className="about-us-contentainer" id="about">
        <div className="about-us-card-container">
          <h2 className="about-us-card-title">{aboutMichelHeadline}</h2>
          <div className="about-us-card">
            <span>{aboutMichelText}</span>
          </div>
          <Link to={"/articles"}>
            <CustomBtn className="about-michel-articles">{aboutMichelBtnLabel}</CustomBtn>
          </Link>
        </div>
        <div className="about-us-img-container">
          <img
            className="about-us-img"
            alt="about us visual"
            src={aboutMichelImg}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMichel;
