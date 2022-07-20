import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {FiTwitter,FiPhoneCall} from "react-icons/fi";
import { AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function OccupantFooter() {
    return (
        
        <Card className="bg-dark text-center text-light occu-footer w-100 mx-0">
            <Card.Header as="h3" className="bg-dark mt-2 mb-0 py-0">HomeAway</Card.Header>
            <Card.Body className="bg-dark">
                <Card.Title as="h6" className="bg-dark mb-4 mt-0">HomeAWay is a website where you can find a place with facilities to gather and work.</Card.Title>
                <Card.Text className="bg-dark mb-4">
                    <FiTwitter className="bg-dark footer-icon"/>{' '}
                    <AiOutlineFacebook className="bg-dark footer-icon"/>{' '}
                    <AiOutlineLinkedin className="bg-dark footer-icon"/>{' '}
                    <FiPhoneCall className="bg-dark footer-icon"/>{' '}
                    <GrMail className="bg-dark footer-icon"/>
                </Card.Text>
                <Button variant="outline-light dark button">Home</Button>{' '}
                <Button variant="outline-light dark button">Booking</Button>{' '}
                <Button variant="outline-light dark button">Terms</Button>
            </Card.Body>
            <Card.Footer>&copy;{new Date().getFullYear()} HomeAway HomeAway - Allright Resesrved</Card.Footer>
        </Card>
    );
}

export default OccupantFooter;