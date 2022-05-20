import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Image from "next/image";


const ContactForm = () => {
  return (
    <div className='container containercontact' >
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="contact-left">
          <p style={{ fontWeight: "bold", margin: "33px 10px", fontSize: "20px" }}>Contact Us</p>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <div className='imageTextcon'>
                  <div className='iconLeft'>

                    <Image
                      src="/images/loc.png"
                      alt="Picture of the author"
                      width={34.81}
                      height={34.79}
                    />
                  </div>
                  <div className='textright'>
                    <p>Morbi porttitor tortor sed pharetra vehicula.
                      Pellentesque erat sapien!</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <div className='imageTextcon'>
                  <div className='iconLeft'>

                    <Image
                      src="/images/mail.png"
                      alt="Picture of the author"
                      width={34.81}
                      height={34.79}
                    />
                  </div>
                  <div className='textright'>
                    <p>Morbi porttitor tortor sed pharetra vehicula.
                      Pellentesque erat sapien!</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <div className='imageTextcon'>
                  <div className='iconLeft'>

                    <Image
                      src="/images/phone.png"
                      alt="Picture of the author"
                      width={34.81}
                      height={34.79}
                    />
                  </div>
                  <div className='textright'>
                    <p>Morbi porttitor tortor sed pharetra vehicula.
                      Pellentesque erat sapien!</p>
                  </div>
                </div>
              </Col>


            </Row>
            <Row className='socialIcon'>
              <Col>
                <Image
                  src="/images/facebook.png"
                  alt="Picture of the author"
                  width={34.81}
                  height={34.79}
                />
              </Col>
              <Col>
                <Image
                  src="/images/linkedin.png"
                  alt="Picture of the author"
                  width={34}
                  height={34}
                />
              </Col>
              <Col>
                <Image
                  src="/images/whatsapp.png"
                  alt="Picture of the author"
                  width={34}
                  height={34}
                />
              </Col>
              <Col>
                <Image
                  src="/images/youtube.png"
                  alt="Picture of the author"
                  width={34}
                  height={34}
                />
              </Col>

            </Row>
          </Container>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="contact-right">
          <Container>
            <p className="formHeading">Please complete all fields so that we can tailor the experience to your needs.</p>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="email" placeholder="Last Name" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Business Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Type here ..." />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ margin: "20px 0px" }} >
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="By selecting this, you agree to the Data Protection Policy and Terms of Use."
                />

              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                <Button size="lg" style={{ width: "100%", backgroundColor: " #F26522; !important", borderRadius: "8px" }}>
                  Send
                </Button>

              </Col>

            </Row>
          </Container>
        </Col>

      </Row>
    </div>
  )
}

export default ContactForm