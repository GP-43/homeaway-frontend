import React from "react";
import { Row, Col} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

function ProgressBar(props) {
    return(
        
            <Row className="d-flex justify-content-start ms-1">   
                <h3 className="p-0">Add New Rent</h3>            
                <Col className={props.First ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1}  >
                    <Spinner animation="border" className={props.First && "span-display-none" } />
                </Col>
                <Col className="p-0 my-auto" lg = {2}  md = {3} xs = {3} >
                    <hr className={props.First ? "line-after-click" : "line-before-click"} />
                </Col>
                <Col className={(props.First && props.Second) ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1} >
                <Spinner animation="border" className={(! props.First || props.Second) && "span-display-none" } />
                </Col>
                <Col className="p-0 my-auto" lg = {2}  md = {3} xs = {3} >
                    <hr className={props.Second ? "line-after-click" : "line-before-click"} />
                </Col>
                <Col className={(props.First && props.Second && props.Third) ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1} >
                <Spinner animation="border" className={(! props.Second || props.Third) && "span-display-none" } />
                </Col>
            </Row>
        
    )
}

export default ProgressBar