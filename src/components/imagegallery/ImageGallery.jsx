import React, { useState } from "react";
import SingleImage from "./SingleImage";
import place11 from "../../assets/images/places_image_gallery/place11.jpg";
import place12 from "../../assets/images/places_image_gallery/place12.jpg";
import place13 from "../../assets/images/places_image_gallery/place13.jpg";
import place14 from "../../assets/images/places_image_gallery/place14.jpg";
import place15 from "../../assets/images/places_image_gallery/place15.jpg";
import place16 from "../../assets/images/places_image_gallery/place16.jpg";
import place17 from "../../assets/images/places_image_gallery/place17.jpg";
import place18 from "../../assets/images/places_image_gallery/place18.jpg";

function ImageGallery() {
  const Place_Data = [
    {
      Src: place11,
    },
    {
      Src: place12,
    },
    {
      Src: place13,
    },
    {
      Src: place14,
    },
    {
      Src: place15,
    },
    {
      Src: place16,
    },
    {
      Src: place17,
    },
    {
      Src: place18,
    },
  ];
  return (
    <div className="gallery-container">
      <div className="image-scroll-box">
        {Place_Data &&
          Place_Data.map((i) => (
            <SingleImage
              Src={i.Src}
            />
          ))}
      </div>
      {/* {isShown && (
        <div>
          <LargeImage />
        </div>
      )} */}
    </div>
  );
}

export default ImageGallery;
