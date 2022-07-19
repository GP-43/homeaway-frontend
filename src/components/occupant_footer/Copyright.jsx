import React from "react";
import {Row} from "react-bootstrap";


function Copyright() {
    return (
        <Row>
            &copy;{new Date().getFullYear()} HomeAway HomeAway - Allright Resesrved
        </Row>
    );
}

export default Copyright;