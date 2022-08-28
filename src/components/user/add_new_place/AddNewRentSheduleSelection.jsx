import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from 'react';
import ReactDOM from "react-dom";
import AddNewRentDateComponent from "./AddNewRentDateComponent";






function AddNewRentSheduleSelection() {

    

    const [serviceList, setServiceList] = useState([{service: ""}]);

    const handleServiceAdd = () => {
        setServiceList([...serviceList, {service: ""}])
    }

    const handleServiceRemove = (index) => {
        const list = [...serviceList]
        list.splice(index, 1)
        setServiceList(list)
    }

    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    return(
        <>
            <form autoComplete="off">
                <div>
                    <label htmlFor="service">Service(s)</label>

                    {serviceList.map((singleService,index) => (
                    <div key={index}>
                        <div>
                            <input type="text" name="sevice" id="service" required
                            value={singleService.service}
                            onChange = {(e) => handleServiceChange(e, index)}
                            />
                            <button type="button"
                                onClick={handleServiceAdd}
                            >
                                <span>add a service</span>
                            </button>
                        </div>
                        <div>
                            {console.log(serviceList)}
                            {serviceList.length > 1 && (
                                <button
                                    onClick={() => handleServiceRemove(index)}
                                >
                                    <span>remove</span>
                                </button>
                            )}
                            
                        </div>
                    </div>
                    ))}
                </div>
                <div>
                    <h2>output</h2>
                    {
                        serviceList.map((singleService, index) => 
                            <ul key={index}>
                                {singleService.service && 
                                    <li>
                                        {singleService.service}
                                    </li>
                                }
                            </ul>
                        )
                    }
                </div>
            </form>
        </>
    )








    // const Input = () => {
    //     return <input placeholder="Your input here" />;
    //   };

    //   const Form = () => {
    //     const [inputList, setInputList] = useState([]);
      
    //     const onAddBtnClick = event => {
    //       setInputList(inputList.concat(<Input key={inputList.length} />));
    //     };
      
    //     return (
    //       <div>
    //         <button onClick={onAddBtnClick}>Add input</button>
    //         {inputList}
    //       </div>
    //     );
    //   };

    // // const [fromDate, setFromDate] = useState('')
    // // const [toDate, setToDate] = useState('')
    // // const date_array = [{ date: "20" }, { date: "21" }, { date: "22" }, { date: "23" }, { date: "24" }, { date: "25" }, { date: "26" }, { date: "27" }, { date: "28" }, { date: "29" }, { date: "30" }, { date: "01" }, { date: "02" }]

    // return (
    //     // <Row className="add-new-rent-shecule-selection">
    //     //     <h4>Plan</h4>
    //     //     <Row>
    //     //         <Col xs={2} > <input type="date" onChange={event => { setFromDate(event.target.value) }} /> </Col>
    //     //         <Col xs={1} > <p>to</p> </Col>
    //     //         <Col xs={2} > <input type="date" onChange={event => { setToDate(event.target.value) }} /> </Col>

    //     //         <Row className="add-new-rent-schecule-selection-data-row">
    //     //             {date_array.map(i => <AddNewRentDateComponent date={i.date} />)}
    //     //         </Row>

    //     //         {console.log(fromDate, toDate)}
    //     //     </Row>
    //     // </Row>

    //     <>
    //         <h4>Shedule</h4>

            
  
    //         {ReactDOM.render(<Form />, document.getElementById("form"))}
            
    //     </>

    // )
}

export default AddNewRentSheduleSelection