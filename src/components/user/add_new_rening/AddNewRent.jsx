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
import axios from "axios";
import * as Yup from "yup";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BasicMap from "./basic";

const base_url = process.env.REACT_APP_BASE_URL;

function AddNewRent() {
  const categoryOptions = [
    { value: "meeting-room", label: "Meetings" },
    { value: "office-room", label: "Office" },
    { value: "study-room", label: "Study" },
  ];

  const priceTypes = [
    { value: "hour", label: "For an hour" },
    { value: "day", label: "For a day" },
    { value: "week", label: "For a week" },
  ];

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [priceType, setPriceType] = useState("");
  const [address, setAddress] = useState("");
  const [roomCategory, setRoomCategory] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("noImage");
  const [uploadImage, setUploadImage] = useState(null);
  const [wifi, setWifi] = useState(0);
  const [parking, setParking] = useState(0);
  const [ac, setAC] = useState(0);
  const [silent, setSilent] = useState(0);
  const [food, setFood] = useState(0);
  const [washroom, setWashroom] = useState(0);

  var addNewFormData = {};

  function updateForm() {
    addNewFormData = {
      title: title,
      quantity: quantity,
      priceType: priceType,
      address: address,
      roomCategory: roomCategory,
      contactNo: contactNo,
      price: price,
      city: city,
      postalCode: postalCode,
      description: description,
      wifi: wifi,
      parking: parking,
      ac: ac,
      silent: silent,
      food: food,
      washroom: washroom,
    };
  }

  useEffect(() => {
    // console.log(addNewFormData);
    updateForm();
    // console.log(addNewFormData);
  }, [
    title,
    quantity,
    priceType,
    address,
    roomCategory,
    contactNo,
    price,
    city,
    postalCode,
    description,
    wifi,
    parking,
    ac,
    silent,
    food,
    washroom,
  ]);

  const [productRating, setProductRating] = useState(0);

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [formState, setFormState] = useState({
    productName: "",
    productQuantity: "",
    productCity: "",
    productContact: "",
    productAddress: "",
    productPostalcode: "",
    productDescription: "",
  });

  // function handleOnChange(e, inputField) {
  //   // console.log(e.target.value);
  //   setFormState((currentFormState) => {
  //     const newFormState = { ...currentFormState };
  //     newFormState[inputField] = e.target.value;
  //     return newFormState;
  //   });
  //   // console.log(fromState);
  // }

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setUploadImage(event.target.files[0]);
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
    quantity: 0,
    priceType: "",
    address: "",
    roomCategory: "",
    contactNo: "",
    price: 0,
    city: "",
    postalCode: 0,
    description: "",
  };

  const navigate = useNavigate();

  // console.log("Ïmages: ", selectedFiles);

  const handleOnSubmit = (event) => {
    // navigate('/user/userrentings');
    updateForm();
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", uploadImage);
    // formData.append("gallery", selectedFiles);
    formData.append("addNewFormData", JSON.stringify(addNewFormData));

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    axios
      .post(`${base_url}/addnewrent`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("it worked");
      });
  };

  return (
    <Container className="mb-5 bg-white p-5 add-new-rent-container">
      <Col>
        <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3 data-field">
                <Form.Label>TITLE</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  required
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setQuantity(event.target.value);
                  }}
                  value={quantity}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>PRICE TYPE</Form.Label>
                <Select
                  options={priceTypes}
                  placeholder="Select Category"
                  name="priceType"
                  isClearable={true}
                  required
                  onChange={(event) => {
                    setPriceType(event.value);
                  }}
                  value={priceTypes.label}
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
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  value={address}
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>CATEGORY</Form.Label>
                <Select
                  options={categoryOptions}
                  placeholder="Select Category"
                  name="priceType"
                  isClearable={true}
                  required
                  onChange={(event) => {
                    setRoomCategory(event.value);
                  }}
                  value={categoryOptions.label}
                  // onChange={handleOnPriceTypeChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CONTACT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: 94766923712"
                  name="contactNo"
                  required
                  //onChange={handleOnContactChange}
                  onChange={(event) => {
                    setContactNo(event.target.value);
                  }}
                  value={contactNo}
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
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  value={price}
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
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  value={city}
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
                  name="postalCode"
                  required
                  pattern="[0-9]+"
                  // onChange={handleOnProductCityChange}
                  onChange={(event) => {
                    setPostalCode(event.target.value);
                  }}
                  value={postalCode}
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
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                value={description}
              />
            </Form.Group>
          </Col>

          {/* <Col lg={12} className="mb-2">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">LOCATION</Form.Label>
              <GoogleMap className="google-map" />
            </Form.Group> 
          </Col> */} 

          {/* <Col lg={12} className="mb-2">
            <Form.Group className="mb-3">
              <Form.Label className="mb-2">LOCATION</Form.Label>
              <BasicMap />
            </Form.Group>
          </Col> */}

          <Col lg={12} className="mb-2">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="mb-2">IMAGES</Form.Label>
              <Col>
                <AddImages setSelectedFiles={setSelectedFiles} />
              </Col>
            </Form.Group>
          </Col>
          <p>FEATURES</p>
          <Col className="form-control mb-4">
            <Row>
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={wifi}
                  onChange={(event) => {
                    setWifi(event.target.checked);
                  }}
                  id="wifi"
                  name="wifi"
                />
                <label for="feature1" className="ms-2">
                  WIFI
                </label>
              </Col>
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={parking}
                  onChange={(event) => {
                    setParking(event.target.checked);
                  }}
                  id="parking"
                  name="parking"
                />
                <label for="feature2" className="ms-2">
                  Parking
                </label>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={ac}
                  onChange={(event) => {
                    setAC(event.target.checked);
                  }}
                  id="ac"
                  name="ac"
                />
                <label for="feature3" className="ms-2">
                  A/C
                </label>
              </Col>
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={silent}
                  onChange={(event) => {
                    setSilent(event.target.checked);
                  }}
                  id="silent"
                  name="silent"
                />
                <label for="feature4" className="ms-2">
                  Silent area
                </label>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={food}
                  onChange={(event) => {
                    setFood(event.target.checked);
                  }}
                  id="food"
                  name="food"
                />
                <label for="feature5" className="ms-2">
                  Food & Beverage
                </label>
              </Col>
              <Col className="d-flex">
                <input
                  type="checkbox"
                  className="add-new-rent-checkbox"
                  value={washroom}
                  onChange={(event) => {
                    setWashroom(event.target.checked);
                  }}
                  id="washroom"
                  name="washroom"
                />
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
                  Title={title}
                  Src={image}
                  City={city}
                  Price={price}
                  Quantity={quantity}
                  Rating={productRating}
                />
              </Col>
            </Col>
          </Row>
          <Row className="mb-2 add-new-rent-cancel-btn-box">
            <Col lg={12} xs={6} md={3}>
              <button className="pt-2 pb-2 add-new-rent-next-btn" type="submit">
                SUBMIT
              </button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Container>
  );
}

export default AddNewRent;
