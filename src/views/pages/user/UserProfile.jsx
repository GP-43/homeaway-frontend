import React from 'react';
import {Col, Row} from "react-bootstrap";
import icon1 from "../../../assets/images/profile/Vector.png"

//show password function
function showPassword() {
    var x = document.getElementById("showPassword1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function UserProfile() {
    return (
        <>
        <Row>
            <Col className='profile-picture ms-5 mt-3 mb-3' lg = {3}>
             <img src={icon1} alt="" />    
            </Col>
            <Col>
            <Row>
                <h1>
                    Thushan Dananjaya
                </h1>
            </Row>
            <Row>
                <h4>
                    3.5 
                </h4>
            </Row>
            </Col>
        </Row>

        <Col>
        <Row className='m-3'>
            <Col lg = {4}>
                <h5>Email :</h5>
            </Col>
            <Col lg = {8} className="profile-data-fieled">
                <input type="text" value="Thushan Dananjaya" className='profile-data-fieled-input'/>
            </Col>
        </Row>
        <Row className='m-3'>
            <Col lg = {4}>
                <h5>Location :</h5>
            </Col>
            <Col lg = {8} >

            </Col>
        </Row>
        <Row className='m-3'>
            <Col lg = {4}>
                <h5>Contact No :</h5></Col>
            <Col lg = {8} className="profile-data-fieled">
                <input type="text" value="0781102052" className='profile-data-fieled-input'/>
            </Col>
        </Row>
        <Row className='m-3'>
            <Col lg = {4}>
                <h5>Password :</h5></Col>
            <Col lg = {8} className="profile-data-fieled">
                <input type="password" value="Thushan12345@" className='profile-data-fieled-input' id='showPassword1'/>
                
               <input type="checkbox" onclick="showPassword()" /> show password
            </Col>
        </Row>
        </Col>
        </>
    );
}

export default UserProfile;