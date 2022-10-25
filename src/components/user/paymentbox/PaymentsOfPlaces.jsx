import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axois from "axios";

function PaymentOfPlaces() {
    const [placepayments, setPlacepayments] = useState([]);

    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const userId = userDetails.userId;

    useEffect(() => {
        axois.get("http://localhost:4000/renter/paymentofplaces/"+ userId).then((response) => {
            setPlacepayments(response.data);
            console.log(response.data)
        });
    }, []);

  //   const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
  //   const userId = userDetails.userId;

  //console.log(userDetails);
  //   const [payment, setPayments] = useState([]);

  // useEffect((event) => {
  //   axois
  //       .get("http://localhost:4000/renter/transactions/" + userId)
  //       .then((data) => {
  //         const payment = data.data;
  //         setPayments({ ...payment });
  //         console.log(payment[0]?.total_amount);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <Container>
      <table className="payment-of-places">
        <tr>
          <th className="place-header-col">Place</th>
          <th className="date-header-col">Rent date</th>
          <th className="payment-header-col">Payment</th>
        </tr>
        {placepayments.map((value) => (
          <tr>
            <td className="place-col">{value.place_id}</td>
            <td className="date-col">{value.rent_date}</td>
            <td className="payment-col">LKR {value.amount}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

export default PaymentOfPlaces;
