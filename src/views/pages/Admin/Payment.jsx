import React from "react";
import DailyTransactions from "../../../components/admin/DailyTransactions";
import { Row, Col, Container } from "react-bootstrap";
import HeaderCard from "../../../components/admin/payment/HeaderCardPayment";
import AdminCalendar from "../../../components/admin/adminCalendar/AdminCalendar";
import AccountCard from "../../../components/admin/payment/AccountDetails";
import BookingCard from "../../../components/admin/payment/BookingSmallCard";
import CancelledBookingCard from "../../../components/admin/payment/CancelledBookingSmallCard";
import TotalIncomeCard from "../../../components/admin/payment/TotalIncomeSmallCard";


function Payment() {
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
              <AccountCard />
            </Col>

            <Col >
              <BookingCard />
            </Col>

            <Col >
              <CancelledBookingCard />
            </Col>

            <Col >
              <TotalIncomeCard />
            </Col>
          </Row>

          <Row className="mx-0 user-list-card">
            {/*<Col className="ps-4 mx-0 ">
              <OccupantCard />
  </Col>*/}
          </Row>
        </Col>
        <Col>
          <Row className="mx-0"><AdminCalendar/></Row>
          <Row className="mx-0">
            <Col className="px-0 mx-0 daily-transaction-box">
              <DailyTransactions />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
