import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SheduleCard from "./SheduleCard";
import axios from "axios";

function SheduleSection(props) {
  const userDetails = JSON.parse(sessionStorage.getItem("accessToken"));
  const curruser = JSON.parse(sessionStorage.getItem("currentuserrole"));
  const userId = userDetails.userId;
  const curruserrole = curruser.isRenter;
  //console.log("id", userId);

  //console.log(userDetails);
  const[placesdata, setPlacesdata] = useState([]);
  const [rentings, setRentings] = useState([]);
  const [userRole, setUserRole] = useState([]);
  const [userbookings, setuserBookings] = useState([]);

  useEffect((event) => {
    
    axios
      .get("http://localhost:4000/renter/scheduleofplaces/" + userId)
      .then((data) => {
        const rentings = data.data;
        setRentings({ ...rentings });
        console.log("rentings", rentings);
        console.log("shg",curruserrole);
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get("http://localhost:4000/renter/myrentings/" + userId)
      .then((data) => {
        const placesdata = data.data;
        setPlacesdata([ ...placesdata ]);
        console.log("places", placesdata);
        console.log("shg",curruserrole);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/renter/getuserrole/" + userId)
      .then((data) => {
        const userRole = data.data;
        setUserRole({ ...userRole });
        console.log(userRole);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/occupant/booking/" + userId)
      .then((data) => {
        const userbookings = data.data;
        setuserBookings({ ...userbookings });
        console.log("userbookings",userbookings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const user_role = userRole[0]?.role;
  console.log(user_role);

  const schedule_data = [
    { title: "Meeting Room_01", place: "Gampaha", from: "08.30", to: "10.00" },
    { title: "Meeting Room_02", place: "Gall", from: "07.30", to: "10.00" },
    { title: "Meeting Room_03", place: "Kandy", from: "09.30", to: "10.00" },
    { title: "Meeting Room_01", place: "Gampaha", from: "14.30", to: "16.00" },
  ];

  

  return (
    <div className="schedule-section-box ps-2 mt-4">
      <h5 className="schedule-section-title position-sticky">Schedule</h5>
      <div className={!(curruserrole) ? "d-none" : "schedule-section mt-4"}>
        {Object.keys(rentings).map((key, index) => {
          console.log("Place daaaaaaattaa", placesdata);
          const place = placesdata?.filter((place)=>place.id === rentings[index].place_id)[0]
          return (
          <SheduleCard
            index={index}
            Title={rentings[index].booking_id}
            Place={place?.title}
            From={rentings[index].start_date}
            To={rentings[index].end_date}
          />
        )})}
      </div>

      <div className={(curruserrole) ? "d-none" : "schedule-section mt-4"}>
        {Object.keys(userbookings).map((key, index) => (
          <SheduleCard
            index={index}
            Title={userbookings[index].booking_id}
            Place={userbookings[index].place_id}
            From={userbookings[index].start_date}
            To={userbookings[index].end_date}
          />
        ))}
      </div>
    </div>
  );
}

export default SheduleSection;
