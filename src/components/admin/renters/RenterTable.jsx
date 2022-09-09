import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RenterRow from "./RenterRow";
import { useState } from 'react';

function RenterTable({ details_array, setSelectedUser }) {
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
                <Col className='px-0 ps-2' xs={2}>
                    <h6>Name</h6>
                </Col>

                <Col className='px-0 ps-1' xs={3}>
                    <h6>Email</h6>
                </Col>

                <Col className='px-0 ' xs={2}>
                    <h6>Joined Date</h6>
                </Col>

                <Col className='px-0 ' xs={1}>
                    <h6>Properties</h6>
                </Col>
            </Row>

            <Row className='mx-0 px-0 data-part'>

                {details_array.filter((index) => {
                    // without searching
                    if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == "") {
                        return index
                    }
                    // search by name
                    else if ((details_array[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase())) && rateSearchTerm == "" && dateSearchTerm == "") {
                        return index
                    }
                    //clear rating search
                    else if (rateSearchTerm == "none") {
                        return index
                    }
                    // search by rate
                    else if (nameSearchTerm == "" && dateSearchTerm == "") {
                        if (rateSearchTerm == details_array[index].rate) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details_array[index].rate > 4) {
                            return index
                        }
                    }
                    //search by date
                    else if (nameSearchTerm == "" && rateSearchTerm == "" && dateSearchTerm == details_array[index].joinedDate) {
                        return index
                    }
                    //search by date + rate + name
                    else if (rateSearchTerm == details_array[index].rate && dateSearchTerm == details_array[index].joinedDate && (details_array[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return index
                    }
                    // search by date + name
                    else if (rateSearchTerm == "" && dateSearchTerm == details_array[index].joinedDate && (details_array[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        return index
                    }
                    //search by rate + name
                    else if (dateSearchTerm == "" && (details_array[index].name.toLowerCase().includes(nameSearchTerm.toLowerCase()))) {
                        if (rateSearchTerm == details_array[index].rate) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details_array[index].rate > 4) {
                            return index
                        }
                    }
                    //search by date + rate
                    else if (nameSearchTerm == "" && dateSearchTerm == details_array[index].joinedDate) {
                        if (rateSearchTerm == details_array[index].rate) {
                            return index
                        }
                        else if (rateSearchTerm === '4+' && details_array[index].rate > 4) {
                            return index
                        }
                    }
                }).map((key, index) => {
                    return (
                        <Row className='data mx-0 px-0 ' index={index}>
                            <RenterRow
                                //Src={details_array[index].Src}
                                name={details_array[index].name}
                                email={details_array[index].email}
                                joinedDate={details_array[index].joinedDate}
                                properties={details_array[index].properties}
                                rate={details_array[index].rate}

                                rowUserObj={details_array[index]}
                                setSelectedUser={setSelectedUser}


                            />
                        </Row>
                    )
                })}
            </Row>
        </Col>
    )
}

export default RenterTable