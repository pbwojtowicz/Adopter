import React, { Component } from 'react'
import { Button, Form, Row, Col , InputGroup, ButtonGroup, Card } from 'react-bootstrap';
import PetCard from './PetCard';
import Img from "../img/profil.jpeg"


export class Account extends Component {
  render() {
    return (
      <div>
        <Row className="m-3">

        
        <Col sm={5}>
        <Card>
        <Card.Img variant="top" src={Img} />
          <Card.Title className="mx-5 mt-5">Anna</Card.Title>
          <Card.Title className="mx-5">Nowak</Card.Title>
          <Button variant="outline-dark" className="m-5">Edytuj </Button>
          <Button variant="warning" className="mx-5 mb-5">Skrzynka odbiorcza</Button>
        </Card>
        </Col>
        <Col sm={7}>
<Card className="p-3">
  <h1>Lista Ulubionych</h1>
  <PetCard/>
</Card>
        </Col>
        </Row>
      </div>
    )
  }
}

export default Account
