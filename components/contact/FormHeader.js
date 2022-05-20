import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import TemplateCenter from '../templatte/TemplateCenter';
import ContactForm from './ContactForm';

const FormHeader = () => {
    return (
        <>
            <Row style={{
                backgroundColor: "#E2E2E2",

            }}>

                <Col sm={12} md={12} className="sectiononeContent" >

                    <h2 style={{ marginBottom: "30px" }}>Get In Touch with CAPABARA </h2>
                    <p> Morbi porttitor tortor sed pharetra vehicula. Pellentesque erat sapien!</p>

                </Col>
            </Row>
            
          <ContactForm />


        </>

    )
}

export default FormHeader