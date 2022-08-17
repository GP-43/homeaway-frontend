import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

function ProgressBar(props) {
    return(
            <Row>
                <Col className={(props.First && props.Second) ? "round-after-click" : "round-before-click" } xs = {1}>
                    <Spinner animation="border" className={(props.First && props.Second) && "span-display-none" } />
                </Col>
                <Col>
                    <hr />
                </Col>
                <Col>
                <Spinner animation="border" />
                </Col>
            </Row>
        
    )
}

export default ProgressBar