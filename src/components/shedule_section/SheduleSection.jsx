import React from "react";
import { Container } from "react-bootstrap";
import SheduleCard from "./SheduleCard";

function SheduleSection() {

    const schedule_data = [{ title: "Meeting Room_01", place: "Gampaha", from: '08.30', to: '10.00' },
    { title: "Meeting Room_02", place: "Gall", from: '07.30', to: '10.00' },
    { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' },
    { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' }
    ];

    return (


        <Container className="mt-1">
            <div className="schedule-section-box">
                <div className="schedule-section">
                    <h3 className="schedule-section-title">Schedule</h3>
                    {schedule_data && schedule_data.map(i => <SheduleCard Title={i.title} Place={i.place} From={i.from} To={i.to} />)}
                </div>
            </div>
        </Container>
    );
}

export default SheduleSection;