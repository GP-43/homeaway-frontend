import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import ChooseSection from "./ChooseSection";
import FilterSection from "./FilterSection";

function SearchPlace(props) {
    return (
        <Tabs
            id="uncontrolled-tab-example"
        >
            <Tab eventKey="profile" title="Filters" className='filter-button'>
                <FilterSection filterOptions = {props.filterOptions}/>
            </Tab>
            <Tab eventKey="home" title="Choose" defaultActiveKey="profile">
                <ChooseSection/>
            </Tab>
        </Tabs>
    );
}

export default SearchPlace;