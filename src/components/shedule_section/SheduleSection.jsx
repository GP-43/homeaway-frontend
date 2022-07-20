import React from "react";
import SheduleCard from "./SheduleCard";

function SheduleSection () {
    return (
        <div className="shedule-section">
            <h2>Schedule</h2>
            <SheduleCard/>
            <SheduleCard/>
        </div>
    );
}

export default SheduleSection;