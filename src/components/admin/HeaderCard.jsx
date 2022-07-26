import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";



function HeaderCard() {

    return (
        <Container>

            <Card className="Header-card ps-3">

                <Col className="d-flex flex-row  Header-card-div" >
                    <a href="" class="Header-card-div-text ms-2 mt-2"><FaHome className="header-card-home-icon text-light bg-dark" size="lg" /></a>
                    <h7 class="Header-card-div-text ">/</h7>
                    <a href="" class="Header-card-div-text "><h7 className="Header-card-div-text ms-0 mt-0">Place</h7></a>
                </Col >
                <Col className="Header-card-div">
                    <h4 class="Header-card-div-text ">Place</h4>
                </Col>

            </Card>

        </Container>


    );
}

export default HeaderCard;