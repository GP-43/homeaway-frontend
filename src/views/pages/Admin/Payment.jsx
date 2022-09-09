import React from "react";
import DailyTransactions from "../../../components/admin/DailyTransactions";
import { Row, Col, Container } from "react-bootstrap";
import HeaderCard from "../../../components/admin/payment/HeaderCardPayment";
import AdminCalendar from "../../../components/admin/adminCalendar/AdminCalendar";
import AccountCard from "../../../components/admin/payment/AccountDetails";
import BookingCard from "../../../components/admin/payment/BookingSmallCard";
import CancelledBookingCard from "../../../components/admin/payment/CancelledBookingSmallCard";
import TotalIncomeCard from "../../../components/admin/payment/TotalIncomeSmallCard";
import TransactionHistory from "../../../components/admin/payment/TransactionHistory";

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
          <Row className="testing-1 ">

            <Col xs={5}>
              <AccountCard />
            </Col>

            <Col xs={6} className="payment-small-card">
              <Col xs={4} className="ms-2 me-3">
                <BookingCard />
              </Col>

              <Col xs={4} className="mx-3">
                <CancelledBookingCard />
              </Col>

              <Col xs={4} className="ms-3">
                <TotalIncomeCard />
              </Col>
            </Col>

          </Row>

          <Row className="mx-0 user-list-card">
            <Col className="px-0 occupants-top-selling-products-part">
              <TransactionHistory />
            </Col>
          </Row>

        </Col>
        <Col className='ms-2'>
          <Row className="mx-0"><AdminCalendar /></Row>
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
