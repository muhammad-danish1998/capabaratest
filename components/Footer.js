import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
  <Container style={{marginTop:"100px"}}>
      <Row >
        <Col xs={12} sm={12} md={3} lg={3} xl={3}  >
          <div className="imagelogoContainer" >
            <a href="">
              <Image
                src="/images/logoimg.png"
                alt="Picture of the author"
                width={110}
                height={150}
                className="footerimg1"
              />
            </a>
            <a href="">
              <Image
                src="/images/logoright.png"
                alt="Picture of the author"
                width={110}
                height={150}
                className="footerimg2"
              />
            </a>
            
          </div>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur erat libero, rutrum nec auctor rutrum</p>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} xl={7} style={{ textAlign: "center", marginBottom: "20px" }}>
          <Row>
            <Col xs={6} sm={3} md={6} lg={3} xl={3} >
              <div style={{ fontWeight: "700", marginBottom: "24px",fontSize:"20px",cursor:"pointer" }}>About Us</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
            </Col>
            <Col xs={6} sm={3} md={6} lg={3} xl={3}>
              <div style={{ fontWeight: "700", marginBottom: "20px",fontSize:"20px",cursor:"pointer" }}>Features</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
            </Col>
            <Col xs={6} sm={3} md={6} lg={3} xl={3}>
              <div style={{ fontWeight: "700", marginBottom: "20px",fontSize:"20px" ,cursor:"pointer"}}>Templates</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
            </Col>
            <Col xs={6} sm={3} md={6} lg={3} xl={3}>
              <div style={{ fontWeight: "700", marginBottom: "20px",fontSize:"20px",cursor:"pointer" }}>Pricing</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
              <div className="footerLinks">Heading 1</div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2} xl={2}>
          <div style={{ fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>Contact Us</div>
          <p style={{ textAlign: "justify", padding: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            erat libero, rutrum nec auctor rutrum </p>
        </Col>
      </Row>
 </Container>
    </div>
  );
};

export default Footer;
