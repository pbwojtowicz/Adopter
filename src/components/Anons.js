import React, { Component } from 'react'
import { Button, Container, Image, Card, Row, Col, ListGroup } from 'react-bootstrap';
import Img from '../img/dog4.jpg'

export class Anons extends Component {
  render() {
    return (
      <div>
         <Card className="p-5 m-5">
         <h1 style={{ textAlign: 'center' }}>Astrid</h1>
      <Card.Img variant="top" src={Img} />
      <Card.Body style={{ textAlign: 'justify' }}>
        
        <Card.Text>
        Pół roczna zdrowa suczka. Po komplecie szczepień, bez problemów ze zdrowiem.
        </Card.Text>
        <Card.Text>
        Astrid to jeszcze szczeniak, ma około sześciu miesięcy. Jest cudownym pieskiem i mamy nadzieję, że nie będzie musiał dorastać w schronisku czekając na dom.
        </Card.Text>
        <Card.Text>
Część z Was pewnie będzie zastanawiać się dlaczego taki uroczy maluch znalazł się w miejscu pełnym innych bezdomnych psów… Ktoś pozbył się Astrid, podrzucając go pod schronisko…
</Card.Text>
        <Card.Text>
Pierwsze chwile tutaj były dla niego trudne, był bardzo zagubiony. Na spacerze potrzebuje wsparcia opiekuna i czułości. Po chwili zaczyna się ośmielać, szukać bliskości i poczucia bezpieczeństwa. Jest bardzo miłym i kochanym psem. Jusi to naprawdę bardzo fajny dzieciak - wesoły, ciekawy i mądry. Chodzenie na smyczy jest dla niego małym wyzwaniem, ale bardzo dobrze sobie z nim radzi. Jusi nie ma problemu również w kontaktach z psami oraz kotami. Bez żadnego problemu może zamieszkać w domu gdzie są inne zwierzęta.
</Card.Text>
        <Card.Text>
Szukamy dla niego domu raczej poza dużym miastem, w spokojnej i przyjaznej psom okolicy.
</Card.Text>
        <Card.Text>
Jusi jest średniej wielkości psem i nie urośnie już dużo, ma ok. 6 msc. Jest wykastrowany, zachipowany i zaszczepiony.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Płeć: K</ListGroup.Item>
        <ListGroup.Item>Wiek: 6 miesięcy</ListGroup.Item>
        <ListGroup.Item>Wielkość: średni</ListGroup.Item>
        <ListGroup.Item>Agresja: nie</ListGroup.Item>
        <ListGroup.Item>Kastracja: tak</ListGroup.Item>
        <ListGroup.Item>Szczepienia: tak</ListGroup.Item>
        <ListGroup.Item>Wymagania: dom z ogrodem</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button className="m-3" variant="warning">Wypełnij formularz adopcyjny</Button>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default Anons
