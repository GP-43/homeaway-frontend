import React from "react";
import SheduleSection from "../../components/shedule_section/SheduleSection";

function UserBookings () {
    const schedule_data = [{ title: "Meeting Room_01", place: "Gampaha", from: '08.30', to: '10.00' },
                            { title: "Meeting Room_02", place: "Gall", from: '07.30', to: '10.00' },
                            { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' },
                            { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' }
                        ];
    return (
        <div>
            <SheduleSection data = {schedule_data}/>
        </div>
    );
}

export default UserBookings;