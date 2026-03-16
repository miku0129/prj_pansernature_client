import {
  aboutUsHeadline,
  aboutUsImg,
  aboutUsText_1,
  aboutUsText_2,
} from "../asset";

export default function AboutUs() {
  return (
    <div
      className="grid grid-rows-[1fr_auto] gap-2 p-5 lg:grid-cols-[1fr_1fr] lg:grid-rows-none"
      id="about-us"
    >
      <div className="flex flex-col justify-center">
        <div className="mb-3 text-4xl">{aboutUsHeadline}</div>
        <p className="text-xl">{aboutUsText_1}</p>
        <p className="text-xl">{aboutUsText_2}</p>
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
}
