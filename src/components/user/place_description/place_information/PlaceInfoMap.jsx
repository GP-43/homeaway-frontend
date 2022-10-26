import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Map from '../../add_new_rening/Map';

function PlaceInfoMap() {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <h3>Location</h3>
                <Map />
            </Col>

        </Row>
    );
}

export default PlaceInfoMap;
