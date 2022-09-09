import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TransactionRow from "./TransactionRow";
import { useState, useEffect } from 'react';
import axois from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function TransactionHistory() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')

    // const Transaction_array = [
    //     {RenterName : "Saman Kumara", RenterEmail : "saman@gmail.com", RentDate : '2022-07-15',
    //         Amount : '3500', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Namal Perera", RenterEmail : "saman@gmail.com", RentDate : '2022-08-15',
    //         Amount : '8500', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Amal Saman", RenterEmail : "saman@gmail.com", RentDate : '2022-08-16',
    //         Amount : '10000', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Ruwan Pushpa", RenterEmail : "saman@gmail.com", RentDate : '2022-08-17',
    //         Amount : '6800', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Sandum Nimal", RenterEmail : "saman@gmail.com", RentDate : '2022-08-18',
    //         Amount : '3900', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Pawan Pahan", RenterEmail : "saman@gmail.com", RentDate : '2022-08-19',
    //         Amount : '1400', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
    //     {RenterName : "Nilantha Dasun", RenterEmail : "saman@gmail.com", RentDate : '2022-08-18',
    //         Amount : '6700', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Unsuccess"}
    // ]

    const [details, setDetails] = useState({});

    useEffect((event) => {
        axois
            .get(`${base_url}/admin/view/payment`)
            .then((data) => {
                const details = data.data;
                setDetails({ ...details });
                //setoccupantData(false)
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

                <Row className='data my-4'>

                    {/* {Object.keys(details).map((key, index) => (
                        <TransactionRow
                            RenterName={details[index].name}
                            RenterEmail={details[index].email}
                            RentDate={details[index].rent_date}
                            Amount={details[index].amount}
                            OccupantName={details[index].renter_name}
                            OccupantEmail={details[index].renter_email}
                            Status={details[index].status}

                        />
                    ))} */}
                </Row>


                {/*{Transaction_array.filter((val) => {
                    // without searching
                    if (nameSearchTerm == "" && dateSearchTerm == "")
                    {
                        return val
                    } 
                    // search by name
                    else if ((val.RenterName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.OccupantName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) && dateSearchTerm == "")
                    {
                        return val
                    }                    
                    //search by date
                    else if (nameSearchTerm == "" && dateSearchTerm == val.RentDate)
                    {
                        return val
                    }
                    // search by date + name
                    else if (dateSearchTerm == val.RentDate && (val.RenterName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.OccupantName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) )
                    {
                        return val
                    }
                
                    
                }).map((val, key) => {
                    return (
                        <Row className='data my-4' key={key}>
                            <TransactionRow
                                RenterName = {val.RenterName}
                                RenterEmail= {val.RenterEmail}
                                RentDate= {val.RentDate}
                                Amount= {val.Amount}
                                OccupantName= {val.OccupantName}
                                OccupantEmail= {val.OccupantEmail}
                                Status= {val.Status}
                            />
                        </Row>
                    )
                })}
             </Row>  */}


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