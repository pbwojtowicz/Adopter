import React, { Component } from 'react';
import Faq from './Faq';
import Mapa from './Mapa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Image, Card, Row, Col, ListGroup } from 'react-bootstrap';
import Img from '../img/pets.png';
import Img2 from '../img/dog-walker.jpeg'
import Img1 from '../img/11.jpg'
import Img3 from '../img/9.jpg'
import Img4 from '../img/8.jpg'
import Img5 from '../img/dog4.jpg'

export class Main extends Component {
  render() {
    return (
        <Container>
        <Row className="bg-dark text-light p-5 text-center text-sm-start">
        <Container className='d-sm-flex align-items-center justify-content-between'>
          <Col sm={7}>

            <h1 class='mb-3'>Znajdź swojego nowego 
                <span class="text-warning"> najlepszego przyjaciela</span>
            </h1>

            <p class='my-4 lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique deleniti possimus magnam corporis ratione facere!</p>
            <Button  variant="outline-warning" size="lg">
                Search for pets
            </Button>
          </Col>
          <Col sm={5}>
            <Image 
                src={Img}
                fluid
                //className='img-fluid w-50 d-none d-sm-block'
            />

          </Col>
        </Container>
      </Row>
        
      

      <Row bg="dark" className="my-5">
        <Col sm={5}>
            <Image 
                src={Img2}
                fluid
                //className='img-fluid w-50 d-none d-sm-block'
            />

        </Col>
            <Col sm={7} >
                <div class="col-md p-5 row align-items-center justify-content-between">

                
                <h2>Proces adopcyjny</h2>
                <p class="lead">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Similique deleniti possimus magnam corporis ratione facere!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores suscipit
                    quae similique laboriosam iste minus placeat odit velit quos,
                    nulla architecto amet voluptates?
                </p>
                <a href="#" class="btn btn-light mt-3">
                    <i class="bi bi-chevron-right"></i> Czytaj dalej
                </a>
                </div>
        </Col>
        
      </Row>
      <Container >

                <Row>
                <Card className='text-center  my-5 py-4'>
                    <Card.Body> Zwierzęta czekające na adopcję</Card.Body>
                </Card>
            </Row>
            <Row className="my-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img1} />
                        <Card.Body>
                            <Card.Title>Fiona</Card.Title>
                            <Card.Text>
                            Grzeczna kotka, w podeszłym wieku. Mało towarzyska, ale kulturalna i zadbana.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img5} />
                        <Card.Body>
                            <Card.Title>Astrid</Card.Title>
                            <Card.Text>
                            Pół roczna zdrowa suczka. Po komplecie szczepień, bez problemów ze zdrowiem.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img3} />
                        <Card.Body>
                            <Card.Title>Leon</Card.Title>
                            <Card.Text>
                            Mały zadbany kotek. Lubi się bawić piłką. Dobrze znosi obecność innych zwierząt
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                        </Card.Body>
                    </Card>
                
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Img4} />
                        <Card.Body>
                            <Card.Title>Lato</Card.Title>
                            <Card.Text>
                            Czteroletni, duży pies. Ma problemy z agresją, szuka domu bez innych zwierząt i dzieci.
                            </Card.Text>
                            <Button variant="outline-dark">Czytaj dalej</Button>
                        </Card.Body>
                    </Card>
                
                </Col>
                
            </Row>
            <Row>
                <Button className="py-4" variant="outline-dark">Poznaj więcej zwierząt</Button>
            </Row>  
        </Container>
      <Faq/>
      <Row className="my-5">
        <Col>
            <ListGroup>
                <ListGroup.Item>
                        <span class="fw-bold">Main Location:</span> Rybna 3, 30-254 Kraków
                    </ListGroup.Item>
                <ListGroup.Item>
                        <span class="fw-bold">Phone:</span> 12 429 92 41
                    </ListGroup.Item>
                <ListGroup.Item>
                    <span class="fw-bold">Email:</span> biuro@schronisko.krakow.pl
                </ListGroup.Item>
                <ListGroup.Item>
                    <span class="fw-bold">Opening hours:</span> 10:00-16:00                
                </ListGroup.Item>
                
        </ListGroup>
        </Col>
        <Col className="px-5">
            <Mapa/>
        </Col>
      </Row>

      </Container>
      
      

    )
  }
}

export default Main
