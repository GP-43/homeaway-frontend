import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function AddNewRentSelectDateAndTime() {
  const [recurring, setRecurring] = useState(false);
  const [recurringType, setRecurringType] = useState("");
  return (
    <>
      <h4>Select Your Available Time</h4>
      <Row className="d-flex">
        <Col>
          <label>From Date</label>
        </Col>
        <Col>
          <input type="date" />
        </Col>
        <Col>
          <select name="" id="">
            <option value="">12.00</option>
            <option value="">12.30</option>
            <option value="">01.00</option>
            <option value="">01.30</option>
            <option value="">02.00</option>
            <option value="">02.30</option>
            <option value="">03.00</option>
            <option value="">03.30</option>
            <option value="">04.00</option>
            <option value="">04.30</option>
            <option value="">05.00</option>
            <option value="">05.30</option>
            <option value="">06.00</option>
            <option value="">06.30</option>
            <option value="">07.00</option>
            <option value="">07.30</option>
            <option value="">08.00</option>
            <option value="">08.30</option>
            <option value="">09.00</option>
            <option value="">09.30</option>
            <option value="">10.00</option>
            <option value="">10.30</option>
            <option value="">11.00</option>
            <option value="">11.30</option>
          </select>
        </Col>
        <Col>
          <select>
            <option value="">AM</option>
            <option value="">PM</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="">Duration per day</label>
        </Col>
        <Col>
          <select name="" id="">
            <option value="2">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            <option value="">14</option>
            <option value="">15</option>
            <option value="">16</option>
            <option value="">17</option>
            <option value="">18</option>
            <option value="">19</option>
            <option value="">20</option>
            <option value="">21</option>
            <option value="">22</option>
            <option value="">23</option>
            <option value="">24</option>
          </select>
        </Col>
        <Col>
          <label htmlFor="">hrs</label>
        </Col>
        <Col>
          <select>
            <option value="30">0</option>
            <option value="30">30</option>
          </select>
        </Col>
        <Col>
          <label htmlFor="">mins</label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="">Recurring</label>
        </Col>
        <Col>
          <input
            type="checkbox"
            checked={recurring}
            onChange={(e) => setRecurring(e.target.checked)}
          />
        </Col>
      </Row>
      <Row className={!recurring && "d-none"}>
        <Row>
          <label htmlFor="">Reccurance</label>
        </Row>
        <Row>
          <Col>
            <input
              type="radio"
              value="daily"
              id="Daily"
              name="recurring"
              onChange={(e) => setRecurringType(e.target.value)}
            />
            <label htmlFor="">Daily</label>
          </Col>
          <Col>
            <input
              type="radio"
              value="weekly"
              id="Weekly"
              name="recurring"
              onChange={(e) => setRecurringType(e.target.value)}
            />
            <label htmlFor="">Weekly</label>
          </Col>
          <Col>
            <input
              type="radio"
              value="monthly"
              id="Monthly"
              name="recurring"
              onChange={(e) => setRecurringType(e.target.value)}
            />
            <label htmlFor="">Monthly</label>
          </Col>
        </Row>
        <Row className={!(recurringType === "daily") && "d-none"}>
          <Row>
            <h5>Daily</h5>
          </Row>
          <Row>
            <label htmlFor="">End date</label>
            <input type="date" />
          </Row>
        </Row>
        <Row className={!(recurringType === "weekly") && "d-none"}>
          <Row>
            <h5>Weekly</h5>
          </Row>
          <Row>
            <label htmlFor="">End date</label>
            <input type="date" />
          </Row>
          <Row>
            <Col>
              <label htmlFor="">Occurs on</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Sunday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Monday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Tuesday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Wednesday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Thursday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Friday</label>
              <input type="checkbox" />
            </Col>
            <Col>
              <label htmlFor="">Saturday</label>
              <input type="checkbox" />
            </Col>
          </Row>
        </Row>
        <Row className={!(recurringType === "monthly") && "d-none"}>
          <h5>Monthly</h5>
          <Row>
            <label htmlFor="">End date</label>
            <input type="date" />
          </Row>
          <Row>
            <Col>
              <select name="" id="">
                <option value="">First</option>
                <option value="">Second</option>
                <option value="">Third</option>
                <option value="">Fourth</option>
                <option value="">Last</option>
              </select>
            </Col>
            <Col>
              <select name="" id="">
                <option value="">Sunday</option>
                <option value="">Monday</option>
                <option value="">Tuesday</option>
                <option value="">Wednesday</option>
                <option value="">Thursday</option>
                <option value="">Friday</option>
                <option value="">Saturday</option>
              </select>
            </Col>
          </Row>
        </Row>
        {console.log(recurringType)}
      </Row>
    </>
  );
}

export default AddNewRentSelectDateAndTime;
