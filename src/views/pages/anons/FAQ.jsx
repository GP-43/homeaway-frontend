import React from 'react';
import {Col,Row,Container} from 'react-bootstrap'
import FAQ_question from "../../../components/anons/faq/FAQ_question";
function FAQ() {
    return (
        <Container>
            <Col className='my-lg-5'>
                <FAQ_question/>
                <FAQ_question/>
            </Col>
        </Container>
    )
}
export default FAQ;