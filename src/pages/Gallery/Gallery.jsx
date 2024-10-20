import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
import { animalsArray } from "../../data/animals.js";
import ImageGallery from "react-image-gallery";

export const Gallery = () => {
  return (
    <main className="gallery">
      <div className="container">
        <ImageGallery items={animalsArray} />;
      </div>
    </main>
  );
};
