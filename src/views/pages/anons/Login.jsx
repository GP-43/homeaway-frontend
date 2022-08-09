import React from "react";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FiLock, FiMail} from "react-icons/fi";

function Login() {
    return (
        <Container>
            <Row className='login-page'>
                <Col md={7} className='px-0'>
                    <Form className='d-flex align-items-center'>
                        <div className='w-100'>
                            <h3 className=''>Sign in to Shopping Cart</h3>
                            <Form.Text className="text-muted">
                                use your email as username.
                            </Form.Text>
                            <InputGroup className="my-3 data-field" id="formUserName">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiMail/></InputGroup.Text>
                                <Form.Control type="email" placeholder="Email" required/>
                            </InputGroup>
                            <InputGroup className="mb-3 data-field" id="formBasicPassword">
                                <InputGroup.Text className='data-field-icon'
                                                 id="basic-addon1"><FiLock/></InputGroup.Text>
                                <Form.Control type="password" placeholder="Password" required/>
                            </InputGroup>
                            <Form.Group className="mb-3 text-center" controlId="forgottenPassword">
                        <span>
                            <Link to={"../ForgotPassWord"} className='forgot-pass-label'>Forgot your password?</Link>
                        </span>
                            </Form.Group>
                            <Button className="sign-in-btn" type="submit">
                                SIGN IN
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className='animation-shield d-flex align-items-center justify-content-center'>
                    <div>
                        <h1 className='mb-2'>Hello, Friend!</h1>
                        <p className='mb-3'>Enter your personal details and <br/>start journey with us</p>
                        <Link to={'/signup'}>
                            <Button type="button" className="btn btn-outline-light">SIGN UP</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;