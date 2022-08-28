import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import ReactDOM from "react-dom";
import AddNewRentTimeComponent from "./AddNewRentTimeComponent";



function AddNewRentSheduleSelection() {
    const [serviceList, setServiceList] = useState([{ service: "" }]);

    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      setServiceList(list);
    };
  
    const handleServiceRemove = (index) => {
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    };
  
    const handleServiceAdd = () => {
      setServiceList([...serviceList, { service: "" }]);
    };
  
    return (
      <form className="App" autoComplete="off">
        <div className="form-field">
          <label htmlFor="service">Service(s)</label>
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="date"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {serviceList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}

              </div>
              <div className="second-division">
                {serviceList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>

              

              <AddNewRentTimeComponent date = {singleService.service}/>
              
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