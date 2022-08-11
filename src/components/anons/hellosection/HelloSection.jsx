import React from "react";
import {Row, Col} from "react-bootstrap";
import '../../../assets/styles/partials/anons/_hellosection.scss';
import JoinWithUs from "./JoinWithUs";

function HelloSection() {
    return(
        <Col className="hello-section mx-0 my-5 py-4" lg={12} md={6}>
            <Row className="first-text"><b>Whether you’re we can help you move forward...</b></Row>
            <Row className="second-text mx-0">Difficulties you facing during this time will reduce by providing you
                with the best desire place to continue the work from home concept.
            </Row>
            <Row className="mx-0"><JoinWithUs/></Row>
        </Col>
    );
}

export default HelloSection;