import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {FiTwitter,FiPhoneCall} from "react-icons/fi";
import { AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <Card className="bg-dark text-center text-light occupent-footer w-100 mx-0">
            <Card.Header as="h3" className="bg-dark mt-2 mb-0 pt-4 py-0 pb-0">HomeAway</Card.Header>
            <Card.Body className="bg-dark">
                <Card.Title as="h6" className="bg-dark mb-4 mt-0 pt-0">HomeAway is a website where you can find a place with
                 facilities to gather and work.</Card.Title>
                <Card.Text className="bg-dark mb-4 mx-3">
                    <FiTwitter className="bg-dark footer-icon mx-1"/>
                    <AiOutlineFacebook className="bg-dark footer-icon mx-1"/>
                    <AiOutlineLinkedin className="bg-dark footer-icon mx-1"/>
                    <FiPhoneCall className="bg-dark footer-icon mx-1"/>
                    <GrMail className="bg-dark footer-icon mx-1"/>
                </Card.Text>
                <Button variant="outline-light dark button mx-1" as={Link} to='/user/'>Home</Button>
                <Button variant="outline-light dark button mx-1" as={Link} to='/user/userbookings'>Booking</Button>
                <Button variant="outline-light dark button mx-1" as={Link} to='/user/'>Terms</Button>
            </Card.Body>
            <Card.Footer className="pb-4">&copy; {' '} {new Date().getFullYear()} HomeAway HomeAway - All Right Reserved.</Card.Footer>
        </Card>
    );
}

export default Footer;