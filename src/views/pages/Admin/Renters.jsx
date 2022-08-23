import React from 'react';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import RenterTable from "../../../components/admin/renters/RenterTable";
import HeaderCard from "../../../components/admin/renters/HeaderCardRenter";
import RenterDetailCard from "../../../components/admin/renters/RenterDetailCard";
import PlaceDetailCard from "../../../components/admin/renters/PlaceDetailCard";
import AvailPlaceDetailCard from "../../../components/admin/renters/AvailablePlaceDetailCard";
import UserDetails from '../../../components/admin/occupants/UserDetails';
//import Places from "../../../components/admin/renters/Places"

//images
import p1 from "../../../assets/images/admin/renter/p1.jpg";
import p2 from "../../../assets/images/admin/renter/p2.jpg";
import p3 from "../../../assets/images/admin/renter/p3.jpg";
import p4 from "../../../assets/images/admin/renter/p4.jpg";
import p5 from "../../../assets/images/admin/renter/p5.jpg";
import p6 from "../../../assets/images/admin/renter/p6.jpg";
import p7 from "../../../assets/images/admin/renter/p7.jpg";


function Renters() {

    const [selectedUser, setSelectedUser] = useState({
        Src: p7, firstName: "saman", lastName: "kumara", email: "saman@gmail.com", joinedDate: '2022-07-15', properties: '1',
        rate: '2', telenumber: "0112123123", IDno: '992544092V', Address: 'No.78, samanala Mawatha, Malabe.'
    });

    const userDetailsArray = [
        {
            Src: p7, firstName: "saman", lastName: "kumara", email: "saman@gmail.com", joinedDate: '2022-07-15', properties: '1',
            rate: '2', telenumber: "0112123123", IDno: '992544092V', Address: 'No.78, samanala Mawatha, Malabe.'
        },
        {
            Src: p1, firstName: "namal", lastName: "perera", email: "saman@gmail.com", joinedDate: '2022-08-15', properties: '4',
            rate: '4', telenumber: "0112257961", IDno: '992525624V', Address: 'No.120, samanala Mawatha, Malabe.'
        },
        {
            Src: p2, firstName: "amal", lastName: "saman", email: "saman@gmail.com", joinedDate: '2022-08-16', properties: '2',
            rate: '4', telenumber: "0112148962", IDno: '992544585V', Address: 'No.63, samanala Mawatha, Malabe.'
        },
        {
            Src: p3, firstName: "ruwan", lastName: "pushpa", email: "saman@gmail.com", joinedDate: '2022-08-17', properties: '3',
            rate: '3', telenumber: "0112726301", IDno: '992542576V', Address: 'No.9, samanala Mawatha, Malabe.'
        },
        {
            Src: p4, firstName: "sandum", lastName: "nimal", email: "saman@gmail.com", joinedDate: '2022-08-18', properties: '1',
            rate: '1', telenumber: "0112785014", IDno: '992547315V', Address: 'No.103, samanala Mawatha, Malabe.'
        },
        {
            Src: p5, firstName: "pawan", lastName: "pahan", email: "saman@gmail.com", joinedDate: '2022-08-19', properties: '2',
            rate: '4', telenumber: "0112932510", IDno: '992547892V', Address: 'No.56, samanala Mawatha, Malabe.'
        },
        {
            Src: p6, firstName: "nilantha", lastName: "dasun", email: "saman@gmail.com", joinedDate: '2022-08-18', properties: '1',
            rate: '6', telenumber: "0112857361", IDno: '992510287V', Address: 'No.2, samanala Mawatha, Malabe.'
        }
    ]

    return (
        <Container>

            <Row className="mx-0">
                <Col className="px-0">
                    <HeaderCard />
                </Col>
            </Row>

            <Row className="testing-2">
                <Col xs={8}>
                    <Row className="testing-1">

                        <Col >
                            <RenterDetailCard />
                        </Col>

                        <Col >
                            <PlaceDetailCard />
                        </Col>

                        <Col >
                            <AvailPlaceDetailCard />
                        </Col>

                    </Row>

                    <Row className="mx-0 user-list-card">
                        <Col className="px-0 Renters-top-selling-products-part">
                            <RenterTable details_array={userDetailsArray} setSelectedUser={setSelectedUser} />
                        </Col>
                    </Row>



                </Col>
                <Col>
                    <Row className="mx-0"><UserDetails userDetailsObj={selectedUser} /></Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Renters