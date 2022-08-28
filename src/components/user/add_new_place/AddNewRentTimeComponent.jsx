import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';



function AddNewRentTimeComponent(props) {
  // From Time
    const [rentingFromTimeList, setRentingFromTimeList] = useState([{ RentingFromTime: "" }]);

    const handleRentingFromTimeChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...rentingFromTimeList];
      list[index][name] = value;
      setRentingFromTimeList(list);
    };
  
    const handleRentingFromTimeRemove = (index) => {
      const list = [...rentingFromTimeList];
      list.splice(index, 1);
      setRentingFromTimeList(list);
    };
  
    const handleRentingFromTimeAdd = () => {
      setRentingFromTimeList([...rentingFromTimeList, { RentingFromTime: "" }]);
    };

    // To time
    const [rentingToTimeList, setRentingToTimeList] = useState([{ RentingToTime: "" }]);

    const handleRentingToTimeChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...rentingToTimeList];
      list[index][name] = value;
      setRentingToTimeList(list);
    };
  
    const handleRentingToTimeRemove = (index) => {
      const list = [...rentingToTimeList];
      list.splice(index, 1);
      setRentingToTimeList(list);
    };
  
    const handleRentingToTimeAdd = () => {
      setRentingToTimeList([...rentingToTimeList, { RentingToTime: "" }]);
    };
  
    return (
    <>
      
      <div className="form-field">
          {rentingFromTimeList.map((singleRentingFromTime, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <span> From </span>
                <input
                  name="RentingFromTime"
                  type="time"
                  id="RentingFromTime"
                  value={singleRentingFromTime.RentingFromTime}
                  onChange={(e) => handleRentingFromTimeChange(e, index)}
                  required
                />
                <span> To </span>
                <input
                  name="service"
                  type="time"
                  id="service"
                  value={singleRentingToTime.RentingToTime}
                  onChange={(e) => handleRentingToTimeChange(e, index)}
                  required
                />
                {rentingFromTimeList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleRentingFromTimeAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}

                    

              </div>
              <div className="second-division">
                {rentingFromTimeList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleRentingFromTimeRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="output">
          <h2>Date</h2>
          <ul>
            <li>
                  {props.date}
            </li>
          </ul>
          <h2>Time</h2>
          {rentingFromTimeList &&
            rentingFromTimeList.map((singleRentingFromTime, index) => (
              <ul key={index}>
                {singleRentingFromTime.RentingFromTime && <li>{singleRentingFromTime.RentingFromTime}</li>}
              </ul>
            ))}
        </div>
    </>
    );

}

export default AddNewRentTimeComponent