import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { getPhotosForGallery } from "../utilities/helper";

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const pulltrigger = async () => {
      const res = await getPhotosForGallery();
      setPhotos(res);
    };
    pulltrigger();
  }, []);

  return (
    <div className="mx-1 mb-1">
      <RowsPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />{" "}
    </div>
  );
}
