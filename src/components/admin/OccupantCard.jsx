import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import { Row, Col, Container } from "react-bootstrap";
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function OccupantCard() {
  const [details, setDetails] = useState({});
  useEffect((event) => {
    axois
      .get(`${base_url}/admin/users`)
      .then((data) => {
        const details = data.data;
        setDetails({ ...details });
        console.log(details);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="my-4 big-con mx-0">
      <Row className="user-list">
        <Col xs={11} className="occupant-user-list p-2">
          <h6 className="list-heading pt-3 pb-4"> New Occupants</h6>
          <Col>
            {Object.keys(details).map((key, index) => (
              <SingleUser
                Name={details[index].name}
                Location={details[index].location}
                Src={"http://localhost:4000/renters/" + details[index].image}
              />
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default OccupantCard;
