import React from "react";
import { Col, Row } from "react-bootstrap";
import signup from "../../../assets/images/anons/things-you-need/signup.png";
import Vector from "../../../assets/images/anons/things-you-need/Vector.png";
import worth_of_money from "../../../assets/images/anons/things-you-need/worth_of_money.png" ;
import ThingsYouNeedCard from "../../../components/anons/things_you_need_section/ThingsYouNeedCard"

function ThingsYouNeedCardSection() {
    const data_01 = [{ Title : "Signup", Text : "Completes all the work associated with renting", Src: signup },
                        { Title : "Worth of Money", Text : "After successful access then book according to your interest", Src: worth_of_money  },
                        { Title : "Rating", Text : "After your works done, rate and comment to see others", Src: Vector  }];
    return (
        <Row className='mx-0'> 

            {data_01 &&
                data_01.map((i) => (
                    <Col lg={4} md={4} >
                        <ThingsYouNeedCard Title={i.Title} Src={i.Src} Text={i.Text} />
                    </Col>
                ))}

        </Row>
    );
}

export default ThingsYouNeedCardSection;
