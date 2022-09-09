import React, { useState, useEffect } from "react";
import axois from "axios";
import { Col, Row, Container } from "react-bootstrap";
// for popup
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

let fetchComplatints;
const deleteComplain = (id_1, hideModal, id_2, id_3) => {
  var Id = id_1;
  var complaintArray = {
    complainerId: id_2,
    complaineeId: id_3,
  };
  console.log("Delete complaint:", Id);

  axois
    .put("http://localhost:4000/admin/reject/complaint/" + Id, complaintArray)
    .then(() => {
      console.log("Work");
      fetchComplatints();
      hideModal();
    })
    .catch((error) => {
      console.log(error);
    });
};

//popup function for reject
function DeletePopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirm Deletion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want reject? This action cannot be undone.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="confirm-delete btn-danger"
          onClick={() =>
            deleteComplain(
              props.complaintId,
              props.onHide,
              props.complaineeId,
              props.complainerId
            )
          }
        >
          Reject
        </Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

// accept complaint

function acceptComplaint(Id_1, Id_2, Id_3) {
  // var complaintId = Id_1;
  // var complainerId = Id_2;
  // var complaineeId = Id_3;
  var complaintArray = {
    complainerId: Id_2,
    complaineeId: Id_3,
  };

  console.log("Accept complaint:", Id_1, Id_2, Id_3);

  axois
    .put("http://localhost:4000/admin/accept/complaint/" + Id_1, complaintArray)
    .then(() => {
      console.log("Work");
      fetchComplatints();
    })
    .catch((error) => {
      console.log(error);
    });
}

function AdminComplaintsTableRow(props) {
  fetchComplatints = props.fetchComplatints;

  const Id = props.caseNo;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Row
      className={
        !props.status
          ? "admin-complain-table-row mx-0 px-0 rejected-complaints"
          : "admin-complain-table-row mx-0 px-0"
      }
    >
      <Col xs={1} className="px-0">
        <p className="admin-complain-table-row-text">{props.index + 1}</p>
      </Col>
      <Col xs={2} className="px-0">
        <p className="admin-complain-table-row-text">{props.caseNo}</p>
      </Col>
      <Col xs={2} className="px-0">
        <p className="admin-complain-table-row-text">{props.complainerId}</p>
      </Col>
      <Col xs={2} className="px-0">
        <p className="admin-complain-table-row-text">{props.complaineeId}</p>
      </Col>
      <Col xs={3} className="px-0">
        <p className="admin-complain-table-row-text">{props.subject}</p>
      </Col>
      {/* <Col xs={3} className="px-0">
                <p className='admin-complain-table-row-text'>{props.senderEmail}</p></Col>
            <Col xs={2} className="px-0">
                <p className='admin-complain-table-row-text'>{props.date} <br /> {props.time}</p></Col> */}
      <Col xs={1} className={props.status ? "px-0" : "d-none"}>
        <button
          className="admin-complaint-accept-btn px-3 pb-0"
          variant="primary"
          onClick={() =>
            acceptComplaint(Id, props.complainerId, props.complaineeId)
          }
        >
          <p>ACCEPT</p>
        </button>
      </Col>
      <Col xs={1} className={props.status ? "px-0" : "d-none"}>
        <button
          className="admin-complaint-delete-btn px-3 pb-0"
          variant="primary"
          onClick={() => {
            setModalShow(true);
          }}
        >
          <p>REJECT</p>
        </button>

        <DeletePopup
          show={modalShow}
          onHide={() => setModalShow(false)}
          complaintId={Id}
          complaineeId={props.complaineeId}
          complainerId={props.complainerId}
        />
      </Col>
    </Row>
  );
}
export default AdminComplaintsTableRow;
