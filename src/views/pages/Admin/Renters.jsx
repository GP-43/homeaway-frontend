import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import RenterTable from "../../../components/admin/renters/RenterTable";
import HeaderCard from "../../../components/admin/renters/HeaderCardRenter";
import RenterDetailCard from "../../../components/admin/renters/RenterDetailCard";
import PlaceDetailCard from "../../../components/admin/renters/PlaceDetailCard";
import AvailPlaceDetailCard from "../../../components/admin/renters/AvailablePlaceDetailCard";
import AdminCalendar from "../../../components/admin/adminCalendar/AdminCalendar";
import DailyTransactions from "../../../components/admin/DailyTransactions";
//import Places from "../../../components/admin/renters/Places"


function Renters() {
    return (
        <Container>
            
            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard />
                </Col>
            </Row>

            <Row className="testing-2">
                <Col xs={8}>
                    <Row className="testing-1">

                        <Col >
                            <RenterDetailCard />
                        </Col>

                        <Col >
                            <PlaceDetailCard />
                        </Col>

                        <Col >
                            <AvailPlaceDetailCard />
                        </Col>

                    </Row>

                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 Renters-top-selling-products-part">
                            <RenterTable />
                        </Col>
                    </Row>

                    {/*<Row className="mx-0 user-list-card">
                        <Col className="px-0 Renters-top-selling-products-part">
                            <Places />
                        </Col>
    </Row>*/}

                </Col>
                {/*<Col>
                    <Row className="mx-0"><AdminCalendar /></Row>
                    <Row className="mx-0">
                        <Col className="px-0 mx-0 daily-transaction-box">
                            <DailyTransactions />
                        </Col>
                    </Row>
</Col>*/}
            </Row>
        </Container>
    );
}

export default Renters