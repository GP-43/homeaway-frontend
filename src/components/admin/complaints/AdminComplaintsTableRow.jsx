import React, { useState, useEffect } from "react";
import axois from "axios";
import { Col, Row, Container } from 'react-bootstrap';
// for popup
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const deleteComplain = () =>{
    
    var Id = localStorage.getItem("ComplainID");
    localStorage.removeItem("ComplainID");
    console.log(Id);
    
    axois
      .get("http://localhost:4000/admin/delete/complaint/"+Id)
      .then(() => {
        console.log("Work");
      })
      .catch((error) => {
        console.log(error);
      });

}

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
            <Button className='confirm-delete btn-danger' onClick={deleteComplain}>Reject</Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function AdminComplaintsTableRow(props) {

    const Id = props.caseNo;

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
                <p className='admin-complain-table-row-text'>{props.complainerId}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.complaineeId}</p></Col>
            {/* <Col xs={3} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderEmail}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.date} <br /> {props.time}</p></Col> */}
            <Col xs={1} className="px-0">
                <button className='admin-complaint-accept-btn px-3 pb-0' variant="primary">
                    <p>ACCEPT</p>
                </button>
                
            </Col>
            <Col xs={1} className="px-0">
                <button className='admin-complaint-delete-btn px-3 pb-0' variant="primary" onClick={() =>
                {
                    localStorage.setItem("ComplainID", Id);
                    setModalShow(true)
                }}>
                    <p>REJECT</p>
                </button>
                
                <DeletePopup show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
        </Row>
    );
}
export default AdminComplaintsTableRow