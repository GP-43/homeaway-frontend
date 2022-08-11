import React from 'react';
import { Row, Col } from 'react-bootstrap';
import OccupantRow from "./OccupantRow";
import { useState } from 'react';

//images
import p1 from "../../../assets/images/admin/occupant/p1.jpg";
import p2 from "../../../assets/images/admin/occupant/p2.jpg";
import p3 from "../../../assets/images/admin/occupant/p3.jpg";
import p4 from "../../../assets/images/admin/occupant/p4.jpg";
import p5 from "../../../assets/images/admin/occupant/p5.jpg";
import p6 from "../../../assets/images/admin/occupant/p6.jpg";
import p7 from "../../../assets/images/admin/occupant/p7.jpg";


function OccupantTable() {

    const [searchTerm, setSearchTerm] = useState('')

    const details_array = [{Src : p7, firstName : "saman", lastName : "kumara", email : "saman@gmail.com", joinedDate : '2022-07-15', rate : '2'},
                                {Src : p1, firstName : "namal", lastName : "perera", email : "saman@gmail.com", joinedDate : '2022-08-15', rate : '4'},
                                {Src : p2, firstName : "amal", lastName : "saman", email : "saman@gmail.com", joinedDate : '2022-08-16', rate : '2'},
                                {Src : p3, firstName : "ruwan", lastName : "pushpa", email : "saman@gmail.com", joinedDate : '2022-08-17', rate : '3'},
                                {Src : p4, firstName : "sandum", lastName : "nimal", email : "saman@gmail.com", joinedDate : '2022-08-18', rate : '1'},
                                {Src : p5, firstName : "pawan", lastName : "pahan", email : "saman@gmail.com", joinedDate : '2022-08-19', rate : '5'},
                                {Src : p6, firstName : "nilantha", lastName : "dasun", email : "saman@gmail.com", joinedDate : '2022-08-18', rate : '6'}]

    return (
        <Col className='top-selling-products'>
            <Row className='mx-0 search-part mt-3 pt-3 '>
                <Col className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="date" onChange={event => {setSearchTerm(event.target.value)}}/>
                </Col>
                <Col className='px-0 text-right pe-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>
                </Col>
                <Col className='px-0 text-right pe-3'>
                    <select className='search-by-name p-2'  onChange={event => {setSearchTerm(event.target.value)}}> 
                        <option disabled hidden>Search by ratings ...</option>
                        <option> 1</option>
                        <option> 2</option>
                        <option> 3</option>
                        <option> 4</option>
                        <option> 4+</option>
                    </select>
                </Col>
                
                
            </Row>

            <Row className='mx-0 top-selling-products-titles mt-3'>
                <Col className='px-0 ps-3' xs = {3}>
                    <h6>Name</h6>
                </Col>

                <Col className='px-0 ' xs = {3}>
                    <h6>Email</h6>
                </Col>

                <Col className='px-0 ' xs = {6}>
                    <h6>Joined Date</h6>
                </Col>
            </Row>

             <Row className='mx-0 px-0 data-part'> 

                    {details_array.filter((val) => {
                    if (searchTerm == ""){
                        return val
                    } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        val.joinedDate.includes(searchTerm) ||
                        (val.rate == searchTerm) ) {
                        return val 
                    }
                }).map((val, key) => {
                    return (<Row className='data mx-0 px-0 ' key={key}><OccupantRow Src = {val.Src} firstName = {val.firstName} lastName = {val.lastName} email = {val.email}  joinedDate = {val.joinedDate}  rate = {val.rate} /> </Row>)
                })}
                
             </Row> 
        </Col>




    )
}

export default OccupantTable