import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Image from "next/image";


const TempCard = () => {
    return (
        <div>

            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: 12 }).map((val, idx) => (
                    <Col>
                        <Card >

                            <Image variant="top"
                                src="/images/card.png"
                                alt="Picture of the author"
                                width={156}
                                height={150}
                            />
                            <div>
                                <div className='cardCircle'></div>
                                <div className='cardSquire'></div>
                            </div>
                            <Card.Body>
                                <Card.Title>Lorem ipsum dolor sit amet, consect adipiscing elit.</Card.Title>
                                <Card.Text>
                                    <span>by CapyLora</span> <br /><br />
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TempCard