import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";

const Sectionthree = () => {
  return (
    
    <Row>
      <Col sm={12} md={12} className="sectiononeContent" style = {{backgroundColor:"#EFEFEF"}}>

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
          
        </div>
      </Col>
    </Row>

  )
}

export default Sectionthree