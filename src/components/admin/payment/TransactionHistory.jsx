import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TransactionRow from "./TransactionRow";
import { useState } from 'react';

function TransactionHistory() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')

    const Transaction_array = [
        {RenterName : "Saman Kumara", RenterEmail : "saman@gmail.com", RentDate : '2022-07-15',
            Amount : '3500', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Namal Perera", RenterEmail : "saman@gmail.com", RentDate : '2022-08-15',
            Amount : '8500', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Amal Saman", RenterEmail : "saman@gmail.com", RentDate : '2022-08-16',
            Amount : '10000', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Ruwan Pushpa", RenterEmail : "saman@gmail.com", RentDate : '2022-08-17',
            Amount : '6800', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Sandum Nimal", RenterEmail : "saman@gmail.com", RentDate : '2022-08-18',
            Amount : '3900', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Pawan Pahan", RenterEmail : "saman@gmail.com", RentDate : '2022-08-19',
            Amount : '1400', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Success"},
        {RenterName : "Nilantha Dasun", RenterEmail : "saman@gmail.com", RentDate : '2022-08-18',
            Amount : '6700', OccupantName : "Sandum Nimal" , OccupantEmail : "saman@gmail.com", Status : "Unsuccess"}
    ]

    return (
        <Col className='transaction'>
            <Row className='mx-0 search-part mt-4 pt-4 '>
                <Col xs={4} className='transaction-heading'>
                    Transaction History
                </Col>
                <Col xs={3} className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                           onChange={event => {setNameSearchTerm(event.target.value)}}
                    />
                </Col>
                <Col xs={3} className='text-center ps-5 ms-5'>
                    <input className='search-by-name p-2' type="date"
                           onChange={event => {setDateSearchTerm(event.target.value)}}
                    />
                </Col>
                <Col className='text-right'></Col>
                <Col className='text-right'></Col>
            </Row>

            <Row className='mx-0 px-0 data-part'> 

                    {Transaction_array.filter((val) => {
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
             </Row> 
        </Col>
    )
}

export default TransactionHistory