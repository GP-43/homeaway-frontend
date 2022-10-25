import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import icon1 from "../../../assets/images/profile/Vector.png";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaStar, FaEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import axois from "axios";

function UserProfile() {
  //get id from session
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;

  const [profileDetails, setProfileDetails] = useState({});

  const toUpdateDetails = {
      Name : name,
      Location : location,
      Contact : contact,
  }

  console.log(toUpdateDetails.Name)

  const handleOnSubmit = () => {
    setIsFormDisabled(true);

    //methanin data yawamu
    axois
    .put("http://localhost:4000/occupant/update/profile/" + userId, toUpdateDetails)
    .then(() => {
      console.log("Work");
      fetchProfileDetails();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleOnNameSubmit = () => {
    setIsNameDisabled(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  // refresh page
  function fetchProfileDetails() {
    // get details
    axois
      .get("http://localhost:4000/occupant/select/profileDetails/" + userId)
      .then((data) => {
        const profileDetails = data.data;
        setProfileDetails({ ...profileDetails });
        console.log(profileDetails);

        setName(data.data[0]?.name)
        setEmail(data.data[0]?.email)
        setLocation(data.data[0]?.location)
        setContact(data.data[0]?.contact)
        setPassword(data.data[0]?.password)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect((event) => {
    fetchProfileDetails();
  }, []);

  // const userName = profileDetails[0]?.name;
  // const Location = profileDetails[0]?.location;
  // const Contact = profileDetails[0]?.contact;
  // const Email = profileDetails[0]?.email;

  // console.log(userName)

  
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  return (
    <>
      <Row>
        <Col className="profile-picture ms-5 mt-3 mb-3" lg={3}>
          <img src={icon1} alt="" className="profile-photo-edit-icon" />
        </Col>
        <Col className="profile-name-rate-container">
          <Row className="profile-name-container">
            <Col lg={8} className="p-0">
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder=""
                  value={name}
                  disabled={isNameDisabled}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              {/*  <input*/}
              {/*  type="text"*/}
              {/*  value={name}*/}
              {/*  onChange={(e) => setName(e.target.value)}*/}
              {/*/>*/}
            </Col>
            <Col lg={4} className="p-0">
              <h3>
                <FaEdit
                  className="ms-3 edit-icon"
                  onClick={() => setIsNameDisabled(false)}
                />
                <AiOutlineFileDone
                  className=" ms-2 done-icon"
                  onClick={handleOnNameSubmit}
                />
              </h3>
            </Col>
            <hr className="profile-name-underline" />
          </Row>
          <Row>
            <h4>
              <FaStar className="mb-2 me-3" />
              3.5
            </h4>
          </Row>
        </Col>
      </Row>

      <Col>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Email :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control placeholder="" value={email} disabled={true} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Location :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={location}
                disabled={isFormDisabled}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Contact No :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={contact}
                disabled={isFormDisabled}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Password :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={password}
                disabled={true}
                // onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
              />
              {/* <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />{" "}
              show password */}
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Button
            variant="warning"
            className="profile-edit-button m-3"
            onClick={() => setIsFormDisabled(false)}
          >
            Edit
          </Button>
          <Button
            className="profile-submit-button m-3"
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </Row>
      </Col>
    </>
  );
}

export default UserProfile;
