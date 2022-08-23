import React from "react";
import { Row, Col} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

function ProgressBar(props) {
    return(
        
            <Row className="d-flex justify-content-start ms-1">   
                <h3 className="p-0">Add New Rent</h3>            
                <Col className={props.FirstNext ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1}  >
                    <Spinner animation="border" className={props.FirstNext && "span-display-none" } />
                </Col>
                <Col className="p-0 my-auto" lg = {2}  md = {3} xs = {3} >
                    <hr className={props.FirstNext ? "line-after-click" : "line-before-click"} />
                </Col>
                <Col className={(props.FirstNext && props.SecondNext) ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1} >
                <Spinner animation="border" className={(! props.FirstNext || props.SecondNext) && "span-display-none" } />
                </Col>
                {/* <Col className="p-0 my-auto" lg = {2}  md = {3} xs = {3} >
                    <hr className={props.SecondNext ? "line-after-click" : "line-before-click"} />
                </Col>
                <Col className={(props.FirstNext && props.SecondNext && props.ThirdNext) ? "round-after-click" : "round-before-click" } lg = {1}  md = {1} xs = {1} >
                <Spinner animation="border" className={(! props.SecondNext || props.ThirdNext) && "span-display-none" } />
                </Col> */}
            </Row>
    )
}

export default ProgressBar