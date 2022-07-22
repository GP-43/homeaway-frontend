import React, { useState } from "react";
import { Card } from "react-bootstrap";
import place from "../assets/images/places_image_gallery/place1.jpg";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function PlaceCard() {

  const [show, setShow] = useState(true);
  
  return (
    <div className="place-card-cover">
    <Card className="place-card">
      <img
        className="d-block gallery-image place-image"
        src={place}
        alt="plae card"
      />
      {show ? (
        <button className="button" onClick={() => setShow(false)}>
          <FaRegHeart className="heart-icon" />
        </button>
      ) : (
        <button className="button" onClick={() => setShow(true)}>
          <FaHeart className="heart-icon" />
        </button>
      )}

      <Card.Body className="text-box">
        <Card.Body className="text">
          <Card.Title className="title">Meeting room</Card.Title>
          <Card.Text className="city">Colombo</Card.Text>
          <Card.Text className="price">LKR 2500</Card.Text>
          <Card.Body className="last-row">
            <Card.Body className="quantity-box">
              <FaUserFriends className="people-icon" />
              <Card.Text className="quantity">8</Card.Text>
            </Card.Body>
            <Card.Body className="rating-box">
              <FaStar className="rating-icon" />
              <Card.Text className="rating">4.0</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card.Body>
      </Card.Body>
    </Card>
    </div>
  );
}

export default PlaceCard;
