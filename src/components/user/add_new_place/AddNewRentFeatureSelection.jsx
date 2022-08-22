import React from "react";
import { Row, Col} from "react-bootstrap";

function AddNewRentFeatureSelection() {
    return(
        
            <Row className="add-new-rent-feature-selection"> 
                <h4>Features</h4>
                <Row>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature1" className="ms-2" >Internet</label>
                    </Col>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature2" className="ms-2" >Parking</label>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature3" className="ms-2" >A/C</label>
                    </Col>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature4" className="ms-2" >Silent area</label>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature5" className="ms-2" >Can by food</label>
                    </Col>
                    <Col className="d-flex" >
                        <input type="checkbox" />
                        <label for="feature6" className="ms-2" >Washroom</label>
                    </Col>
                </Row>

            </Row>

            
        
    )
}

export default AddNewRentFeatureSelection