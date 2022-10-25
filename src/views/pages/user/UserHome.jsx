import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Button } from "react-bootstrap";
import FindingPlace from "../../../components/user/finding_place/FindingPlace.jsx";
import PlaceSection from "../../../components/user/places_section/PlaceSection";

function UserHome() {

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const userId = userDetails.userId;

    const handleClick = async () => {
        try {
          const {data} = await axios.post(
            'https://reqres.in/api/users',
            { userId },
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },
          );
    
          console.log(JSON.stringify(data, null, 4));
    
          setData(data);
        } catch (err) {
          setErr(err.message);
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <Container>
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
          <Button className="become-renter-btn" onClick={handleClick} >Become a renter</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserHome;
