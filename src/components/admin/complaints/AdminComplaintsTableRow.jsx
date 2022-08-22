import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
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


function AdminComplaintsTableRow(props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Row className='admin-complain-table-row mx-0 px-0'>
            <Col xs={1} className="px-0">
                <p className='admin-complain-table-row-text'>{props.caseNo}</p>
            </Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.subject}</p>
            </Col>
            <Col xs={1} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderId}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderName}</p></Col>
            <Col xs={3} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderEmail}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.date} <br /> {props.time}</p></Col>
            <Col xs={1} className="px-0">
                <button className='admin-complaint-delete-btn px-3 pb-0' variant="primary" onClick={() => setModalShow(true)}>
                    <p>DELETE</p>
                </button>
                
                <DeletePopup show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
        </Row>
    );
}
export default AdminComplaintsTableRow