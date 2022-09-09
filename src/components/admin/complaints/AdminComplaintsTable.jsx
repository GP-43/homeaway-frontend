import React, { useState, useEffect } from "react";
import axois from "axios";
import { Col, Row, Container } from "react-bootstrap";
import AdminComplaintsTableRow from "./AdminComplaintsTableRow";

function AdminComplaintsTable() {
  const [details, setDetails] = useState({});

  // refresh table 
  
  function fetchComplatints(){
    axois
      .get("http://localhost:4000/admin/select/complaints")
      .then((data) => {
        const details = data.data;
        setDetails({ ...details });
        //setoccupantData(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect((event) => {
    fetchComplatints();
  }, []);

  // const complaints_data = [
  //   {
  //     caseNo: 1001,
  //     subject: "This is a complaint about the owner of the xxxxxxx. ",
  //     senderId: 245,
  //     senderName: "Kamal Nishantha",
  //     senderEmail: "kamalnishantha@gmail.com",
  //     date: "22-06-2022",
  //     time: "10:30",
  //   },
  //   {
  //     caseNo: 1001,
  //     subject: "This is a complaint about the owner of the xxxxxxx.",
  //     senderId: 127,
  //     senderName: "Ranil Wikrama",
  //     senderEmail: "ranilwikrama@gmail.com",
  //     date: "02-06-2022",
  //     time: "01:45",
  //   },
  // ];
  return (
    <Container className="admin-complaint-table-container p-2">
      <Row className="ms-1">
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
          {Object.keys(details).map((key, index) => (
            <AdminComplaintsTableRow
              index={index}
              caseNo={details[index].id}
              complainerId={details[index].compliner_id}
              complaineeId={details[index].complainee_id}
              subject={details[index].subject}
              fetchComplatints={fetchComplatints}
              // Src={i.Src}
            />
          ))}
          {/* {complaints_data &&
            complaints_data.map((i) => (
              <AdminComplaintsTableRow
                caseNo={i.caseNo}
                subject={i.subject}
                senderId={i.senderId}
                senderName={i.senderName}
                senderEmail={i.senderEmail}
                date={i.date}
                time={i.time}
              />
            ))} */}
        </Row>
      </Row>
    </Container>
  );
}
export default AdminComplaintsTable;
