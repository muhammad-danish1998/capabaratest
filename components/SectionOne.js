import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const SectionOnes = () => {
  return <div className="sectiononeCon">
    <Container>
      <Row>
        <Col sm={12} md={12} className="sectiononeContent">

          <h2 style={{marginBottom:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Donec sit amet semper erat. </h2>
          <div className="headerbtnContainer">
            <Button
              variant="outline-secondary"
              style={{ marginRight: "10px" }}
              className="action1"
            >
              Action1
            </Button>{" "}
            <Button variant="outline-secondary" 
            className="action2">Action2</Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>

  </div>;
};

export default SectionOnes;
