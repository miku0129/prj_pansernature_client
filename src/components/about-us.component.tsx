import { CustomHeadline, CustomArticle } from "../utilities/components.styles";
import { aboutUsHeadline, aboutUsText, aboutUsImg } from "../asset";

const AboutUs = () => {
  return (
    <div
      className="
      grid 
      p-5
      gap-2
      grid-rows-[1fr_auto] 
      lg:grid-rows-none
      lg:grid-cols-[1fr_1fr]
        "
      id="about"
    >
      <div className="min-w-sm flex flex-col justify-center">
        <CustomHeadline>{aboutUsHeadline}</CustomHeadline>
        <CustomArticle>{aboutUsText}</CustomArticle>
      </div>
      <div className="flex flex-col justify-center">
        <img
          className="h-full bg-center object-cover"
          alt="memebers are woking in the garden"
          src={aboutUsImg}
        />
      </div>
    </div>
  );
};

export default AboutUs;
