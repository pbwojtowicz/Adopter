import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col , InputGroup, ButtonGroup } from 'react-bootstrap';
import PetCard from './PetCard';



export class Search extends Component {
  render() {
    return (
      <div>
        <h1>Chcę zobaczyć:</h1>
        <Form>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
          Kategoria
        </Form.Label>
        <Col sm={10}>
        <Form.Select aria-label="Default select example">
          <option>Wszystkie zwierzęta</option>
          <option value="1">Psy</option>
          <option value="2">Koty</option>
          <option value="3">Inne</option>
    </Form.Select>
        </Col>
      </Form.Group>
<Row>
  <Col >
  <Form.Group  className="mb-3">
        <Form.Label >
          Płeć
        </Form.Label>
        
        <Form.Check
              type="radio"
              label="samice"
            />
            <Form.Check
              type="radio"
              label="samce"
            />
     
      </Form.Group>
  </Col>
  <Col >
  <Form.Label >
          Wielkość
        </Form.Label>
        <Form.Check
              type="radio"
              label="małe"
            />
            <Form.Check
              type="radio"
              label="srednie"
            />
            <Form.Check
              type="radio"
              label="duze"
            />
  </Col>
  <Col >
  <Form.Group  className="mb-3">
        <Form.Label >
          Wiek
        </Form.Label>
        
        <Form.Check
              type="radio"
              label="młode"
            />
            <Form.Check
              type="radio"
              label="dorosłe"
            />
            <Form.Check
              type="radio"
              label="seniorzy"
            />
     
      </Form.Group>
  </Col>
</Row>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 5 }}>
          <Button  variant="warning" size="lg">Wyszukaj</Button>
        </Col>
      </Form.Group>
    </Form>
        
        
        <PetCard/>
             
      </div>
    )
  }
}

export default Search
