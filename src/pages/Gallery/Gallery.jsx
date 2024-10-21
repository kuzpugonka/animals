import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import { animalsArray } from "../../data/animals.js";

export const Gallery = () => {
  return (
    <main className="gallery">
      <div className="container">
        <ImageGallery items={animalsArray} />;
      </div>
    </main>
  );
};
