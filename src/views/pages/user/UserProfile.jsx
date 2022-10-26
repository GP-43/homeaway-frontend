import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import icon1 from "../../../assets/images/profile/Vector.png";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaStar, FaEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import axois from "axios";
import { FaThumbsUp } from "react-icons/fa";
import { Image } from "react-feather";





function UserProfile() {
  //get id from session
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const userId = userDetails.userId;

  const [profileDetails, setProfileDetails] = useState({});

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const toUpdateDetails = {
      // Name : name,
      Location : location,
      Contact : contact,
  }

  const toUpdateName = {
    Name : name,
  }

  const toUpdatePassword = {
    Password : password1,
  }

  const handleOnSubmit = () => {
    setIsFormDisabled(true);
    //methanin data yawamu
    axois
    .put("http://localhost:4000/occupant/update/profile/" + userId, toUpdateDetails)
    .then(() => {
      console.log("Work");
      fetchProfileDetails();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleOnSubmitEditPassword = () => {
    setIsPasswordDisabled(true);
    if(!containsSpecialChars(password1)){
      alert("There is no Symbols in password !");
    }
    if(containsWhitespace(password1)){
      alert("There are whitespaces in password !");
    }
    if(!containsNumbers(password1)){
      alert("There is no numbers in password !");
    }
    if(password1.length < 8){
      alert("password length must grater than 8 !");
    }
    if(!(password1 === password2)){
      alert("Passwords doesn't match !");
    }
    if((password1 === password2) && (containsSpecialChars(password1)) && !(containsWhitespace(password1)) 
    && (containsNumbers(password1)) && (password1.length >= 8) ){

      axois
      .put("http://localhost:4000/auth/updatePassword/" + userId, toUpdatePassword)
      .then(() => {
        console.log("Work");
        fetchProfileDetails();
        alert("Password has updated");
      })
      .catch((error) => {
        console.log(error);
      }); 
    }
  };

  const handleOnNameSubmit = () => {
    setIsNameDisabled(true);
    //nama witharak wenas karamu
    axois
    .put("http://localhost:4000/occupant/update/profileUserName/" + userId, toUpdateName)
    .then(() => {
      console.log("Work");
      fetchProfileDetails();
    })
    .catch((error) => {
      console.log(error);
    });
  };


  // refresh page
  function fetchProfileDetails() {
    // get details
    axois
      .get("http://localhost:4000/occupant/select/profileDetails/" + userId)
      .then((data) => {
        const profileDetails = data.data;
        setProfileDetails({ ...profileDetails });
        console.log(profileDetails);

        setName(data.data[0]?.name)
        setEmail(data.data[0]?.email)
        setLocation(data.data[0]?.location)
        setContact(data.data[0]?.contact)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect((event) => {
    fetchProfileDetails();
  }, []);

  // const userName = profileDetails[0]?.name;
  // const Location = profileDetails[0]?.location;
  // const Contact = profileDetails[0]?.contact;
  // const Email = profileDetails[0]?.email;

  // console.log(userName)

  
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

//check special charactors

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
// console.log("hello",containsSpecialChars('hello!')); // 👉️ true
// console.log(containsSpecialChars('abc')); // 👉️ false
// console.log(containsSpecialChars('one two'));

//check whitespaces
function containsWhitespace(str) {
  return /\s/.test(str);
}

// console.log("whitespaces",containsWhitespace('  ')); // 👉️ true
// console.log(containsWhitespace('hello world')); // 👉️ true
// console.log(containsWhitespace('')); // 👉️ false
// console.log(containsWhitespace('test')); // 👉️ false

//check number
function containsNumbers(str) {
  return /\d/.test(str);
}
// console.log("contain numbers",containsNumbers('hello123')); // true
// console.log(containsNumbers('javascript')); // false
// console.log(containsNumbers('3 apples')); // true

//check length
// var myString = "string test";
// var stringLength = myString.length;
// console.log("length", stringLength);


const [isImageUploaded, setIsImageUploaded] = useState(false);

const handleImageChange = (event) => {
  setImage(URL.createObjectURL(event.target.files[0]));
  setUploadImage(event.target.files[0]);
  setIsImageUploaded(true);
};

const handleOnImageRemoveClick = () => {
  setIsImageUploaded(false);
  setImage("noImage");
};

const [image, setImage] = useState("noImage");
const [uploadImage, setUploadImage] = useState(null);

const passImage = {
  changedImage: image,
};
console.log("passimage", passImage)
const submitImage = async () => {

  //cancel the booking
  axois
    .put(
      "http://localhost:4000/occupant/addImage/" + userId,
      passImage
    )
    .then(() => {
      console.log("Work");
    })
    .catch((error) => {
      console.log(error);
    });
};



  return (
    <>
      <Row>
        <Col className="profile-picture ms-5 mt-3 mb-3" lg={3}>
        <Col className="thumbnail-container profile-thumbnail-container">
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
                <input type="submit" value="submit image" onClick={submitImage} className="profile-thumbnail-submit" />
        </Col>
        <Col className="profile-name-rate-container">
          <Row className="profile-name-container">
            <Col lg={8} className="p-0">
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder=""
                  value={name}
                  disabled={isNameDisabled}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              {/*  <input*/}
              {/*  type="text"*/}
              {/*  value={name}*/}
              {/*  onChange={(e) => setName(e.target.value)}*/}
              {/*/>*/}
            </Col>
            <Col lg={4} className="p-0">
              <h3>
                <FaEdit
                  className="ms-3 edit-icon"
                  onClick={() => setIsNameDisabled(false)}
                />
                <AiOutlineFileDone
                  className=" ms-2 done-icon"
                  onClick={handleOnNameSubmit}
                />
              </h3>
            </Col>
            <hr className="profile-name-underline" />
          </Row>
          <Row>
            <h4>
              <FaStar className="mb-2 me-3" />
              3.5
            </h4>
          </Row>
        </Col>
      </Row>

      <Col>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Email :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control placeholder="" value={email} disabled={true} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Location :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={location}
                disabled={isFormDisabled}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Contact No :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={contact}
                disabled={isFormDisabled}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Button
            variant="warning"
            className="profile-edit-button m-3"
            onClick={() => setIsFormDisabled(false)}
          >
            Edit
          </Button>
          <Button
            className="profile-submit-button m-3"
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </Row>
        <Row className="m-3">
          <Col lg={4}>
            <h5>Password :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={password1}
                disabled={isPasswordDisabled}
                onChange={(e) => setPassword1(e.target.value)}
                type={showPassword1 ? "text" : "password"}
              />
              <input
                type="checkbox"
                checked={showPassword1}
                onChange={(e) => setShowPassword1(e.target.checked)}
              />{" "}
              show password
            </Form.Group>
          </Col>
          {/* reEnter password */}
          
          <Col lg={4}>
            <h5>Re Enter Password :</h5>
          </Col>
          <Col lg={8} className="p-0">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder=""
                value={password2}
                disabled={isPasswordDisabled}
                onChange={(e) => setPassword2(e.target.value)}
                type={showPassword2 ? "text" : "password"}
              />
              <input
                type="checkbox"
                checked={showPassword2}
                onChange={(e) => setShowPassword2(e.target.checked)}
              />
              show password
            </Form.Group>
          </Col>
        </Row>

        {/* password button */}
        <Row className="justify-content-end">
          <Button
            variant="warning"
            className="profile-edit-password-button m-3"
            onClick={() => setIsPasswordDisabled(false)}
          >
            Edit Password
          </Button>
          <Button
            className="profile-submit-password-button m-3"
            onClick={handleOnSubmitEditPassword}
          >
            Submit Password
          </Button>
        </Row>
      </Col>
    </>
  );
}

export default UserProfile;
