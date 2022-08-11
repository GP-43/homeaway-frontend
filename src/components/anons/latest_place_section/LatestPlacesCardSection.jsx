import React, { useState } from "react";
import LatestPlaceCard from "./LatestPlaceCard";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../../assets/images/places_image_gallery/place8.jpg";

function LatestPlacesCardSection() {
  const latestPlaceData = [
    {
      Src: place1,
      Id: 1,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place2,
      Id: 2,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place3,
      Id: 3,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place4,
      Id: 4,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place5,
      Id: 5,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place6,
      Id: 6,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place7,
      Id: 7,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
    {
      Src: place8,
      Id: 8,
      Description: "An amazingly different place for a conference",
      Date: "July 27, 2020",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row>
      <Col>
        <Row>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {latestPlaceData
              .filter((val) => {
                if (val.Id <= 4) {
                  return val;
                } else if (val.Id >= 5 && val.Id <= 8) {
                  return val;
                } else if (val.Id >= 9 && val.Id <= 12) {
                  return val;
                }
              })
              .map((i) => (
                <Col lg={4} md={4}>
                  <CarouselItem
                    description={i.Description}
                    src={i.Src}
                    date={i.Date}
                  />
                </Col>
              ))}

            {/* <Carousel.Item>
              <Col className="latest-card-box d-flex px-lg-4 py-lg-3 px-md-2 py-md-2">
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place3}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place7}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place6}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place8}
                  date={"July 27, 2020"}
                />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="latest-card-box d-flex px-lg-4 py-lg-3 px-md-2 py-md-2">
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place1}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place2}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place3}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place4}
                  date={"July 27, 2020"}
                />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="latest-card-box d-flex px-lg-4 py-lg-3 px-md-2 py-md-2">
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place5}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place2}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place4}
                  date={"July 27, 2020"}
                />
                <LatestPlaceCard
                  description={"An amazingly different place for a conference"}
                  src={place3}
                  date={"July 27, 2020"}
                />
              </Col>
            </Carousel.Item> */}
          </Carousel>
        </Row>
      </Col>
    </Row>
  );
}

export default LatestPlacesCardSection;
