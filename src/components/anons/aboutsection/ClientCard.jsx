import React,{useState} from 'react';
import {Row, Carousel, Col} from 'react-bootstrap';
import profile1 from "../../../assets/images/profileimages/occupants/profile1.jpg";
import profile2 from "../../../assets/images/profileimages/occupants/profile2.jpg";
import profile3 from "../../../assets/images/profileimages/occupants/profile3.jpg";
import profile4 from "../../../assets/images/profileimages/occupants/profile4.jpg";
import ReactPaginate from "react-paginate";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

function ClientCard() {
    const sliderData =[
        {
            id:1,
            src: profile1,
            name: "Senath Dewmin",
            location:"Kandy",
            msg:"Some quick example text to build on the card title and make up the\n" +
                "            bulk of the card's content.",
        },
        {
            id:2,
            src: profile2,
            name: "Tharindi Thathsara",
            location:"Ganemulla",
            msg:"Some quick example text to build on the card title and make up the\n" +
                "            bulk of the card's content.",
        },
        {
            id:3,
            src: profile3,
            name: "Awanthi Irushika",
            location:"Matale",
            msg:"Some quick example text to build on the card title and make up the\n" +
                "            bulk of the card's content.",
        },
        {
            id:4,
            src: profile4,
            name: "Tharaka Dilshan",
            location:"Meegoda",
            msg:"Some quick example text to build on the card title and make up the\n" +
                "            bulk of the card's content.",
        },
    ];
    const [messages, setMessages] = useState(sliderData.slice(0, 4));
    const [currMBox, setCurrMBox] = useState(0);

    const perPage = 1;
    const off = perPage * currMBox;

    const displayPlaces = messages.slice(off, off + perPage).map((i) => {
        return (
            <Carousel className='client-msg-card bg-transparent'>

                <Carousel.Item className="msg-card bg-light mt-5 ms-5 ps-1">
                    <img src={i.src} className="msg-prof-image" />
                    <p className="text right mt-5 mx-3 pt-1">"{i.msg}"</p>
                    <h3 className="mt-2 mx-3 text right">{i.name}</h3>
                    <h6 className="mt-2 mx-3 text-muted">{i.location}</h6>
                </Carousel.Item>

            </Carousel>
        );
    });
    const pageCount = Math.ceil(messages.length / perPage);

    function handlePageClick({ selected: selectedPage }) {
        setCurrMBox(selectedPage);
    }
    return(
        <Row>
            <Col md={12} xs={8} className="arrow-section px-md-4 px-0">
                <ReactPaginate
                    previousLabel={
                        <BsFillArrowLeftCircleFill className="ms-0 ps-0 icon back-icon"/>
                    }
                    nextLabel={
                        <BsFillArrowRightCircleFill className="ms-5 icon next-icon" />
                    }
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"paginationBttns"}
                    breakLabel="..."
                    pageClassName="page-item-none"
                    breakClassName="page-item-none"
                />
            </Col>
            <Col className="msg-display ps-lg-5">{displayPlaces}</Col>
        </Row>
    )
}

export default ClientCard;