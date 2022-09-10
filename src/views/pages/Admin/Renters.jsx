import React from 'react';
import axois from "axios";
import { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import RenterTable from "../../../components/admin/renters/RenterTable";
import HeaderCard from "../../../components/admin/renters/HeaderCardRenter";
import RenterDetailCard from "../../../components/admin/renters/RenterDetailCard";
import PlaceDetailCard from "../../../components/admin/renters/PlaceDetailCard";
import AvailPlaceDetailCard from "../../../components/admin/renters/AvailablePlaceDetailCard";
import UserDetails from '../../../components/admin/renters/UserDetails';
const base_url = process.env.REACT_APP_BASE_URL;

//import Places from "../../../components/admin/renters/Places"

//images
// import p1 from "../../../assets/images/admin/renter/p1.jpg";
// import p2 from "../../../assets/images/admin/renter/p2.jpg";
// import p3 from "../../../assets/images/admin/renter/p3.jpg";
// import p4 from "../../../assets/images/admin/renter/p4.jpg";
// import p5 from "../../../assets/images/admin/renter/p5.jpg";
// import p6 from "../../../assets/images/admin/renter/p6.jpg";
// import p7 from "../../../assets/images/admin/renter/p7.jpg";


function Renters() {

    const [details, setDetails] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});

    function fetchRenters() {
        axois
            .get(`${base_url}/admin/view/renters`)
            .then((data) => {
                const detail = data.data;
                setDetails(detail);
                setSelectedUser(detail[0]);
                //setoccupantData(false)
                console.log(detail);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect((event) => {
        fetchRenters();
    }, []);

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
                            <RenterTable details_array={details} setSelectedUser={setSelectedUser} fetchRenters={fetchRenters} />
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