import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {FiTwitter,FiPhoneCall} from "react-icons/fi";
import { AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

function OccupantFooter() {
    return (
        
        <Card className="bg-dark text-center text-light" style={{ width: '100%' }}>
            <Card.Header as="h3" className="bg-dark">HomeAway</Card.Header>
            <Card.Body className="bg-dark">
                <Card.Title as="h6" className="bg-dark">HomeAWay is a website where you can find a place with facilities to gather and work.</Card.Title>
                <Card.Text className="bg-dark">
                    <FiTwitter className="bg-dark" style={{ width: '45px', height:'37px' }}/>{' '}
                    <AiOutlineFacebook className="bg-dark" style={{ width: '45px', height:'37px' }}/>{' '}
                    <AiOutlineLinkedin className="bg-dark" style={{ width: '45px', height:'37px' }}/>{' '}
                    <FiPhoneCall className="bg-dark" style={{ width: '45px', height:'37px' }}/>{' '}
                    <GrMail className="bg-dark" style={{ width: '45px', height:'37px' }}/>
                </Card.Text>
                <Button variant="outline-light dark ">Home</Button>{' '}
                <Button variant="outline-light dark ">Booking</Button>{' '}
                <Button variant="outline-light dark ">Terms</Button>
            </Card.Body>
            <Card.Footer>&copy;{new Date().getFullYear()} HomeAway HomeAway - Alright Resesrved</Card.Footer>
        </Card>
    );
}

export default OccupantFooter;