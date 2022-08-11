import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OccupantTable from "../../../components/admin/occupants/OccupantTable";

function Occupants() {
    return (
        <Col className = "px-0 occupants-top-selling-products-part">
            <OccupantTable/>
        </Col>
   
    )
}

export default Occupants