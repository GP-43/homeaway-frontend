import React from 'react';
import { Row, Col } from 'react-bootstrap';
// for popup
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//popup function
function DeletePopup(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirm Deletion
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <p>Do you want delete? This action cannot be undone.</p>
            </Modal.Body>
            <Modal.Footer >
                <Button className='confirm-delete btn-danger'>Delete</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}


//data row

function RenterRow(props) {



    const [modalShow, setModalShow] = React.useState(false);

    return (

        <Row className='row-top-products mx-0 px-0 mb-2 mt-3'>
            <Col className='px-0 ps-3' xs={1}>
                <img src={props.Src} className="row-top-products-img" alt="renter" />
            </Col>

            <Col className='ps-4 pe-0 name' xs={2}>
                <Row>
                    {props.name}
                </Row>
                <Row className='ps-2 rate'>
                    {props.rate}
                </Row>
            </Col>

            <Col className='px-0 ps-1 ms-2' xs={3}>
                {props.email}
            </Col>

            <Col className='px-0' xs={2}>
                {props.joinedDate}
            </Col>

            <Col className='px-4 me-0' xs={1}>
                {props.properties}
            </Col>

            <Col className='px-0 ' xs={1}>
                <button className='preview-btn px-0 pb-0' variant="primary" onClick={() => { props.setSelectedUser(props.rowUserObj) }}>
                    <p>PREVIEW</p>
                </button>
            </Col>

            <Col className='px-4 ms-2 ' xs={1}>
                <button className='delete-btn px-0 pb-0' variant="primary" onClick={() => setModalShow(true)}>
                    <p>DELETE</p>
                </button>

                <DeletePopup show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
        </Row>
    )
}

export default RenterRow