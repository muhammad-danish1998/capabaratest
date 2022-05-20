import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from "next/image";
const SectionTwo = () => {
    return (
        <div>
        
            <Container>
                <h1 style={{ textAlign: "center",marginBottom:"60px" ,marginTop: "50px" }}>Lorem ipsum dolor sit amet, consectetur. </h1>
                <Row>
                    <Col  xs= "12 , order-first "    md="6 , order-first " lg="6 , order-first " xl="6 , order-first " className="secTwoImgleft " >
                        <Image
                            src="/images/headerimg.png"
                            alt="Picture of the author"
                            width={639}
                            height={417}
                            className="footerimg1"
                        />
                    </Col>
                    
                    <Col  xs={12} sm={12} md={6} lg={6} xl={6} className="secTwoImgright  " >
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet semper.</h2>
                        <p>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus, et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa. Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <Button
                            variant="outline-secondary"
                            style={{ marginRight: "10px" }}
                            className="action1"
                        >
                            Action1
                        </Button>{" "}
                    </Col>
                </Row>
                <Row>
                   
                    
                    <Col  xs={12} sm={12} md={6} lg={6} xl={6} className="secTwoImgright  " >
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet semper.</h2>
                        <p>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus, et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa. Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <Button
                            variant="outline-secondary"
                            style={{ marginRight: "10px" }}
                            className="action1"
                        >
                            Action1
                        </Button>{" "}
                    </Col>
                    <Col  xs= "12 , order-second "    md="6 , order-second " lg="6 , order-second " xl="6 , order-second " className="secTwoImgleft" >
                        <Image
                            src="/images/headerimg.png"
                            alt="Picture of the author"
                            width={639}
                            height={417}
                            className="footerimg1"
                        />
                    </Col>
                </Row>
                <Row>
                  
                    



                <Col  xs={12} sm={12} md={6} lg={6} xl={6} className="secTwoImgleft" >
                        <Image
                            src="/images/headerimg.png"
                            alt="Picture of the author"
                            width={639}
                            height={417}
                            className="footerimg1"
                        />
                    </Col>
                    <Col  xs={12} sm={12} md={6} lg={6} xl={6} className="secTwoImgright order-xs-2 order-sm-2 order-md-2 order-lg-2 order-xl-2 " >
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet semper.</h2>
                        <p>Mauris facilisis, risus sed eleifend luctus, magna arcu iaculis purus, et pretium diam massa eget nisl. Donec gravida lacinia enim, non dapibus massa. Curabitur facilisis massa tortor, mattis tempus massa posuere vel.</p>
                        <Button
                            variant="outline-secondary"
                            style={{ marginRight: "10px" }}
                            className="action1"
                        >
                            Action1
                        </Button>{" "}
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default SectionTwo