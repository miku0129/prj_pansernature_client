import { Link } from "react-router-dom";

import {
  aboutMichelBtnLabel,
  aboutMichelHeadline,
  aboutMichelImg,
  aboutMichelText,
} from "../asset";

export default function AboutMichel() {
  return (
    <div
      className="grid grid-rows-[1fr_auto] gap-2 px-5 lg:grid-cols-[1fr_1fr] lg:grid-rows-none"
      id="about-michel"
    >
      <div className="flex min-w-sm flex-col justify-center">
        <div className="mb-3 text-4xl">{aboutMichelHeadline}</div>
        <p className="text-xl">{aboutMichelText}</p>

        <div>
          <Link to={"/articles"}>
            <p className="text-xl">{aboutMichelBtnLabel}</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img
          className="h-full bg-center object-cover"
          alt="michel's face"
          src={aboutMichelImg}
        />
      </div>
    </div>
  );
}
