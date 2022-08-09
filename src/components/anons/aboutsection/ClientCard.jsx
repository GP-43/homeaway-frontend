import React from 'react';
import { Row,Carousel } from 'react-bootstrap';
import profile1 from "../../../assets/images/profileimages/occupants/profile1.jpg";
import profile2 from "../../../assets/images/profileimages/occupants/profile2.jpg";
//import SingleUser from "../../admin/SingleUser";

function ClientCard () {
  const aboutUsMsg = [
    {
      src: profile1,
      name: "Senath Dewmin",
      location:"Kandy",
      msg:"Some quick example text to build on the card title and make up the\n" +
           "            bulk of the card's content.",
    },
    {
      src: profile2,
      name: "Tharindu Thathsara",
      location:"Ganemulla",
      msg:"Some quick example text to build on the card title and make up the\n" +
          "            bulk of the card's content.",
    }
  ];

  return (
    <Row>
      <Carousel>
      {aboutUsMsg &&
          aboutUsMsg.map((i) => (
      <Carousel.Item className="msg-card">
        <img src={""} />
        <Carousel.Body>
          <Carousel.Text>
            "{i.msg}"
          </Carousel.Text>
          <Carousel.Title className="mt-3 pt-1">{i.name}</Carousel.Title>
          <Carousel.Subtitle className="mt-2 text-muted">{i.location}</Carousel.Subtitle>
        </Carousel.Body>
      </Carousel.Item>))}
      </Carousel>
    </Row>
  )
}

export default ClientCard