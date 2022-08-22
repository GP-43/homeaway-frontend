import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import OccupantTable from "../../../components/admin/occupants/OccupantTable";
import HeaderCard from "../../../components/admin/occupants/HeaderCardOccupant";
import OccupantDetailCard from "../../../components/admin/OccupantDetailCard";
import NewOccupantDetailCard from "../../../components/admin/occupants/NewOccupantDetailCard";
import BookingsDetailCard from "../../../components/admin/BookingsDetailCard";
import AdminCalendar from "../../../components/admin/adminCalendar/AdminCalendar";
import DailyTransactions from "../../../components/admin/DailyTransactions";


function Occupants() {
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
                            <OccupantDetailCard />
                        </Col>

                        <Col >
                            <NewOccupantDetailCard />
                        </Col>

                        <Col >
                            <BookingsDetailCard />
                        </Col>

                    </Row>

                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 occupants-top-selling-products-part">
                            <OccupantTable />
                        </Col>
                    </Row>
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

export default Occupants