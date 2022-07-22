import React from "react";
import SheduleCard from "./SheduleCard";

function SheduleSection(props) {
    return (
        <div className="shedule-section-box">
            <div className="shedule-section">
                <h3 className="schedule-section-title">Schedule</h3>
                {props.data && props.data.map(i => <SheduleCard Title={i.title} Place={i.place} From={i.from} To={i.to} />)}
            </div>
        </div>
    );
}

export default SheduleSection;