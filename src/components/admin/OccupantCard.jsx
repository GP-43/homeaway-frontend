import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import { Row, Col, Container } from "react-bootstrap";
import axois from "axios";
import profile1 from "../../assets/images/profileimages/occupants/profile1.jpg";
import profile2 from "../../assets/images/profileimages/occupants/profile2.jpg";
import profile3 from "../../assets/images/profileimages/occupants/profile3.jpg";
import profile4 from "../../assets/images/profileimages/occupants/profile4.jpg";
import profile5 from "../../assets/images/profileimages/occupants/profile5.jpg";
import profile6 from "../../assets/images/profileimages/occupants/profile6.jpg";

function OccupantCard() {
  
  const Profile_Data = [
    {
      Src: profile1,
      Name: "Senath Dewmin",
      Location: "Kandy",
    },
    {
      Src: profile2,
      Name: "Janumi Kavya",
      Location: "Matara",
    },
    {
      Src: profile3,
      Name: "Senumi  Himaya",
      Location: "Kurunegala",
    },
    {
      Src: profile4,
      Name: "Kaveenn Livera",
      Location: "Galle",
    },
    {
      Src: profile5,
      Name: "Sewmi Dehara",
      Location: "Gampaha",
    },
    {
      Src: profile6,
      Name: "Lasith Perera",
      Location: "Colombo",
    },
  ];
  const [details, setDetails] = useState({});

  useEffect((event) => {
    axois
      .get("http://localhost:4000/admin/users")
      .then((data) => {
        const details = data.data;
        setDetails({ ...details });
        console.log(details);
        //setoccupantData(false)
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
                // Src={i.Src}
              />
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default OccupantCard;
