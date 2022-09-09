import React, { useState, useEffect  } from "react";
import PlaceCard from "../../../components/user/place_card/PlaceCard";
import { Row, Col, Button } from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import axois from "axios";
import ReactPaginate from "react-paginate";
import place1 from "../../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../../assets/images/places_image_gallery/place8.jpg";
const base_url = process.env.REACT_APP_BASE_URL;

function Bestrentingplacessection() {
  const placeData = [
    {
      Src: place1,
      Title: "Meeting room",
      City: "Colombo",
      Price: "Rs.2500",
      Quantity: 8,
      Rating: 4.0,
    },
    {
      Src: place2,
      Title: "Study room",
      City: "Gampaha",
      Price: "Rs.3000",
      Quantity: 20,
      Rating: 4.8,
    },
    {
      Src: place3,
      Title: "Study room",
      City: "Kurunegala",
      Price: "Rs.2000",
      Quantity: 10,
      Rating: 3.8,
    },
    {
      Src: place4,
      Title: "Meeting room",
      City: "Jaffna",
      Price: "Rs.4500",
      Quantity: 30,
      Rating: 4.2,
    },
    {
      Src: place5,
      Title: "Meeting room",
      City: "Maho",
      Price: "Rs.3500",
      Quantity: 43,
      Rating: 1.2,
    },
    {
      Src: place6,
      Title: "Study room",
      City: "chilaw",
      Price: "Rs.4000",
      Quantity: 50,
      Rating: 4.9,
    },
    {
      Src: place7,
      Title: "Study room",
      City: "Mount lavinia",
      Price: "Rs.2500",
      Quantity: 20,
      Rating: 3.0,
    },
    {
      Src: place8,
      Title: "Meeting room",
      City: "Rathmalane",
      Price: "Rs.5000",
      Quantity: 12,
      Rating: 2.8,
    },
  ];

  const [places, setPlaces] = useState(placeData.slice(0, 8));
  const [currPage, setCurrPage] = useState(0);
  // const [bgClr, setBgClr] = useState("white");
  //
  // const AnnualHandler = () => {
  //   setBgClr("yellow");
  // };

  const perPage = 4;
  const off = perPage * currPage;

  const [details, setDetails] = useState([]);

  useEffect((event) => {
    axois
      .get("http://localhost:4000/anon/bestplaces")
      .then((data) => {
        const details = data.data;
        setDetails({ ...details });
        //setoccupantData(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // {Object.keys(details).map((key, index) => (
  //   <SingleUser
  //     Name={details[index].name}
  //     Location={details[index].location}
  //     // Src={i.Src}
  //   />
  // ))}

  const displayPlaces = Object.keys(details).slice(off, off + perPage).map((key, index) => {
    return (
      <Col
        lg={3}
        md={4}
        className="place-card-set px-lg-4 py-lg-3 px-md-2 py-md-2"
      >
        <PlaceCard
          Src={"https://localhost:4000/images/" + details[index].image}
          Title={details[index].title}
          City={details[index].city}
          Price={details[index].price} 
          Quantity={details[index].quantity} 
          Rating={details[index].rating} 
          
          // Rating={i.Quantity}
          // Rating={i.Rating}
        />
      </Col>
    );
  });

  const pageCount = Math.ceil(places.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrPage(selectedPage);
  }
  return (
    <Row className="py-3 mx-0 best-renting-section">
      <Col md={12} xs={8} className="place-section px-md-4 px-0">
        <ReactPaginate
          previousLabel={
            <BsFillArrowLeftCircleFill className="ms-0 ps-0 icon back-icon"/>
          }
          nextLabel={
            <BsFillArrowRightCircleFill className="ms-5 icon next-icon"/>
          }
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"paginationBttns"}
          breakLabel="..."
          pageClassName="page-item-none"
          breakClassName="page-item-none"
        />
        <Row>{displayPlaces}</Row>
      </Col>
    </Row>
  );
}

export default Bestrentingplacessection;
