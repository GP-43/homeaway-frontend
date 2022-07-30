import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";



function HeaderCard() {

    return (
        

            <Card className="Header-card">

                <Col className="d-flex flex-row  Header-card-div" >
                    <a href="" class="Header-card-div-text ms-2 mt-2"><FaHome className="header-card-home-icon " size="lg" /></a>
                    <h7 class="Header-card-div-text ">/</h7>
                    <a href="" class="Header-card-div-text "><h7 className="Header-card-div-text ms-0 mt-0">Dashboard</h7></a>
                </Col >
                <Col className="Header-card-div">
                    <h4 class="Header-card-div-text ">Dashboard</h4>
                </Col>

            </Card>

       


    );
}

export default HeaderCard;