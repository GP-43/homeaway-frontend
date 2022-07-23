import React from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PopupForm from "./PopupForm";

function GuestsPopup(props) {

    const guestsCount = props.guestCount;
    const guestsNumbers = [];

    for (let i = 1; i < guestsCount; i++) {
        guestsNumbers.push(i);
    }

    const guests = guestsNumbers.map((guestsNumbers) => <PopupForm key={guestsNumbers.toString()}
                                                                   value={guestsNumbers}/>);

    return (
        <Modal show={props.show} onHide={props.handleClose} size={'md'} className='bg-transparent'>
            <Modal.Header closeButton>
                <Modal.Title>Guests</Modal.Title>
            </Modal.Header>
            <Modal.Body className='py-0'>
                {guests}
            </Modal.Body>
            <Modal.Footer className='py-1'>
                <Button variant="primary" onClick={props.handleClose} className='w-25'>
                    Save
                </Button>
                <Button variant="secondary" onClick={props.handleClose} className='w-25'>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GuestsPopup;