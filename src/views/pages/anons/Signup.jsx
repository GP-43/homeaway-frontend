import React from "react";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FiLock, FiMail, FiPhone, FiUser} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";

function Signup() {
    return (
        <Container>
            <Row className='signup-page'>
                <Col md={5} className='animation-shield d-flex align-items-center justify-content-center'>
                    <div>
                        <h1 className='mb-3'>Welcome Back!</h1>
                        <p className='mb-4'>To keep connect with us please<br/>login with your personal details</p>
                        <Link to={'/login'}>
                            <Button type="button" className="btn btn-outline-light">SIGN IN</Button>
                        </Link>
                    </div>
                </Col>
                <Col md={7} className='px-0'>
                    <Form className='d-flex align-items-center'>
                        <div className='w-100'>
                            <h3>Create Account</h3>
                            <Form.Text className="text-muted">
                                We'll never share your details with anyone else.
                            </Form.Text>
                            <InputGroup className="my-3 data-field" id="formBasicEmail">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiMail/></InputGroup.Text>
                                <Form.Control type="email" placeholder="Email" required/>
                            </InputGroup>
                            <InputGroup className="mb-3 data-field" id="formBasicName">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiUser/></InputGroup.Text>
                                <Form.Control type="text" placeholder="Name" required pattern="[A-Za-z]+"/>
                            </InputGroup>
                            <InputGroup className="mb-3 data-field" id="formBasicContact">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiPhone/></InputGroup.Text>
                                <Form.Control type="text" placeholder="Contact No" required pattern='^[0][\d]{9}$'/>
                            </InputGroup>
                            {/*location input need to goes here. have to implement*/}
                            <InputGroup className="mb-3 data-field" id="formBasiclocation">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><GrLocation/></InputGroup.Text>
                                <Form.Control type="text" placeholder="Location" required/>
                            </InputGroup>
                            <InputGroup className="mb-3 data-field" id="formBasicPassword">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiLock/></InputGroup.Text>
                                <Form.Control type="password" placeholder="Password" required
                                              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/>
                                {/* Minimum eight characters, at least one letter and one number:*/}
                            </InputGroup>
                            <Button className='signup-button mb-3' type="submit">
                                SIGN UP
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;