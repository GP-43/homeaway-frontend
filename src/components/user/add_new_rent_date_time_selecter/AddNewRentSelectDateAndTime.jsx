import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import ReactDOM from "react-dom";
import AddNewRentTimeComponent from "./AddNewRentTimeComponent";

function AddNewRentSelectDateAndTime() {
  const [rentingDateList, setrentingDateList] = useState([
    {
      rentingDate: "",
      rentingTimes: [{ RentingFromTime: "", RentingToTime: "" }],
    },
  ]);

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
    setrentingDateList([
      ...rentingDateList,
      {
        rentingDate: "",
        rentingTimes: [{ RentingFromTime: "", RentingToTime: "" }],
      },
    ]);
  };

  const handleRentingFromTimeRemove = (index, innerIndex) => {
    // const list = [...rentingFromTimeList];
    // list.splice(index, 1);
    // setRentingFromTimeList(list);
    const newRentingDateList = [...rentingDateList];
    newRentingDateList[index].rentingTimes.splice(innerIndex, 1);
    setrentingDateList(newRentingDateList);
  };

  const handleRentingFromTimeAdd = (index) => {
    const newRentingDateList = [...rentingDateList];
    newRentingDateList[index].rentingTimes.push({
      RentingFromTime: "",
      RentingToTime: "",
    });
    setrentingDateList(newRentingDateList);
  };

  const handleRentingTimeChange = (e, index, innerIndex) => {
    const { name, value } = e.target;
    const list = [...rentingDateList];
    list[index]["rentingTimes"][innerIndex][name] = value;
    setrentingDateList(list);
    console.log(rentingDateList);
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
            {/* <AddNewRentTimeComponent date = {singlerentingDate.rentingDate}/> */}
            //////////////////////////////////////////////////////////////
            {singlerentingDate.rentingTimes.map((rentingTime, innerIndex) => (
              <div key={index + "-" + innerIndex} className="services">
                <div className="first-division">
                  <span> From </span>
                  <input
                    name="RentingFromTime"
                    type="time"
                    id="RentingFromTime"
                    value={singlerentingDate.rentingTimes["RentingFromTime"]}
                    onChange={(e) =>
                      handleRentingTimeChange(e, index, innerIndex)
                    }
                    required
                  />
                  <span> To </span>
                  <input
                    name="RentingToTime"
                    type="time"
                    id="RentingToTime"
                    value={singlerentingDate.rentingTimes["RentingToTime"]}
                    onChange={(e) =>
                      handleRentingTimeChange(e, index, innerIndex)
                    }
                    required
                  />
                  {rentingDateList[index].rentingTimes.length - 1 ===
                    innerIndex && (
                    <button
                      type="button"
                      onClick={() => handleRentingFromTimeAdd(index)}
                      className="add-btn"
                    >
                      <span>Add time</span>
                    </button>
                  )}
                </div>
                <div className="second-division">
                  {rentingDateList[index].rentingTimes.length !== 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        handleRentingFromTimeRemove(index, innerIndex)
                      }
                      className="remove-btn"
                    >
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
            /////////////////////////////////////////////////////////////
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

export default AddNewRentSelectDateAndTime;
