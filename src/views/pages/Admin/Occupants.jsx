import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TopSellingProducts from "../../../components/admin/occupants/TopSellingProducts";

function Occupants() {
    return (
        <Col className = "px-0 occupants-top-selling-products-part">
            <TopSellingProducts/>
        </Col>
   
    )
}

export default Occupants