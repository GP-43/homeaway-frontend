import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RenterRow from "./RenterRow";
import { useState } from 'react';
const base_url = process.env.REACT_APP_BASE_URL;

function RenterTable({ details_array, setSelectedUser, fetchRenters }) {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [dateSearchTerm, setDateSearchTerm] = useState('')
    const [rateSearchTerm, setRateSearchTerm] = useState('')

    return (
        <Col className='top-selling-products'>
            <Row className='mx-0 search-part mt-3 pt-3 '>
                <Col className='px-0 ps-3'>
                    <input className='search-by-name p-2' type="text" placeholder='Search...'
                        onChange={event => { setNameSearchTerm(event.target.value) }}
                    />
                </Col>

                <Col className='text-right'>
                    <select className='search-by-name p-2' onChange={event => { setRateSearchTerm(event.target.value) }}>
                        <option hidden value="none"> Search by ratings ...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>4+</option>
                        <option>none</option>
                    </select>
                </Col>
                <Col className='text-center ps-5 ms-5'>
                    <input className='search-by-name p-2' type="date"
                        onChange={event => { setDateSearchTerm(event.target.value) }}
                    />
                </Col>
                <Col className='text-right'></Col>
                <Col className='text-right'></Col>
            </Row>

            <Row className='mx-0 top-selling-products-titles mt-3'>
                <Col className='px-0 ps-3' xs={1}>
                </Col>
                <Col className='px-0 text-center' xs={2}>
                    <h6>Name</h6>
                </Col>

                <Col className='px-0 text-center' xs={3}>
                    <h6>Email</h6>
                </Col>

                <Col className='px-0 text-center' xs={2}>
                    <h6>Joined Date</h6>
                </Col>

                <Col className='px-0 text-center ' xs={1}>
                    <h6>Properties</h6>
                </Col>
            </Row>

            <Row className='mx-0 px-0 data-part text-center'>

                {details_array.filter((val, index) => {
                    //without searching
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "") {
                        return val
                    }
                    // search by name
                    else if ((val.name.toLowerCase().includes(nameSearchTerm.toLowerCase())) && rateSearchTerm == "" && dateSearchTerm == "") {
                        return val
                    }
                    //clear rating search
                    else if (rateSearchTerm == "none") {
                        return val
                    }
                    // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "") {
                        if (rateSearchTerm == val.rate) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rate > 4) {
                            return val
                        }
                    }
                    //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == val.joinedDate) {
                        return val
                    }
                    //search by date + rate + name
                    else if (dateSearchTerm == val.joinedDate && (val.name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        if (rateSearchTerm == val.rating) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rating > 4) {
                            return val
                        }
                    }
                    // search by date + name
                    else if (rateSearchTerm == "" && dateSearchTerm == val.joinedDate && (val.name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return val
                    }
                    //search by rate + name
                    else if (dateSearchTerm == "" && (val.name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        if (rateSearchTerm == val.rate) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rate > 4) {
                            return val
                        }
                    }
                    //search by date + rate
                    else if (nameSearchTerm == "" && dateSearchTerm == val.joinedDate) {
                        if (rateSearchTerm == val.rate) {
                            return val
                        }
                        else if (rateSearchTerm === '4+' && val.rate > 4) {
                            return val
                        }
                    }
                }).map((val, index) => {
                    return (
                        <Row className='data mx-0 px-0 ' key={index}>
                            <RenterRow
                                //Src={val.Src}
                                id={val.id}
                                name={val.name}
                                Src={`${base_url}/renters/` + val.image}
                                email={val.email}
                                joinedDate={val.joinedDate}
                                properties={val.properties}
                                rate={val.rate}

                                rowUserObj={val}
                                setSelectedUser={setSelectedUser}
                                fetchRenters={fetchRenters}


                            />
                        </Row>
                    )
                })}
            </Row>
        </Col>
    )
}

export default RenterTable