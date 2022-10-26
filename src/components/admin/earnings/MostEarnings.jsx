import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TransactionRow from "./TransactionRow";
import { useState, useEffect } from 'react';
import axois from "axios";

function MostEarnings() {

    const [details, setDetails] = useState({});

    useEffect((event) => {
        axois
            .get("http://localhost:4000/admin/view/sortpayment")
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <Col className='transaction'>
            <Row className='mx-0 search-part mt-4 pt-4 '>
                <Col className='transaction-heading'>
                    Most Earned Amount
                </Col>

                <Col className='text-right'></Col>
                <Col className='text-right'></Col>
            </Row>

            <Row className='mx-0 px-0 data-part'>

                {Object.keys(details).map((key, index) => {
                    return (
                        <Row className='data my-2' index={index}>
                            <TransactionRow
                                RenterName={details[index].name}
                                RenterEmail={details[index].email}
                                RentDate={details[index].rent_date}
                                Amount={details[index].amount}
                                OccupantName={details[index].renter_name}
                                OccupantEmail={details[index].renter_email}
                            />
                        </Row>
                    )
                })}
            </Row>
        </Col>
    )
}

export default MostEarnings