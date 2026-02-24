import { use } from "react";
import { Carousel } from "react-bootstrap";
import { aboutUsHeadline, aboutUsText_1, aboutUsText_2 } from "../asset";
import { getStoredPicturesPromise } from "../utilities/firebase/firebase.utils";

export default function AboutUs() {
  const pictures = use(getStoredPicturesPromise);

  return (
    <div
      className="grid grid-rows-[1fr_auto] gap-2 p-5 lg:grid-cols-[1fr_1fr] lg:grid-rows-none"
      id="about-us"
    >
      <div className="flex min-w-sm flex-col justify-center">
        <div className="mb-3 text-4xl">{aboutUsHeadline}</div>
        <p className="text-xl">{aboutUsText_1}</p>
        <p className="text-xl">{aboutUsText_2}</p>
      </div>
      <div className="flex flex-col justify-center">
        <Carousel
          fade
          interval={null} // stop auto-play
          className="bg-main"
        >
          {pictures.map((picture) => (
            <Carousel.Item
              className="h-80 w-full md:h-[700px]"
              key={picture.pictureUrl}
            >
              <img
                src={picture.pictureUrl}
                className="h-full w-full object-cover object-center"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
