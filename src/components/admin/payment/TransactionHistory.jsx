import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TransactionRow from "./TransactionRow";
import { useState, useEffect } from 'react';
import axois from "axios";

function TransactionHistory() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')

    const [details, setDetails] = useState({});

    useEffect((event) => {
        axois
            .get("http://localhost:4000/admin/view/payment")
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
                <Col xs={4} className='transaction-heading'>
                    Transaction History
                </Col>
                <Col xs={3} className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                        onChange={event => { setNameSearchTerm(event.target.value) }}
                    />
                </Col>
                <Col xs={3} className='text-center ps-5 ms-5'>
                    <input className='search-by-name p-2' type="date"
                        onChange={event => { setDateSearchTerm(event.target.value) }}
                    />
                </Col>
                <Col className='text-right'></Col>
                <Col className='text-right'></Col>
            </Row>

            <Row className='mx-0 px-0 data-part'>

                {Object.keys(details).filter((index) => {
                    // without searching
                    if (nameSearchTerm == "" && dateSearchTerm == "") {
                        return index
                    }
                    // search by name
                    else if ((details[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase())) && dateSearchTerm == "") {
                        return index
                    }
                    //search by date
                    else if (nameSearchTerm == "" && dateSearchTerm == details[index].rent_date) {
                        return index
                    }
                    // search by date + name
                    else if (dateSearchTerm == details[index].rent_date && (details[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()) || details[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return index
                    }


                }).map((key, index) => {
                    return (
                        <Row className='data my-2' index={index}>
                            <TransactionRow
                                RenterName={details[index].name}
                                RenterEmail={details[index].email}
                                RentDate={details[index].rent_date}
                                Amount={details[index].amount}
                                OccupantName={details[index].renter_name}
                                OccupantEmail={details[index].renter_email}
                                Status={details[index].status}
                            />
                        </Row>
                    )
                })}
            </Row>
        </Col>
    )
}

export default TransactionHistory