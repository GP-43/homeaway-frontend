import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import GuestsPopup from "./GuestsPopup";
import Button from "react-bootstrap/Button";

function ChooseSection() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<Row>
            <Col className='px-0'>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
                <GuestsPopup
                    show={show}
                    handleClose={handleClose}
                />
            </Col>
        </Row>

    );
}

export default ChooseSection;