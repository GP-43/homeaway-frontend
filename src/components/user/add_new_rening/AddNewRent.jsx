import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";
import GoogleMap from "./GoogleMap";
import AddImages from "./AddImages";
import AddThumbnail from "./AddThumbnail";
import PlacePreview from "./PlacePreview";

function AddNewRent() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const price_type = [
    { value: "hour", label: "For an hour" },
    { value: "day", label: "For a day" },
    { value: "week", label: "For a week" },
  ];

  return (
    <Container className="mb-5 bg-white p-5 add-new-rent-container">
      <Col>
        <form>
          <Row className="mb-2">
            <Col lg={6}>
              <label for="exampleFormControlInput1" className="mb-2">
                TITLE
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              ></input>
            </Col>
            <Col lg={6}>
              <label for="exampleFormControlSelect1" className="mb-2">
                CATEGORY
              </label>
              <Select options={options} />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col lg={6}>
              <label for="exampleFormControlInput2" className="mb-2">
                NO OF PEOPLE
              </label>
              <NumberFormat thousandSeparator={true} className="form-control" />
            </Col>
            <Col lg={6}>
              <label for="exampleFormControlInput3" className="mb-2">
                CONTACT
              </label>
              <NumberFormat
                format="+94 (###) ###-####"
                mask="_"
                className="form-control"
              />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col lg={6}>
              <label for="exampleFormControlSelect2" className="mb-2">
                PRICE TYPE
              </label>
              <Select options={price_type} />
            </Col>
            <Col lg={6}>
              <label for="exampleFormControlInput4" className="mb-2">
                PRICE
              </label>
              <NumberFormat
                thousandSeparator={true}
                prefix={"Rs."}
                className="form-control"
              />
            </Col>
          </Row>
          <Col className="mb-2">
            <label for="exampleFormControlInput5" className="mb-2">
              ADDRESS
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput5"
            ></input>
          </Col>
          <Col className="mb-2">
            <label for="exampleFormControlInput6" className="mb-2">
              DESCRIPTION
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </Col>
          <Col className="mb-2">
            <label className="mb-2">LOCATION</label>
            <GoogleMap className="google-map" />
          </Col>
          <Col className="mb-2">
            <label for="exampleFormControlInput7" className="mb-2">
              IMAGES
            </label>
            <Col>
              <AddImages />
            </Col>
          </Col>
          <Row className="mb-2 image-upload-box">
            <Col lg={6}>
              <label for="exampleFormControlInput8" className="mb-2">
                THUMBNAIL
              </label>
              <Col>
                <AddThumbnail />
              </Col>
            </Col>
            <Col lg={6}>
              <label for="exampleFormControlSelect3" className="mb-2">
                PLACE PREVIEW
              </label>
              <Col>
                <PlacePreview />
              </Col>
            </Col>
          </Row>
          <Row className="mb-2 add-new-rent-cancel-btn-box">
            <Col lg={10} xs={6} md={9}>
              <button className="pt-2 pb-2 ps-5 pe-5 add-new-rent-cancel-btn">CLEAR</button>
            </Col>
            <Col lg={2} xs={6} md={3}>
              <button className="pt-2 pb-2 ps-5 pe-5 add-new-rent-next-btn">NEXT</button>
            </Col>
          </Row>
        </form>
      </Col>
    </Container>
  );
}

export default AddNewRent;
