import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

function ProgressBar(props) {
    return(
            <Row>
                <Col className={props.First ? "round-after-click" : "round-before-click" } xs = {1}>
                    <Spinner animation="border" className={props.First && "span-display-none" } />
                </Col>
                <Col className="p-0 m-auto line-container" xs = {1}>
                    <hr />
                </Col>
                <Col className={(props.First && props.Second) ? "round-after-click" : "round-before-click" } xs = {1}>
                <Spinner animation="border" className={(! props.First || props.Second) && "span-display-none" } />
                </Col>
                <Col className="p-0 m-auto line-container" xs = {1}>
                    <hr className="line-after-click"/>
                </Col>
                <Col className={(props.First && props.Second && props.Third) ? "round-after-click" : "round-before-click" } xs = {1}>
                <Spinner animation="border" className={(! props.Second || props.Third) && "span-display-none" } />
                </Col>
                <Col xs = {9}></Col>
            </Row>
        
    )
}

export default ProgressBar