import { Button } from "@msano/prj_msano_lib";
import {
  aboutUsHeadline,
  aboutUsImg,
  aboutUsText_1,
  aboutUsText_2,
  helloAssoLink,
  savoirPlusBtnLavel,
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
        <div className="text-4xl">{aboutUsHeadline}</div>
        <div className="text-xl">{aboutUsText_1}</div>
        <div className="text-xl">{aboutUsText_2}</div>
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
