import React from "react";
import SheduleSection from "../../components/shedule_section/SheduleSection";
import MyBookingSection from "../../components/my_bookings/MyBookingSection";
import UserCalendar from "../../components/calendar/UserCalendar";

import place1 from "../../assets/images/places_image_gallery/place1.jpg";
import place2 from "../../assets/images/places_image_gallery/place2.jpg";
import place3 from "../../assets/images/places_image_gallery/place3.jpg";
import place4 from "../../assets/images/places_image_gallery/place4.jpg";
import place5 from "../../assets/images/places_image_gallery/place5.jpg";
import place6 from "../../assets/images/places_image_gallery/place6.jpg";
import place7 from "../../assets/images/places_image_gallery/place7.jpg";
import place8 from "../../assets/images/places_image_gallery/place8.jpg";

function UserBookings() {
    const schedule_data = [{ title: "Meeting Room_01", place: "Gampaha", from: '08.30', to: '10.00' },
    { title: "Meeting Room_02", place: "Gall", from: '07.30', to: '10.00' },
    { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' },
    { title: "Meeting Room_03", place: "Kandy", from: '09.30', to: '10.00' }
    ];

    const My_Bookings = [
        {
            Src: place1,
            Title: "Meeting room",
            City: "Colombo",
            Price: "Rs.2500",
            Quantity: 8,
            Rating: 4.0,
        },
        {
            Src: place2,
            Title: "Study room",
            City: "Gampaha",
            Price: "Rs.3000",
            Quantity: 20,
            Rating: 4.8,
        },
        {
            Src: place3,
            Title: "Study room",
            City: "Kurunegala",
            Price: "Rs.2000",
            Quantity: 10,
            Rating: 3.8,
        },
        {
            Src: place4,
            Title: "Meeting room",
            City: "Jaffna",
            Price: "Rs.4500",
            Quantity: 30,
            Rating: 4.2,
        },
        {
            Src: place5,
            Title: "Meeting room",
            City: "Maho",
            Price: "Rs.3500",
            Quantity: 43,
            Rating: 1.2,
        },
        {
            Src: place6,
            Title: "Study room",
            City: "chilaw",
            Price: "Rs.4000",
            Quantity: 50,
            Rating: 4.9,
        },
        {
            Src: place7,
            Title: "Study room",
            City: "Mount lavinia",
            Price: "Rs.2500",
            Quantity: 20,
            Rating: 3.0,
        },
        {
            Src: place8,
            Title: "Meeting room",
            City: "Rathmalane",
            Price: "Rs.5000",
            Quantity: 12,
            Rating: 2.8,
        },
    ];
    return (
        <div className="my-booking-shedule">
            <MyBookingSection data={My_Bookings}/>

            <div>
            <UserCalendar/>
            <SheduleSection data={schedule_data} />
            
            </div>
        </div>
    );
}

export default UserBookings;