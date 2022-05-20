import React from 'react'
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import Image from "next/image";
import TempCard from './TempCard';


const TemplateCenter = () => {
  return (
    <div className='container containerTemplate' >

      <Row>

        <Col xs={0} sm={0} md={0} lg={3} xl={3} className="template-left">
          <Container className='btnContainerForm'>
            <p style={{ marginTop: "60px", fontWeight: "bold", padding:"0px 40px" }}>Gap Analysis</p>

            <nav className="navbar">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#" style={{backgroundColor:"#C4C4C4"}} >Inventory/Checklist</a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 1 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 2 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 3 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 4 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 5 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Sub 6 </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Form Automator </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Multi-function Applet </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Charts </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">Policy Generator </a>
                  </li>
                  <li className="nav-item">
                    <a className="linkVerticalbar nav-link" href="#">E-learning</a>
                  </li>
                </ul>
              </div>
            </nav>
          </Container>

        </Col>

        <Col xs={12} sm={12} md={12} lg={9} xl={9} className="contact-right">
          <Dropdown className = "dropDownTop" >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Inventory/Checklist
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <div className='contentRightTop' style={{ marginTop: "60px", fontWeight: "bold" }}>
            <p style={{fontWeight:"700",fontSize:"20px"}}>Inventory/Checklist</p>
            <p className='exploreMore'>Explore More ></p>
          </div>
          <TempCard />
        </Col>

      </Row>

    </div>
  )
}

export default TemplateCenter