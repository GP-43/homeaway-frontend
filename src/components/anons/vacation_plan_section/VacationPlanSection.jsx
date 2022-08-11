import React from "react";
import { Row, Col } from "react-bootstrap";
import VacationPlanSectionDescription from "../../../components/anons/vacation_plan_section/VacationPlanSectionDescription";
import Bestrentingplacessection from "../../../components/anons/best_renting_places/Bestrentingplacessection"
function VacationPlanSection() {
  return (
    <Row className="mx-0 ">
      <Col xs={12}>
        <VacationPlanSectionDescription />
      </Col>
      <Col xs={12}>
        <Bestrentingplacessection />
      </Col>
    </Row>
  );
}

export default VacationPlanSection;
