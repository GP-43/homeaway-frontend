import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import { Outlet,useNavigate } from 'react-router-dom';
import NavBar from "../components/user/navbar/NavBar";
import { useEffect } from "react";

function HomeAwayUser() {
    const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
    const isAuthenticated = userDetails ? true : false;
    const navigate = useNavigate();

    return (
        <div className='user-home-bg-color'>
            <Container>
                <Row className="mx-0">
                    <Col className="px-0">
                        <NavBar/>
                    </Col>
                </Row>
            </Container>
            <Outlet />
            <Row className="mx-0">
                <Col className="px-0">
                    <Footer />
                </Col>
            </Row>
        </div>
    );
}

export default HomeAwayUser;