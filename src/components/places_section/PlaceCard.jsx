import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function PlaceCard(props) {
  const [show, setShow] = useState(true);

  return (
    <Col className="place-card-cover ">
      <Card className="place-card mb-3">
        <img
          className="d-block gallery-image place-image"
          src={props.Src}
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
            <Card.Title className="title">{props.Title}</Card.Title>
            <Card.Text className="city">{props.City}</Card.Text>
            <Card.Text className="price">{props.Price}</Card.Text>
            <Card.Body className="last-row">
              <Card.Body className="quantity-box">
                <FaUserFriends className="people-icon" />
                <Card.Text className="quantity">{props.Quantity}</Card.Text>
              </Card.Body>
              <Card.Body className="rating-box">
                <FaStar className="rating-icon" />
                <Card.Text className="rating">{props.Rating}</Card.Text>
              </Card.Body>
            </Card.Body>
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PlaceCard;
