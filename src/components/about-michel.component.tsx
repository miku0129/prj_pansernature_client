import { Link } from "react-router-dom";

import {
  aboutMichelHeadline,
  aboutMichelText,
  aboutMichelImg,
  aboutMichelBtnLabel,
} from "../asset";

import {
  CustomHeadline,
  CustomArticle,
  CustomBtn,
} from "../utilities/components.styles";

const AboutMichel = () => {
  return (
    <div
      className="
          grid 
          px-5
          gap-2
          grid-rows-[1fr_1fr] 
          lg:grid-rows-none
          lg:grid-cols-[1fr_1fr]
            "
      id="about"
    >
      <div className="min-w-sm flex flex-col justify-center">
        <CustomHeadline>{aboutMichelHeadline}</CustomHeadline>
        <CustomArticle>{aboutMichelText}</CustomArticle>
        <div className="h-3" />
        <Link to={"/articles"}>
          <CustomBtn className="about-michel-articles">
            {aboutMichelBtnLabel}
          </CustomBtn>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <img
          className="w-full max-h-96 bg-cover object-cover"
          alt="michel's face"
          src={aboutMichelImg}
        />
      </div>
    </div>
  );
};

export default AboutMichel;
