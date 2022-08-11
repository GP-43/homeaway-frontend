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

function OccupantRow(props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        
        <Row className='row-top-products mx-0 px-0 mb-2 mt-3'>
            <Col className='px-0 ps-3' xs = {1}>
                <img src={props.Src} className = "row-top-products-img" />
            </Col>

           <Col className='px-0 name' xs = {2}>
                <Row>
                    {props.firstName} {props.lastName}
                </Row>
                <Row className='rate'>
                    {props.rate}
                </Row>                
            </Col>

            <Col className='px-0' xs = {3}>
                {props.email}
            </Col>

            <Col className='px-0' xs = {4}>
                {props.joinedDate}
            </Col>

            <Col className='px-0 ' xs = {2}>
                <button className='delete-btn px-3 pb-0' variant="primary" onClick={() => setModalShow(true)}>
                    <p>DELETE</p>
                </button>
                
                <DeletePopup show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
        </Row>
    )
}

export default OccupantRow