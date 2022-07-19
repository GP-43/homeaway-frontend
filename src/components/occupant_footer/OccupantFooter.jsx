import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {FiTwitter,FiPhoneCall} from "react-icons/fi";
import { AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function OccupantFooter() {
    return (
        
        <Card className="bg-dark text-center text-light occu-footer">
            <Card.Header as="h3" className="bg-dark">HomeAway</Card.Header>
            <Card.Body className="bg-dark">
                <Card.Title as="h6" className="bg-dark">HomeAWay is a website where you can find a place with facilities to gather and work.</Card.Title>
                <Card.Text className="bg-dark">
                    <FiTwitter className="bg-dark footer-icon"/>{' '}
                    <AiOutlineFacebook className="bg-dark footer-icon"/>{' '}
                    <AiOutlineLinkedin className="bg-dark footer-icon"/>{' '}
                    <FiPhoneCall className="bg-dark footer-icon"/>{' '}
                    <GrMail className="bg-dark footer-icon"/>
                </Card.Text>
                <Button variant="outline-light dark ">Home</Button>{' '}
                <Button variant="outline-light dark ">Booking</Button>{' '}
                <Button variant="outline-light dark ">Terms</Button>
            </Card.Body>
            <Card.Footer>&copy;{new Date().getFullYear()} HomeAway HomeAway - Allright Resesrved</Card.Footer>
        </Card>
    );
}

export default OccupantFooter;