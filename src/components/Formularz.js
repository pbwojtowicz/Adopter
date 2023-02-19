import React, { Component } from 'react'
import { Button, Form, Row, Col , InputGroup, ButtonGroup, Card } from 'react-bootstrap';

export class Formularz extends Component {
  render() {
    return (
      <div>
        
        <Card className="p-5 m-5">
      <Form >
      <h3 > Formularz adopcyjny</h3>
      <Row>
          <Col>
          <Form.Label>Imie i Nazwisko aplikanta</Form.Label>
          </Col>
          <Col>

          <InputGroup className="mb-3">
      
      <Form.Control placeholder="Imie" />
      <Form.Control placeholder="Nazwisko" />
    </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>Adres zamieszkania</Form.Label>
          </Col>
          <Col>
          <Form.Control type="address" className="form-control mb-3" placeholder="adres"/>
        <Form.Control type="address" className="form-control mb-3" placeholder="adres"/>
        <Col>
        <InputGroup className="mb-3">
      
      <Form.Control placeholder="Miasto" />
      <Form.Control placeholder="kod pocztowy" />
    </InputGroup>
        </Col>
          </Col>
        
        
        </Row>

        <Row>
          <Col>
          <Form.Label>Lista domowników</Form.Label>
          </Col>
          <Col>
           <Form.Control type="description" 
          className="form-control pb-5 mb-3" 
          placeholder="np. Anna, 40lat; Wanda, 30lat"/>
      
          </Col>

        </Row>
        <Row>
          <Col>
          <Form.Label>Numer Telefonu</Form.Label>
          </Col>
          <Col>
          <Form.Control type="description" 
          className="form-control  mb-3" 
          placeholder="123456789"/>
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Label>Lista pozostałych zwierząt w domu</Form.Label>
          </Col>
          <Col>
           <Form.Control type="description" 
          className="form-control pb-5 mb-3" 
          placeholder="np. Pies, Azor, 6 lat; Kot, Puszek, 1 rok"/>
      
          </Col>

        </Row>
        <Row>
          <Col>
          <Form.Label>Dodatkowe informacje</Form.Label>
          </Col>
          <Col>
           <Form.Control type="description" 
          className="form-control pb-5 mb-3" 
          placeholder=" "/>
      
          </Col>

        </Row>
       
      <div className="d-grid">
        <Button type="submit" variant="warning" size="lg"className="btn btn-primary m-3">
          Wyślij
        </Button>
      </div>
      
    </Form>
    </Card>
    </div>
    )
  }
}

export default Formularz
