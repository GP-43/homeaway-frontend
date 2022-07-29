import React from "react";
import DailyTransactions from "../../../components/admin/DailyTransactions";
import { Row, Col, Container } from "react-bootstrap";
import HeaderCard from "../../../components/admin/HeaderCard";
import OccupantCard from "../../../components/admin/OccupantCard";
import RenterCard from "../../../components/admin/RenterCard";
import OccupantDetailCard from "../../../components/admin/OccupantDetailCard";
import BookingsDetailCard from "../../../components/admin/BookingsDetailCard";
import RenterDetailCard from "../../../components/admin/RenterDetailCard";

function Dashboard() {
  return (
    <Container>
      <Row className="mx-0">
        <Col className="px-0">
          <HeaderCard />
        </Col>
      </Row>

      <Row>
        <Col xs={8} className="container-new">
          <Row>
            <Col>
              <OccupantDetailCard />
            </Col>
            <Col>
              <BookingsDetailCard />
            </Col>
            <Col>
              <RenterDetailCard />
            </Col>
          </Row>

          <Row className="mx-0 user-list-card">
            <Col className="ps-4 mx-0 ">
              <OccupantCard />
            </Col>
            <Col className="ps-4 mx-0">
              <RenterCard />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="mx-0">
            <Col className="px-0 mx-0">
              <DailyTransactions />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
