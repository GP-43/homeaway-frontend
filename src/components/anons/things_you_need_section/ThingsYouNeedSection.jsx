import React from "react";
import {Row} from "react-bootstrap";
import ThingsYouNeedSectionDescription from "../../../components/anons/things_you_need_section/ThingsYouNeedSectionDescription";
import ThingsYouNeedCardSection from "../../../components/anons/things_you_need_section/ThingsYouNeedCardSection";

function ThingsYouNeedSection() {
    return (
        <Row className='mx-0 m-auto things-you-need-section'>
            <ThingsYouNeedSectionDescription/>
            <ThingsYouNeedCardSection/>
        </Row>
    );
}

export default ThingsYouNeedSection;
