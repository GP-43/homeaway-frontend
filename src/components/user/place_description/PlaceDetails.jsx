import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { AiOutlineFileDone } from "react-icons/ai";
import axios from "axios";

function PlaceDetails(props) {
  const [show, setShow] = useState(true);

  const curruser = JSON.parse(sessionStorage.getItem("currentuserrole"));
  const curruserrole = curruser.isRenter;

  const [price, setPrice] = useState(props.price);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setPrice(props.price);
  }, [props.price]);

  // const place_details = { title: "Meeting Room_01", city: "Gampaha", priceType: "per two hour", price: 'LKR: 600' };

  function updateProfileDescription() {
    //Put details

    console.log("NEw desctipsd fsdf :", price, props.placeId);

    axios
      .put("http://localhost:4000/renter/update/price/" + props.placeId, {
        price,
      })
      .then((data) => {
        console.log("Price updatedddddd");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Row xs={3} className="place-details-cover p-1 mb-3">
      <Col ys={2} xs={4} className="place-details-bacground">
        <Row className="place-details-bacground">
          {/* <h5 className="place-details-text">LKR. {props.price}</h5> */}
          <Card className="place-information-price">
            <Card.Body className="p-1">
              <Row className={!curruserrole ? "d-none" : "btn-coll"}>
                <Col className="pb-2 btn-col btn-set">
                  <FaEdit
                    className="ms-3 edit-icon profile-button"
                    onClick={() => setDisabled((oldDisabled) => !oldDisabled)}
                  />
                  <AiOutlineFileDone
                    className=" ms-2 done-icon profile-button"
                    onClick={updateProfileDescription}
                  />
                </Col>
              </Row>
              <Row>
                <textarea
                  className="description-area"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={disabled}
                ></textarea>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row className="place-details-bacground">
          <h6 className="place-details-text">Price per {props.priceType}(LKR)</h6>
        </Row>
      </Col>
      <Col ys={2} xs={6} className="place-details-bacground">
        <Row className="place-details-bacground">
          <h5 className="place-details-text">{props.title}</h5>
        </Row>
        <Row className="place-details-bacground">
          <h6 className="place-details-text">{props.city}</h6>
        </Row>
      </Col>
      <Col
        ys={1}
        xs={2}
        className="d-flex justify-content-end m-auto place-details-bacground pe-0"
      >
        {show ? (
          <button
            className="button place-details-heart-button"
            onClick={() => setShow(false)}
          >
            <FaRegHeart className="heart-icon place-details-heart-icon" />
          </button>
        ) : (
          <button
            className="button place-details-heart-button"
            onClick={() => setShow(true)}
          >
            <FaHeart className="heart-icon place-details-heart-icon" />
          </button>
        )}
      </Col>
    </Row>
  );
}

export default PlaceDetails;
