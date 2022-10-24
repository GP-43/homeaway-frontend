import React from "react";
import { Col, Row } from "react-bootstrap";
import icon1 from "../../../assets/images/profile/Vector.png";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { FaStar, FaEdit } from "react-icons/fa";

function UserProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("Thushan Dananjaya");
  return (
    <>
      <Row>
        <Col className="profile-picture ms-5 mt-3 mb-3" lg={3}>
          <img src={icon1} alt="" className="profile-photo-edit-icon"/>
        </Col>
        <Col className="profile-name-rate-container">
          <Row className="profile-name-container">
            <h1><input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><FaEdit className="mb-2 ms-5"/></h1>
            <hr className="profile-name-underline"/>
          </Row>
          <Row>
            <h4><FaStar className="mb-2 me-3"/>3.5</h4>
          </Row>
        </Col>
      </Row>

      <Col>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Email :</h5>
          </Col>
          <Col lg={8} className="profile-data-fieled">
            <input
              type="text"
              value="Thushan Dananjaya"
              className="profile-data-fieled-input"
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Location :</h5>
          </Col>
          <Col lg={8}></Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Contact No :</h5>
          </Col>
          <Col lg={8} className="profile-data-fieled">
            <input
              type="text"
              value="0781102052"
              className="profile-data-fieled-input"
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Password :</h5>
          </Col>
          <Col lg={8} className="profile-data-fieled">
            <input
              type={showPassword ? "text" : "password"}
              value="Thushan12345@"
              className="profile-data-fieled-input"
            />
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            show password
          </Col>
        </Row>
        <Row className="justify-content-end">
            <Button variant="warning" className="profile-edit-button m-3">Edit</Button>
            <Button className="profile-submit-button m-3">Submit</Button>
        </Row>
      </Col>
    </>
  );
}

export default UserProfile;
