import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TransactionRow from "./TransactionRow";
import { useState } from 'react';

//images
import p1 from "../../../assets/images/admin/occupant/p1.jpg";
import p2 from "../../../assets/images/admin/occupant/p2.jpg";
import p3 from "../../../assets/images/admin/occupant/p3.jpg";
import p4 from "../../../assets/images/admin/occupant/p4.jpg";
import p5 from "../../../assets/images/admin/occupant/p5.jpg";
import p6 from "../../../assets/images/admin/occupant/p6.jpg";
import p7 from "../../../assets/images/admin/occupant/p7.jpg";

function TransactionHistory() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')

    const Transaction_array = [
        {Src : p7, firstName : "saman", lastName : "kumara", email : "saman@gmail.com", joinedDate : '2022-07-15',
            rate : '2'},
        {Src : p1, firstName : "namal", lastName : "perera", email : "saman@gmail.com", joinedDate : '2022-08-15',
            rate : '4'},
        {Src : p2, firstName : "amal", lastName : "saman", email : "saman@gmail.com", joinedDate : '2022-08-16',
            rate : '4'},
        {Src : p3, firstName : "ruwan", lastName : "pushpa", email : "saman@gmail.com", joinedDate : '2022-08-17',
            rate : '3'},
        {Src : p4, firstName : "sandum", lastName : "nimal", email : "saman@gmail.com", joinedDate : '2022-08-18',
            rate : '1'},
        {Src : p5, firstName : "pawan", lastName : "pahan", email : "saman@gmail.com", joinedDate : '2022-08-19',
            rate : '4'},
        {Src : p6, firstName : "nilantha", lastName : "dasun", email : "saman@gmail.com", joinedDate : '2022-08-18',
            rate : '6'}
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
                    else if ((val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) && dateSearchTerm == "")
                    {
                        return val
                    }                    
                    //search by date
                    else if (nameSearchTerm == "" && dateSearchTerm == val.joinedDate)
                    {
                        return val
                    }
                    // search by date + name
                    else if (dateSearchTerm == val.joinedDate && (val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) )
                    {
                        return val
                    }
                
                    
                }).map((val, key) => {
                    return (
                        <Row className='data mx-0 px-0 ' key={key}>
                            <TransactionRow
                                Src = {val.Src}
                                firstName = {val.firstName}
                                lastName = {val.lastName}
                                email = {val.email}
                                joinedDate = {val.joinedDate}
                                rate = {val.rate}
                            />
                        </Row>
                    )
                })}
             </Row> 
        </Col>
    )
}

export default TransactionHistory