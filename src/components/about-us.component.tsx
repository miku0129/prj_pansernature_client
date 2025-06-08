import { Button } from "@msano/prj_msano_lib";
import {
  CustomHeadline,
  CustomArticle,
} from "../utilities/components.styles";
import {
  aboutUsHeadline,
  aboutUsText_1,
  aboutUsText_2,
  aboutUsImg,
  savoirPlusBtnLavel,
  helloAssoLink,
} from "../asset";

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
      id="about-us"
    >
      <div className="min-w-sm flex flex-col justify-center">
        <CustomHeadline>{aboutUsHeadline}</CustomHeadline>
        <CustomArticle>{aboutUsText_1}</CustomArticle>
        <CustomArticle>{aboutUsText_2}</CustomArticle>
        <div>
          <a target="_blank" rel="noreferrer" href={helloAssoLink}>
            <Button variant="secondary" size="md" className="mt-2 mb-2">
              {savoirPlusBtnLavel}
            </Button>
          </a>
        </div>
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
