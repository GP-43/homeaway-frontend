import React from "react";
import {Tab, Tabs} from "react-bootstrap";
import ChooseSection from "./ChooseSection";
import FilterSection from "./FilterSection";

function SearchPlace() {
    return (
                <Tabs
                    id="uncontrolled-tab-example"
                    className="mb-0"
                >
                    <Tab eventKey="home" title="Choose" defaultActiveKey="profile">
                        <ChooseSection/>
                    </Tab>
                    <Tab eventKey="profile" title="Filters" className='filter-button'>
                        <FilterSection/>
                    </Tab>
                </Tabs>
    );
}

export default SearchPlace;