import React, { useState, useEffect} from "react";
// import axois from "axios";
import SingleImage from "./SingleImage";
import place11 from "../../../../assets/images/places_image_gallery/place11.jpg";
import place12 from "../../../../assets/images/places_image_gallery/place12.jpg";
import place13 from "../../../../assets/images/places_image_gallery/place13.jpg";
import place14 from "../../../../assets/images/places_image_gallery/place14.jpg";
import place15 from "../../../../assets/images/places_image_gallery/place15.jpg";
import place16 from "../../../../assets/images/places_image_gallery/place16.jpg";
import place17 from "../../../../assets/images/places_image_gallery/place17.jpg";
import place18 from "../../../../assets/images/places_image_gallery/place18.jpg";
import { Col } from "react-bootstrap";
// const base_url = process.env.REACT_APP_BASE_URL;

// const [details, setDetails] = useState([]);
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
  // useEffect((event) => {
  //   axois
  //     .get(`${base_url}/places/places`)
  //     .then((data) => {
  //       const detail = data.data;
  //       setDetails(detail);
  //       //setoccupantData(false)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
      <Col className="image-scroll-box px-0">
        {Place_Data &&
          Place_Data.map((i) => (
            <SingleImage
              Src={i.Src}
            />
          ))}
      </Col>
  );
}

export default ImageGallery;
