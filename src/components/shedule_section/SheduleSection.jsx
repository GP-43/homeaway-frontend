import React from "react";
import SheduleCard from "./SheduleCard";

function SheduleSection () {
    return (
        <div className="shedule-section">
            <h3 className="schedule-section-title">Schedule</h3>
            <SheduleCard/>
            <SheduleCard/>
            <SheduleCard/>
        </div>
    );
}

export default SheduleSection;