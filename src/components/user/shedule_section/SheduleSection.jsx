import React from "react";
import { Container } from "react-bootstrap";
import SheduleCard from "./SheduleCard";

function SheduleSection() {

    const schedule_data = [{ title: "Meeting Room_01", place: "Gampaha", from: '08.30', to: '10.00' },
    { title: "Meeting Room_02", place: "Gall", from: '07.30', to: '10.00' },
    { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' },
        { title: "Meeting Room_01", place: "Gampaha", from: '14.30', to: '16.00' }
    ];

    return (
            <div className="schedule-section-box ps-2 mt-4">
                <h5 className="schedule-section-title position-sticky">Schedule</h5>
                <div className="schedule-section mt-4">
                    {schedule_data && schedule_data.map(i => <SheduleCard Title={i.title} Place={i.place} From={i.from} To={i.to} />)}
                </div>
            </div>
    );
}

export default SheduleSection;