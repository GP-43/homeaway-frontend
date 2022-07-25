import React from "react";
import PlaceCard from "./PlaceCard.jsx";
import { Row, Col, Container } from "react-bootstrap";
import { FaExchangeAlt, FaRestroom } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import place1 from "../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../assets/images/places_image_gallery/place8.jpg";


function PlaceSection() {
  const Place_Data = [
    {
      Src: place1,
      Title: "Meeting room",
      City: "Colombo",
      Price: "Rs.2500",
      Quantity: 8,
      Rating: 4.0,
    },
    {
      Src: place2,
      Title: "Study room",
      City: "Gampaha",
      Price: "Rs.3000",
      Quantity: 20,
      Rating: 4.8,
    },
    {
      Src: place3,
      Title: "Study room",
      City: "Kurunegala",
      Price: "Rs.2000",
      Quantity: 10,
      Rating: 3.8,
    },
    {
      Src: place4,
      Title: "Meeting room",
      City: "Jaffna",
      Price: "Rs.4500",
      Quantity: 30,
      Rating: 4.2,
    },
    {
      Src: place5,
      Title: "Meeting room",
      City: "Maho",
      Price: "Rs.3500",
      Quantity: 43,
      Rating: 1.2,
    },
    {
      Src: place6,
      Title: "Study room",
      City: "chilaw",
      Price: "Rs.4000",
      Quantity: 50,
      Rating: 4.9,
    },
    {
      Src: place7,
      Title: "Study room",
      City: "Mount lavinia",
      Price: "Rs.2500",
      Quantity: 20,
      Rating: 3.0,
    },
    {
      Src: place8,
      Title: "Meeting room",
      City: "Rathmalane",
      Price: "Rs.5000",
      Quantity: 12,
      Rating: 2.8,
    },
  ];

  return (
    <Container>
      <Row  className= "pt-3 pb-3">
        <Col className = "ms-4 ">
          <h5>Explore more places</h5>
        </Col>
        <Col  className="d-flex justify-content-end me-3">
            <Dropdown className="sort-drop-down-btn">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaExchangeAlt
                  className="sort-icon"
                  style={{ transform: "rotate(90deg)" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="my-bookings-dropdown">
                <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Col>

      </Row>
      <Row xs={4} className="place-card-set ms-4 pe-3">
        
          {Place_Data &&
            Place_Data.map((i) => (
              <PlaceCard
                Title={i.Title}
                Src={i.Src}
                City={i.City}
                Price={i.Price}
                Quantity={i.Quantity}
                Rating={i.Rating}
              />
            ))}
        
      </Row>
      {/* <div className="place-section-cover">
        <div className="places-title d-flex mb-8">
          <h5>Explore more places</h5>
          <div className="sort-drop-down-btn">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaExchangeAlt
                  className="sort-icon"
                  style={{ transform: "rotate(90deg)" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="my-bookings-dropdown">
                <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="place-card-set">
          {Place_Data &&
            Place_Data.map((i) => (
              <PlaceCard
                Title={i.Title}
                Src={i.Src}
                City={i.City}
                Price={i.Price}
                Quantity={i.Quantity}
                Rating={i.Rating}
              />
            ))}
        </div>
      </div> */}
    </Container>
  );
}

export default PlaceSection;
