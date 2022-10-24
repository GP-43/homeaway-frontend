import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import axois from "axios";

function PaymentBox() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/user/paymentofplaces');
  };
  
  const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
  const userId = userDetails.userId;

  //console.log(userDetails);
  const [payment, setPayments] = useState([]);

useEffect((event) => {
  axois
      .get("http://localhost:4000/renter/transactions/" + userId)
      .then((data) => {
        const payment = data.data;
        setPayments({ ...payment });
        console.log(payment[0]?.total_amount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="payment-box-container pt-1">
      <Col xs={10} className="p-4 mx-2 my-2 payment-box">
        <Row>
          <h7 xs={10} className="px-2 heading ">
            Total Received
          </h7>
          <dev className="px-2 received-amount">LKR {payment[0]?.total_amount}
          </dev>
          <Button className="px-2 more-btn" onClick={navigateToContacts}>Click here for a detailed version..</Button>
        </Row>
      </Col>
    </Container>
  );
}

export default PaymentBox;
