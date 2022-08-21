import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RenterRow from "./RenterRow";
import { useState } from 'react';

//images
import p1 from "../../../assets/images/admin/renter/p1.jpg";
import p2 from "../../../assets/images/admin/renter/p2.jpg";
import p3 from "../../../assets/images/admin/renter/p3.jpg";
import p4 from "../../../assets/images/admin/renter/p4.jpg";
import p5 from "../../../assets/images/admin/renter/p5.jpg";
import p6 from "../../../assets/images/admin/renter/p6.jpg";
import p7 from "../../../assets/images/admin/renter/p7.jpg";

function RenterTable() {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')
    const [rateSearchTerm, setRateSearchTerm] = useState('')

    const details_array = [
        {Src : p7, firstName : "saman", lastName : "kumara", email : "saman@gmail.com", joinedDate : '2022-07-15', properties: '1',
            rate : '2'},
        {Src : p1, firstName : "namal", lastName : "perera", email : "saman@gmail.com", joinedDate : '2022-08-15', properties: '4',
            rate : '4'},
        {Src : p2, firstName : "amal", lastName : "saman", email : "saman@gmail.com", joinedDate : '2022-08-16', properties: '2',
            rate : '4'},
        {Src : p3, firstName : "ruwan", lastName : "pushpa", email : "saman@gmail.com", joinedDate : '2022-08-17', properties: '3',
            rate : '3'},
        {Src : p4, firstName : "sandum", lastName : "nimal", email : "saman@gmail.com", joinedDate : '2022-08-18', properties: '1',
            rate : '1'},
        {Src : p5, firstName : "pawan", lastName : "pahan", email : "saman@gmail.com", joinedDate : '2022-08-19', properties: '2',
            rate : '4'},
        {Src : p6, firstName : "nilantha", lastName : "dasun", email : "saman@gmail.com", joinedDate : '2022-08-18', properties: '1',
            rate : '6'}
    ]

    return (
        <Col className='top-selling-products'>
            <Row className='mx-0 search-part mt-3 pt-3 '>
                <Col className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                           onChange={event => {setNameSearchTerm(event.target.value)}}
                    />
                </Col>

                <Col className='text-right'>
                    <select className='search-by-name p-2'  onChange={event => {setRateSearchTerm(event.target.value)}}> 
                        <option  hidden value="none"> Search by ratings ...</option>
                        <option>1</option>
                        <option>2</option> 
                        <option>3</option>
                        <option>4</option>
                        <option>4+</option>
                    </select>
                </Col>
                <Col className='text-center ps-5 ms-5'>
                    <input className='search-by-name p-2' type="date"
                           onChange={event => {setDateSearchTerm(event.target.value)}}
                    />
                </Col>
                <Col className='text-right'></Col>
                <Col className='text-right'></Col>
            </Row>

            <Row className='mx-0 top-selling-products-titles mt-3'>
                <Col className='px-0 ps-3' xs = {3}>
                    <h6>Name</h6>
                </Col>

                <Col className='px-0 ' xs = {3}>
                    <h6>Email</h6>
                </Col>

                <Col className='px-0 ' xs = {2}>
                    <h6>Joined Date</h6>
                </Col>

                <Col className='px-0 ' xs = {1}>
                    <h6>Properties</h6>
                </Col>
            </Row>

             <Row className='mx-0 px-0 data-part'> 

                    {details_array.filter((val) => {
                    // without searching
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "")
                    {
                        return val
                    } 
                    // search by name
                    else if ((val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) && rateSearchTerm == "" && dateSearchTerm == "")
                    {
                        return val
                    }
                    // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "")
                    {
                        if(rateSearchTerm == val.rate)
                        {
                            return val
                        }
                        else if(rateSearchTerm === '4+' && val.rate > 4)
                        {
                            return val
                        }
                    }
                    //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm=="" && dateSearchTerm == val.joinedDate)
                    {
                        return val
                    }
                    //search by date + rate + name
                    else if (rateSearchTerm == val.rate && dateSearchTerm == val.joinedDate && (val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) )
                    {
                        return val
                    }
                    // search by date + name
                    else if (rateSearchTerm =="" && dateSearchTerm == val.joinedDate && (val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) ) )
                    {
                        return val
                    }
                    //search by rate + name
                    else if (dateSearchTerm == "" && (val.firstName.toLowerCase().includes(nameSearchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(nameSearchTerm.toLowerCase()) )  )
                    {
                        if(rateSearchTerm == val.rate)
                        {
                            return val
                        }
                        else if(rateSearchTerm === '4+' && val.rate > 4)
                        {
                            return val
                        }
                    }
                    //search by date + rate
                    else if(nameSearchTerm == "" && dateSearchTerm == val.joinedDate)
                    {
                        if(rateSearchTerm == val.rate)
                        {
                            return val
                        }
                        else if(rateSearchTerm === '4+' && val.rate > 4)
                        {
                            return val
                        }
                    }
                }).map((val, key) => {
                    return (
                        <Row className='data mx-0 px-0 ' key={key}>
                            <RenterRow
                                Src = {val.Src}
                                firstName = {val.firstName}
                                lastName = {val.lastName}
                                email = {val.email}
                                joinedDate = {val.joinedDate}
                                properties= {val.properties}
                                rate = {val.rate}
                            />
                        </Row>
                    )
                })}
             </Row> 
        </Col>
    )
}

export default RenterTable