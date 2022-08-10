import React from 'react';
import { Row,Card } from 'react-bootstrap';
import profile1 from "../../../assets/images/profileimages/occupants/profile1.jpg";

function ClientCard () {
  const aboutUsMsg = [
    {
      src: profile1,
      name: "Senath Dewmin",
      location:"Kandy",
      msg:"Some quick example text to build on the card title and make up the\n" +
           "            bulk of the card's content.",
    }
  ];

  return (
    <Row>
      {aboutUsMsg &&
          aboutUsMsg.map((i) => (
      <Card className="client-msg-card bg-transparent">
      <img src={i.src} className="msg-prof-image" />
        <Card.Body className="msg-card bg-light">
          <Card.Text>
            "{i.msg}"
          </Card.Text>
          <Card.Title className="mt-3 pt-1">{i.name}</Card.Title>
          <Card.Subtitle className="mt-2 text-muted">{i.location}</Card.Subtitle>
        </Card.Body>
      </Card>))}

      {/*<Carousel className="client-msg-ard">*/}
      {/*  {aboutUsMsg &&*/}
      {/*      aboutUsMsg.map((i) => (*/}
      {/*          <Carousel.Item className="msg-card bg-transparent" interval={10000000}>*/}
      {/*            <img*/}
      {/*                className="msg-prof-image"*/}
      {/*                src={i.src}*/}
      {/*            />*/}
      {/*            <Carousel.Caption className="msg-box-details bg-light">*/}
      {/*              <p>{i.msg}</p>*/}
      {/*              <h4>{i.name}</h4>*/}
      {/*              <h6>{i.location}</h6>*/}
      {/*            </Carousel.Caption>*/}
      {/*          </Carousel.Item>*/}
      {/*      ))}*/}
      {/*</Carousel>*/}
    </Row>
  )
}

export default ClientCard