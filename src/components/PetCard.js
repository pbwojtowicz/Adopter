import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  Card,Col,Row } from 'react-bootstrap';
import Img1 from "../img/3.jpg"
import Img2 from "../img/5.jpg"
import Img3 from "../img/6.jpg"
import Img4 from "../img/8.jpg"
import Img5 from "../img/7.jpg"
import Img6 from "../img/dog4.jpg"
import Img7 from "../img/a.jpg"
import Img8 from "../img/c.jpg"


export class PetCard extends Component {
  render() {
    return (
      <div>
        <Row >
                <Col >
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img1} />
                        <Card.Body>
                            <Card.Title>Trelo</Card.Title>
                            <Card.Text>
                            Młody dog niemiecki. Duży pies, szukający domu z ogrodem. Lubi się bawić.
                            
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img6} />
                        <Card.Body>
                            <Card.Title>Astrid</Card.Title>
                            <Card.Text>
                                Pół roczna zdrowa suczka. Po komplecie szczepień, bez problemów ze zdrowiem.                            
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                        </Card>
                
                </Col>
                
                <Col >
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img2} />
                        <Card.Body>
                            <Card.Title>Kiwi</Card.Title>
                            <Card.Text>
                            Czteroletni, duży pies. Ma problemy z agresją, szuka domu bez innych zwierząt i dzieci.
                            
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                    
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img3} />
                        <Card.Body>
                            <Card.Title>Marko</Card.Title>
                            <Card.Text>
                            Pies pełny energii, kochający ludzi i świeże powietrze. Szuka domu na stałe.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                </Col>
                
                
            </Row>
            <Row >
                <Col >
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img4} />
                        <Card.Body>
                            <Card.Title>Lato</Card.Title>
                            <Card.Text>
                                Czteroletni, duży pies. Ma problemy z agresją, szuka domu bez innych zwierząt i dzieci.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col >
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img5} />
                        <Card.Body>
                            <Card.Title>Werka</Card.Title>
                            <Card.Text>
                                Kilkuletnia suczka z problemami ze stawami. Nie może biegać, ale lubi bawić się w domu.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                    
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img8} />
                        <Card.Body>
                            <Card.Title>Jurek</Card.Title>
                            <Card.Text>
                                Pies pełny energii, kochający ludzi i świeże powietrze. Szuka domu na stałe.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card className="m-1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img7} />
                        <Card.Body>
                            <Card.Title>Azor</Card.Title>
                            <Card.Text>
                                Młoda Fretka. Odrobaczona i zaszczepiona. Kocha zabawę z piłką. Szuka rodziny.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                            <Button className="ms-5"  size ="lg" variant="light">♡</Button>
                           
                        </Card.Body>
                        </Card>
                
                </Col>
                
            </Row>
        
      </div>
    )
  }
}

export default PetCard
