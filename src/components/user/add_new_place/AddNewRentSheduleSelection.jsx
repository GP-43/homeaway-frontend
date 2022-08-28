import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import ReactDOM from "react-dom";
import AddNewRentTimeComponent from "./AddNewRentTimeComponent";



function AddNewRentSheduleSelection() {
    const [rentingDateList, setrentingDateList] = useState([{ rentingDate: "" }]);

    const handleRentingDate = (e, index) => {
      const { name, value } = e.target;
      const list = [...rentingDateList];
      list[index][name] = value;
      setrentingDateList(list);
    };
  
    const handleRentingDateRemove = (index) => {
      const list = [...rentingDateList];
      list.splice(index, 1);
      setrentingDateList(list);
    };
  
    const handleRentingDateAdd = () => {
      setrentingDateList([...rentingDateList, { rentingDate: "" }]);
    };
  
    return (
      <form className="App" autoComplete="off">
        <div>
          {rentingDateList.map((singlerentingDate, index) => (
            <div key={index}>
              <div>
                <input
                  name="rentingDate"
                  type="date"
                  id="rentingDate"
                  value={singlerentingDate.rentingDate}
                  onChange={(e) => handleRentingDate(e, index)}
                  required
                />
                {rentingDateList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleRentingDateAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}

              </div>
              <div className="second-division">
                {rentingDateList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleRentingDateRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>

              

              <AddNewRentTimeComponent date = {singlerentingDate.rentingDate}/>
              
            </div>

            
          ))}
        </div>
        {/* <div className="output">
          <h2>Date</h2>
          {serviceList &&
            serviceList.map((singleService, index) => (
              <ul key={index}>
                {singleService.service && <li>{singleService.service}</li>}
              </ul>
            ))}
        </div> */}
      </form>
    );

}

export default AddNewRentSheduleSelection