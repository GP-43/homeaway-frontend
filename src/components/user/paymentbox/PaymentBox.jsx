import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axois from "axios";

function PaymentBox() {
  const [payments, setPayments] = useState([]);

    useEffect((event) => {
      axois
      .get("http://localhost:4000/renter/transactions")
      .then((data) => {
          const detail = data.data;
          setPayments(detail);
          console.log(detail);
      })
      .catch((error) => {
          console.log(error);
      });
    }, []);


  // useEffect((event) => {
  //   axois
  //     .get("http://localhost:4000/renter/transactions")
  //     .then((res) => {
  //       console.log(res.data[0].amount)
  //       setPayments(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }, []);
  //   console.log(payments);
  return (
    <Container className="payment-box-container pt-1">
      <Col xs={10} className="p-4 mx-2 my-3 payment-box">
        <Row>
          <h7 xs={10} className="px-2 heading ">
            Total Received
          </h7>
          <dev className="px-2 received-amount">{console.log(payments[0])}
          </dev>
          <dev className="px-2 sen">+10% since last two weeks</dev>
          <h7 xs={10} className="px-2 pt-4 sub-heading ">
            Pending
          </h7>
          <dev className="px-2 pending-amount">LKR 10560.00</dev>
        </Row>
      </Col>
    </Container>
  );
}

export default PaymentBox;
