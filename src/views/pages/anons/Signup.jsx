import React from "react";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FiLock, FiMail, FiPhone, FiUser} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import axios from "axios";
import * as yup from 'yup';
import {Formik} from 'formik';

const phoneRegExp = /\+[0-9]{1,4}-[0-9]{9}/;

const schema = yup.object().shape({
    email: yup.string().email('Invalid email address')
        .required('Required'),
    name: yup.string().required()
        .max(50, 'Must be 50 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    contact: yup.string().required()
        .matches(phoneRegExp, 'Phone number format: +{country code}-{number}')
        .required('Phone number is required'),
    location: yup.string().required(),
    password: yup.string().required().max(25, 'Must be 25 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    // terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function Signup() {
    const handleOnSubmit = (data) => {
        console.log(data)
            axios.post("http://localhost:4000/signup", data).then(() => {
                console.log("SUCCESS");
            });
    };

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
                    <Formik
                        validationSchema={schema}
                        onSubmit={handleOnSubmit}
                        initialValues={{
                            email: "",
                            name: "",
                            contact: "",
                            location: "",
                            password: "",
                        }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              errors,
                          }) => (
                            <Form className='d-flex align-items-center' noValidate onSubmit={handleSubmit}>
                                <div className='w-100'>
                                    <h3>Create Account</h3>
                                    <Form.Text className="text-muted">
                                        We'll never share your details with anyone else.
                                    </Form.Text>
                                    <InputGroup className="my-3 data-field" id="validationFormik01" hasValidation>
                                        <InputGroup.Text className='data-field-icon'
                                                         id="basic-addon1"><FiMail/></InputGroup.Text>
                                        <Form.Control type="email"
                                                      placeholder="Email"
                                                      aria-describedby="inputGroupPrepend"
                                                      name="email"
                                                      onChange={handleChange}
                                                      value={values.email}
                                                      isInvalid={!!errors.email}
                                        />
                                        {/*<Form.Control.Feedback type="invalid">*/}
                                        {/*    {errors.email}*/}
                                        {/*</Form.Control.Feedback>*/}
                                    </InputGroup>
                                    <InputGroup className="mb-3 data-field" id="formBasicName">
                                        <InputGroup.Text className='data-field-icon'
                                                         id="basic-addon1"><FiUser/></InputGroup.Text>
                                        <Form.Control type="text"
                                                      placeholder="Name"
                                                      aria-describedby="inputGroupPrepend"
                                                      name="name"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.name}
                                                      isInvalid={!!errors.name}
                                        />
                                        {/*<Form.Control.Feedback type="invalid">*/}
                                        {/*    {errors.name}*/}
                                        {/*</Form.Control.Feedback>*/}
                                    </InputGroup>
                                    <InputGroup className="mb-3 data-field" id="formBasicContact">
                                        <InputGroup.Text className='data-field-icon'
                                                         id="basic-addon1"><FiPhone/></InputGroup.Text>
                                        <Form.Control type="text"
                                                      placeholder="Contact No"
                                                      aria-describedby="inputGroupPrepend"
                                                      name="contact"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.contact}
                                                      isInvalid={!!errors.contact}
                                        />
                                        {/*<Form.Control.Feedback type="invalid">*/}
                                        {/*    {errors.contact}*/}
                                        {/*</Form.Control.Feedback>*/}
                                    </InputGroup>
                                    {/*location input need to go here. have to implement*/}
                                    <InputGroup className="mb-3 data-field" id="formBasicLocation">
                                        <InputGroup.Text className='data-field-icon'
                                                         id="basic-addon1"><GrLocation/></InputGroup.Text>
                                        <Form.Control type="text" placeholder="Location"
                                                      onChange={handleChange}
                                                      aria-describedby="inputGroupPrepend"
                                                      name="location"
                                                      onBlur={handleBlur}
                                                      value={values.location}
                                                      isInvalid={!!errors.location}

                                        />
                                        {/*<Form.Control.Feedback type="invalid">*/}
                                        {/*    {errors.location}*/}
                                        {/*</Form.Control.Feedback>*/}
                                    </InputGroup>
                                    <InputGroup className="mb-3 data-field" id="formBasicPassword">
                                        <InputGroup.Text className='data-field-icon'
                                                         id="basic-addon1"><FiLock/></InputGroup.Text>
                                        <Form.Control type="password" placeholder="Password" required
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      aria-describedby="inputGroupPrepend"
                                                      name="password"
                                                      value={values.password}
                                                      isInvalid={!!errors.password}
                                        />
                                        {/*<Form.Control.Feedback type="invalid">*/}
                                        {/*    {errors.password}*/}
                                        {/*</Form.Control.Feedback>*/}
                                        {/* Minimum eight characters, at least one letter and one number:*/}
                                    </InputGroup>
                                    <Button className='signup-button mb-3' type="submit"
                                            onClick={handleOnSubmit}>
                                        SIGN UP
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;