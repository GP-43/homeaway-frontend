import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";
import GoogleMap from "./GoogleMap";
import AddImages from "./AddImages";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Image } from "react-feather";
import PlaceCard from "../place_card/PlaceCard.jsx";

function AddNewRent() {
  const categoryOptions = [
    { value: "meeting-room", label: "Meetings" },
    { value: "office-room", label: "Office" },
    { value: "study-room", label: "Study" },
  ];

  const priceType = [
    { value: "hour", label: "For an hour" },
    { value: "day", label: "For a day" },
    { value: "week", label: "For a week" },
  ];

  const [productName, setProductName] = useState("Name");
  const [productCity, setProductCity] = useState("City");
  const [productPrice, setProductPrice] = useState("0");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productContact, setProductContact] = useState("0");
  const [productRating, setProductRating] = useState(0);

  const [image, setImage] = useState("noImage");
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleOnProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleOnProductCityChange = (event) => {
    setProductCity(event.target.value);
  }

  const handleOnProductQuantityChange = (values) => {
    setProductQuantity(values.floatValue);
  };

  const handleOnContactChange = (values) => {
    setProductContact(values.floatValue);
  };

  const handleOnProductPriceChange = (values) => {
    setProductPrice(values.floatValue);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setIsImageUploaded(true);
  };

  const handleOnImageRemoveClick = () => {
    setIsImageUploaded(false);
    setImage("noImage");
  };

  return (
    <Container className="mb-5 bg-white p-5 add-new-rent-container">
      <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3 data-field">
                <Form.Label>TITLE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the title"
                  required
                  onChange={handleOnProductNameChange}
                />
              </Form.Group>
              <Form.Group className="mb-3 data-field">
                <Form.Label>NO OF PEOPLE</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter a number"
                  min="0"
                  as={NumberFormat}
                  allowNegative={false}
                  required
                  onValueChange={handleOnProductQuantityChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>PRICE TYPE</Form.Label>
                <Select
                  options={priceType}
                  placeholder="Select Category"
                  isClearable={true}
                  // onChange={handleOnPriceTypeChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-2 data-field"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mb-2">ADDRESS</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter the address"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>CATEGORY</Form.Label>
                <Select
                  options={categoryOptions}
                  placeholder="Select Category"
                  isClearable={true}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CONTACT</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="ex: 94766923712"
                  required
                  onChange={handleOnContactChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>PRICE</Form.Label>
                <Form.Control
                  placeholder="Enter the Price"
                  as={NumberFormat}
                  thousandSeparator={true}
                  allowNegative={false}
                  required
                  onValueChange={handleOnProductPriceChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2 data-field"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mb-2">CITY</Form.Label>
                <Form.Control
                  placeholder="Enter the city"
                  required
                  type="text"
                  onChange={handleOnProductCityChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-2 data-field"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mb-2">POSTAL CODE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the postal code"
                  required
                  pattern="[0-9]+"
                  // onChange={handleOnProductCityChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Col lg={12} className="mb-2">
            <Form.Group
              className="mb-2 data-field"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mb-2">DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter the description"
              />
            </Form.Group>
          </Col>

          <Col lg={12} className="mb-2">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">LOCATION</Form.Label>
              <GoogleMap className="google-map" />
            </Form.Group>
          </Col>

          <Col lg={12} className="mb-2">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mb-2">IMAGES</Form.Label>
              <Col>
                <AddImages />
              </Col>
            </Form.Group>
          </Col>

          <Row className="mb-2 image-upload-box">
            <Col lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="mb-2">THUMBNAIL</Form.Label>
                <Col className="thumbnail-container">
                  <label
                    className={
                      isImageUploaded
                        ? "custom-file-upload mt-0 custom-file-upload-active"
                        : "custom-file-upload mt-0"
                    }
                  >
                    <span className="w-100">
                      <input
                        type="file"
                        className="d-none"
                        onChange={handleImageChange}
                        disabled={isImageUploaded}
                      />
                      {isImageUploaded ? (
                        <div>
                          <FaThumbsUp className="d-flex align-self-center mx-auto image-icon" />
                          <br />
                          <div className="d-flex justify-content-center">
                            <p>Image is uploaded!</p>
                          </div>
                          <div className="d-flex justify-content-center">
                            <Button
                              variant="warning"
                              onClick={handleOnImageRemoveClick}
                            >
                              Remove Image
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Image className="d-flex align-self-center mx-auto image-icon" />
                          <br />
                          <div className="d-flex justify-content-center">
                            <p>Click to upload the image</p>
                          </div>
                        </div>
                      )}
                    </span>
                  </label>
                </Col>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <label for="exampleFormControlSelect3" className="mb-2">
                PLACE PREVIEW
              </label>
              <Col lg={5}>
                <PlaceCard
                  Title={productName}
                  Src={image}
                  City={productCity}
                  Price={productPrice}
                  Quantity={productQuantity}
                  Rating={productRating}
                />
              </Col>
            </Col>
          </Row>
          <Row className="mb-2 add-new-rent-cancel-btn-box">
            <Col lg={10} xs={6} md={9}>
              <button className="pt-2 pb-2 add-new-rent-cancel-btn">
                CLEAR
              </button>
            </Col>
            <Col lg={2} xs={6} md={3}>
              <button className="pt-2 pb-2 add-new-rent-next-btn">NEXT</button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Container>
  );
}

export default AddNewRent;
