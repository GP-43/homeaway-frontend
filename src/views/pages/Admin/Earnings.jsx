import React from "react";
import TodayEarning from "../../../components/admin/earnings/TodayEarning";
import Earning from "../../../components/admin/earnings/Earning";
import { Row, Col, Container } from "react-bootstrap";
import HeaderCard from "../../../components/admin/earnings/HeaderCardEarning";
import MostEarnings from "../../../components/admin/earnings/MostEarnings";

function Payment() {
    return (
        <Container>
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard />
                </Col>
            </Row>

            <Row className="testing-2">
                <Col xs={7}>
                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 occupants-top-selling-products-part">
                            <Earning />
                        </Col>
                    </Row>
                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 occupants-top-selling-products-part">
                            <MostEarnings />
                        </Col>
                    </Row>

                </Col>
                <Col xs={4} className='ms-2'>
                    <Row className="mx-0">
                        <Col className="px-0 mx-0 today-earning-box">
                            <TodayEarning />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;
