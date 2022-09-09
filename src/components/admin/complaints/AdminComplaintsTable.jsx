import React, { useState, useEffect } from "react";
import axois from "axios";
import { Col, Row, Container } from "react-bootstrap";
import AdminComplaintsTableRow from "./AdminComplaintsTableRow";

function AdminComplaintsTable() {
  const [complaints, setComplaints] = useState({});
  const [acceptedComplaints, setAcceptedComplaints] = useState({});
  const [rejectedComplaints, setRejectedComplaints] = useState({});

  // refresh table

  function fetchComplatints() {
    // get complaints
    axois
      .get("http://localhost:4000/admin/select/complaints")
      .then((data) => {
        const complaints = data.data;
        setComplaints({ ...complaints });
        //setoccupantData(false)
      })
      .catch((error) => {
        console.log(error);
      });

    //get accepted complaints
    axois
      .get("http://localhost:4000/admin/select/acceptedComplaints")
      .then((data) => {
        const acceptedComplaints = data.data;
        setAcceptedComplaints({ ...acceptedComplaints });
        //setoccupantData(false)
      })
      .catch((error) => {
        console.log(error);
      });

    //get rejected complaints
    axois
      .get("http://localhost:4000/admin/select/rejectedComplaints")
      .then((data) => {
        const rejectedComplaints = data.data;
        setRejectedComplaints({ ...rejectedComplaints });
        //setoccupantData(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect((event) => {
    fetchComplatints();
  }, []);

  return (
    <>
      <Container className="admin-complaint-table-container p-2">
        <Row className="ms-1 mb-5">
          <Row>
            <h4>Complaints</h4>
          </Row>
          <Row className="admin-complaints-table-title">
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Case No</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Subject</p>
            </Col>
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Sender ID</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Sender Name</p>
            </Col>
            <Col xs={3} className="px-0">
              <p className="admin-complain-table-row-title">Sender Email</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Time & Date</p>
            </Col>
            <Col xs={1} className="px-0"></Col>
          </Row>

          <Row className="admin-complaint-table-data">
            {Object.keys(complaints).map((key, index) => (
              <AdminComplaintsTableRow
                index={index}
                caseNo={complaints[index].id}
                complainerId={complaints[index].compliner_id}
                complaineeId={complaints[index].complainee_id}
                subject={complaints[index].subject}
                fetchComplatints={fetchComplatints}
                // Src={i.Src}
              />
            ))}
          </Row>
        </Row>
      </Container>
      // accepted complaints
      <Container className="admin-complaint-table-container p-2">
        <Row className="ms-1 mb-5">
          <Row>
            <h4>Accepted Complaints</h4>
          </Row>
          <Row className="admin-complaints-table-title">
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Case No</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Subject</p>
            </Col>
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Sender ID</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Sender Name</p>
            </Col>
            <Col xs={3} className="px-0">
              <p className="admin-complain-table-row-title">Sender Email</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Time & Date</p>
            </Col>
            <Col xs={1} className="px-0"></Col>
          </Row>

          <Row className="admin-complaint-table-data">
            {Object.keys(acceptedComplaints).map((key, index) => (
              <AdminComplaintsTableRow
                index={index}
                caseNo={acceptedComplaints[index].id}
                complainerId={acceptedComplaints[index].compliner_id}
                complaineeId={acceptedComplaints[index].complainee_id}
                subject={acceptedComplaints[index].subject}
                fetchComplatints={fetchComplatints}
                // Src={i.Src}
              />
            ))}
          </Row>
        </Row>
      </Container>
      // rejected complaints
      <Container className="admin-complaint-table-container p-2">
        <Row className="ms-1 mb-5">
          <Row>
            <h4>Rejected Complaints</h4>
          </Row>
          <Row className="admin-complaints-table-title">
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Case No</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Subject</p>
            </Col>
            <Col xs={1} className="px-0">
              <p className="admin-complain-table-row-title">Sender ID</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Sender Name</p>
            </Col>
            <Col xs={3} className="px-0">
              <p className="admin-complain-table-row-title">Sender Email</p>
            </Col>
            <Col xs={2} className="px-0">
              <p className="admin-complain-table-row-title">Time & Date</p>
            </Col>
            <Col xs={1} className="px-0"></Col>
          </Row>

          <Row className="admin-complaint-table-data">
            {Object.keys(rejectedComplaints).map((key, index) => (
              <AdminComplaintsTableRow
                index={index}
                caseNo={rejectedComplaints[index].id}
                complainerId={rejectedComplaints[index].compliner_id}
                complaineeId={rejectedComplaints[index].complainee_id}
                subject={rejectedComplaints[index].subject}
                fetchComplatints={fetchComplatints}
                // Src={i.Src}
              />
            ))}
          </Row>
        </Row>
      </Container>
    </>
  );
}
export default AdminComplaintsTable;
