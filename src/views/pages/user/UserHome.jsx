import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import FindingPlace from "../../../components/user/finding_place/FindingPlace.jsx";
import PlaceSection from "../../../components/user/places_section/PlaceSection";
import { HomePagePlacesProvider } from '../../../contexts/HomePagePlacesContext.js';
import { useState } from "react";

function UserHome() {
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;
  const [occupantdetails, setOccupantdetails] = useState({});
  const [isarenter, setIsarenter] = useState({});

  const [name, setName] = useState("");
  const [image, setImage] = useState("noImage");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [properties, setProperties] = useState("");
  const [rate, setRate] = useState(0);

  const inserttorenter = {
    rName: name,
    rImage: image,
    rEmail: email,
    rContact: contact,
    rLocation: location,
    rPassword: password,
    rRole: 3,
    rProperties: properties,
    rRate: rate,
  };

  const handleClick = async () => {

    //check whether already a renter
    axios
      .get("http://localhost:4000/renter/checkwhetherrenter/" + userId)
      .then((data) => {
        const isarenter = data.data;
        setIsarenter({ ...isarenter });
        console.log("hf", isarenter);
      })
      .catch((error) => {
        console.log(error);
      });

    // get details
    axios
      .get("http://localhost:4000/occupant/getoccupantinfo/" + userId)
      .then((data) => {
        const occupantdetails = data.data;
        setOccupantdetails({ ...occupantdetails });
        console.log(occupantdetails);

        setName(data.data[0]?.name);
        setImage(data.data[0]?.image);
        setEmail(data.data[0]?.email);
        setContact(data.data[0]?.contact);
        setLocation(data.data[0]?.location);
        setPassword(data.data[0]?.password);
        setRole(data.data[0]?.role);
        setProperties(data.data[0]?.properties);
        setRate(data.data[0]?.rate);
      })
      .catch((error) => {
        console.log(error);
      });

    //insert new renter
    axios
      .post(
        "http://localhost:4000/renter/addnewrenter/" + userId,
        inserttorenter
      )
      .then(() => {
        console.log("Work");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(inserttorenter);
  return (
    <Container>
      <HomePagePlacesProvider>
        <Row className="mx-0 mt-2 finding-place">
          <Col>
            <FindingPlace />
          </Col>
        </Row>

        <Row className="mx-0 mt-5 pt-3">
          <Col>
            <PlaceSection />
          </Col>
        </Row>
        <Row className="mx-5 mt-5 pt-4 pb-4">
          <Col xs={12}>
            <Button className="become-renter-btn" onClick={handleClick}>
              Become a renter
            </Button>
          </Col>
        </Row>
      </HomePagePlacesProvider>
    </Container>
  );
}

export default UserHome;
