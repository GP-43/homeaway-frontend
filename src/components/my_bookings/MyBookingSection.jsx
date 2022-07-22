import React from "react";
import PlaceCard from "../places_section/PlaceCard";
import { FaSlidersH } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";


function MyBookingSection(props) {

    return (
        <div className="place-section-cover">
            <div className="places-title d-flex mb-8">
                <h5>My Bookings</h5>
                <div className="sort-drop-down-btn">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaSlidersH
                                className="sort-icon"
                            />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="my-bookings-dropdown">
                            <Dropdown.Item href="#/action-1">paid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">saved</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">completed</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="place-card-set">
                {props.data &&
                    props.data.map((i) => (
                        <PlaceCard
                            Title={i.Title}
                            Src={i.Src}
                            City={i.City}
                            Price={i.Price}
                            Quantity={i.Quantity}
                            Rating={i.Rating}
                        />
                    ))}
            </div>
        </div>
    );
}

export default MyBookingSection;