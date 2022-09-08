import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import NumberFormat from "react-number-format";
import Select from "react-select";
import GoogleMap from "./GoogleMap";
import AddImages from "./AddImages";
import {useState} from "react";
import {FaThumbsUp} from "react-icons/fa";
import {Image} from "react-feather";
import PlaceCard from "../place_card/PlaceCard.jsx";
import axios from "axios";
import {Formik} from "formik";
import * as Yup from "yup";

function AddNewRent() {
    const categoryOptions = [
        {value: "meeting-room", label: "Meetings"},
        {value: "office-room", label: "Office"},
        {value: "study-room", label: "Study"},
    ];

    const priceType = [
        {value: "hour", label: "For an hour"},
        {value: "day", label: "For a day"},
        {value: "week", label: "For a week"},
    ];

    const [productRating, setProductRating] = useState(0);

    const [image, setImage] = useState("noImage");
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const [formState, setFormState] = useState({
        productName: "",
        productQuantity: "",
        productCity: "",
        productContact: "",
        productAddress: "",
        productPostalcode: "",
        productDescription: "",
    });

    function handleOnChange(e, inputField) {
        // console.log(e.target.value);
        setFormState((currentFormState) => {
            const newFormState = {...currentFormState};
            newFormState[inputField] = e.target.value;
            return newFormState;
        });
        // console.log(fromState);
    }

    const handleImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setIsImageUploaded(true);
    };

    const handleOnImageRemoveClick = () => {
        setIsImageUploaded(false);
        setImage("noImage");
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const initialValues = {
        title: "",
        quantity: "",
        price_type: "",
        address: "",
        room_category: "",
        contact_no: "",
        price: "",
        city: "",
        postal_code: "",
        description: "",
    };

    const onSubmit = (data) => {
        axios
            .post("http://localhost:3000/user/addnewrent", data)
            .then((response) => {
                console.log("it worked");
            });
    };

    return (
        <Container className="mb-5 bg-white p-5 add-new-rent-container">
            <Col>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3 data-field">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        placeholder="Enter the title"
                                        required
                                        onChange={(e) => {
                                            handleOnChange(e, "productName");
                                        }}
                                        value={formState.productName}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 data-field">
                                    <Form.Label>NO OF PEOPLE</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter a number"
                                        name="quantity"
                                        min="0"
                                        allowNegative={false}
                                        required
                                        // onValueChange={handleOnProductQuantityChange}
                                        onChange={(e) => {
                                            handleOnChange(e, "productQuantity");
                                        }}
                                        value={formState.productQuantity}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PRICE TYPE</Form.Label>
                                    <Select
                                        options={priceType}
                                        placeholder="Select Category"
                                        name="price_type"
                                        isClearable={true}
                                        required
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
                                        name="address"
                                        placeholder="Enter the address"
                                        required
                                        onChange={(e) => {
                                            handleOnChange(e, "productAddress");
                                        }}
                                        value={formState.productAddress}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>CATEGORY</Form.Label>
                                    <Select
                                        options={categoryOptions}
                                        placeholder="Select Category"
                                        name="room_category"
                                        isClearable={true}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>CONTACT</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="ex: 94766923712"
                                        name="contact_no"
                                        required
                                        //onChange={handleOnContactChange}
                                        onChange={(e) => {
                                            handleOnChange(e, "productContact");
                                        }}
                                        value={formState.productContact}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>PRICE</Form.Label>
                                    <Form.Control
                                        placeholder="Enter the Price"
                                        as={NumberFormat}
                                        name="price"
                                        thousandSeparator={true}
                                        allowNegative={false}
                                        required
                                        // onValueChange={handleOnProductPriceChange}
                                        onChange={(e) => {
                                            handleOnChange(e, "productPrice");
                                        }}
                                        value={formState.productPrice}
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
                                        name="city"
                                        // onChange={handleOnProductCityChange}
                                        onChange={(e) => {
                                            handleOnChange(e, "productCity");
                                        }}
                                        value={formState.productCity}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-2 data-field"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label className="mb-2">POSTAL CODE</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter the postal code"
                                        name="postal_code"
                                        required
                                        pattern="[0-9]+"
                                        // onChange={handleOnProductCityChange}
                                        onChange={(e) => {
                                            handleOnChange(e, "productPostalcode");
                                        }}
                                        value={formState.productPostalcode}
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
                                    name="description"
                                    required
                                    placeholder="Enter the description"
                                    onChange={(e) => {
                                        handleOnChange(e, "productDescription");
                                    }}
                                    value={formState.productDescription}
                                />
                            </Form.Group>
                        </Col>

                        {/* <Col lg={12} className="mb-2">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">LOCATION</Form.Label>
              <GoogleMap className="google-map" />
            </Form.Group>
          </Col> */}

                        <Col lg={12} className="mb-2">
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label className="mb-2">IMAGES</Form.Label>
                                <Col>
                                    <AddImages/>
                                </Col>
                            </Form.Group>
                        </Col>
                        <p>FEATURES</p>
                        <Col className="form-control mb-4">
                            <Row>
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature1" className="ms-2">
                                        Internet
                                    </label>
                                </Col>
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature2" className="ms-2">
                                        Parking
                                    </label>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature3" className="ms-2">
                                        A/C
                                    </label>
                                </Col>
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature4" className="ms-2">
                                        Silent area
                                    </label>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature5" className="ms-2">
                                        Can by food
                                    </label>
                                </Col>
                                <Col className="d-flex">
                                    <input type="checkbox" className="add-new-rent-checkbox"/>
                                    <label for="feature6" className="ms-2">
                                        Washroom
                                    </label>
                                </Col>
                            </Row>
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
                                  <FaThumbsUp className="d-flex align-self-center mx-auto image-icon"/>
                                  <br/>
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
                                  <Image className="d-flex align-self-center mx-auto image-icon"/>
                                  <br/>
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
                                        Title={formState.productName}
                                        Src={image}
                                        City={formState.productCity}
                                        Price={formState.productPrice}
                                        Quantity={formState.productQuantity}
                                        Rating={productRating}
                                    />
                                </Col>
                            </Col>
                        </Row>
                        <Row className="mb-2 add-new-rent-cancel-btn-box">
                            <Col lg={12} xs={6} md={3}>
                                <button
                                    className="pt-2 pb-2 add-new-rent-next-btn"
                                    type="submit"
                                >
                                    SUBMIT
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Col>
        </Container>
    );
}

export default AddNewRent;
