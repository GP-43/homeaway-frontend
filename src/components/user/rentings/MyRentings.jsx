import React, { useEffect, useState } from "react";
import PlaceCard from "../place_card/PlaceCard";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function MyRentings() {
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;

  const [listOfMyPlaces, setListOfMyPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/renter/myrentings/" + userId)
      .then((response) => {
        setListOfMyPlaces(response.data);
      });
  }, []);

  return (
    <Row className="py-3 mx-0">
      <Col md={12} xs={8} className="my-renting-section-head px-0">
        <Row className="mx-0">
          <Col md={12} xs={8} className="px-0 pb-2">
            <h5>My Rentings</h5>
          </Col>
        </Row>
      </Col>
      <Col md={12} xs={8} className="my-renting-section">
        <Row className="d-flex justify-content-center renting-section px-0">
          {listOfMyPlaces.map((value) => (
            <Col
              lg={4}
              md={4}
              className="place-card-set ps-lg-0 pe-lg-5 py-lg-3 px-md-2 py-md-2 px-0"
            >
              <PlaceCard
                placeId={value.id}
                title={value.title}
                src={"http://localhost:4000/images/" + value.image}
                city={value.city}
                price={value.price}
                quantity={value.quantity}
                rating="0"
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default MyRentings;
