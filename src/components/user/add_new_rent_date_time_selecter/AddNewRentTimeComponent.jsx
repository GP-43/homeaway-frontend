import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';



function AddNewRentTimeComponent(props) {
  // From Time
    const [rentingFromTimeList, setRentingFromTimeList] = useState([{ RentingFromTime: "", RentingToTime: "" }]);

    const handleRentingFromTimeChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...rentingFromTimeList];
      list[index][name] = value;
      setRentingFromTimeList(list);
      console.log(rentingFromTimeList);
    };
  
    const handleRentingFromTimeRemove = (index) => {
      const list = [...rentingFromTimeList];
      list.splice(index, 1);
      setRentingFromTimeList(list);
    };
  
    const handleRentingFromTimeAdd = () => {
      setRentingFromTimeList([...rentingFromTimeList, { RentingFromTime: "", RentingToTime: ""  }]);
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
                  name="RentingToTime"
                  type="time"
                  id="RentingToTime"
                  value={singleRentingFromTime.RentingToTime}
                  onChange={(e) => handleRentingFromTimeChange(e, index)}
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
                {singleRentingFromTime.RentingFromTime && <li>{singleRentingFromTime.RentingFromTime} {singleRentingFromTime.RentingToTime}</li>}
              </ul>
            ))}
        </div>
    </>
    );

}

export default AddNewRentTimeComponent