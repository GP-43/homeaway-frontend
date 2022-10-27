import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import axios from "axios";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnLogin = (event) => {
        event.preventDefault();
        const data = { email: email, password: password };
        axios.post("http://localhost:4000/auth/login", data).then((response) => {
            //console.log(response)
            if (response.data.state === 1) {
                sessionStorage.setItem("accessToken", JSON.stringify(response.data.data));
                sessionStorage.setItem("currentuserrole", JSON.stringify({ isRenter: false }));
                sessionStorage.setItem("currentuseremail", JSON.stringify({ email:email }));
                const userDetails = JSON.parse(sessionStorage.getItem('accessToken'));
                if (userDetails.role == 2 || userDetails.role == 3) {
                    swal("Good job!", "Welcome to HomeAway", "success");
                    window.location.replace("/user");
                } else if (response.data.data.role == 1) {
                    swal("Good job!", "Welcome to HomeAway", "success");
                    window.location.replace("/admin/dashboard");
                }
            } else {
                // window.alert("Invalid User. Plz register");
                swal({
                    title: "Invalid User Login",
                    text: "Check your email and password or register",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
            }
        });
    }

    return (
        <Container>
            <Row className='login-page'>
                <Col md={7} className='px-0'>
                    <Formik
                        initialValues={{ email: "", password: "" }}

                        validationSchema={yup.object().shape({
                            email: yup.string()
                                .email()
                                .required("Required"),
                            password: yup.string()
                                .required("No password provided.")
                        })}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                //console.log("Logging in", values);
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {(formik) => (
                            <Form className='d-flex align-items-center' onSubmit={handleOnLogin}>
                                <div className='w-100'>
                                    <h3>Sign in to HomeAway</h3>
                                    <Form.Text className="text-muted">
                                        use your email as username.
                                    </Form.Text>
                                    <InputGroup className="my-3 data-field" id="formUserName">
                                        <InputGroup.Text className='data-field-icon'
                                            id="basic-addon1"><FiMail /></InputGroup.Text>
                                        <Form.Control type="email" placeholder="Email" required
                                            onChange={(event) => {
                                                setEmail(event.target.value)
                                            }}
                                        //{...formik.getFieldProps("email")}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3 data-field" id="formBasicPassword">
                                        <InputGroup.Text className='data-field-icon'
                                            id="basic-addon1"><FiLock /></InputGroup.Text>
                                        <Form.Control type="password" placeholder="Password" required
                                            onChange={(event) => {
                                                setPassword(event.target.value)
                                            }}
                                        //{...formik.getFieldProps("password")}
                                        />
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
                        )}
                    </Formik>
                </Col>
                <Col md={5} className='animation-shield d-flex align-items-center justify-content-center'>
                    <div>
                        <h1 className='mb-2'>Hello, Friend!</h1>
                        <p className='mb-3'>Enter your personal details and <br />start journey with us</p>
                        <Link to={'/signup'}>
                            <Button type="sub" className="btn btn-outline-light">SIGN UP</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;