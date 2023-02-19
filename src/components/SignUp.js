import React, { Component } from 'react'
import { Button, Form, Row, Col , InputGroup, ButtonGroup, Card } from 'react-bootstrap';

export class Login extends Component {
  render() {
    return (
      <Card className="p-3 m-5" style={{ width: '30rem' }}>
      <Form >
      <h3 >Zarejestruj się</h3>
      <div className="m-3">
        <Form.Label>Imie</Form.Label>
        <Form.Control 
          type="email"
          className="form-control"
          placeholder="Wpisz imie"
        />
      </div>
      <div className="m-3">
        <Form.Label>Nazwisko</Form.Label>
        <Form.Control 
          type="email"
          className="form-control"
          placeholder="Wpisz nazwisko"
        />
      </div>
      <div className="m-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email"
          className="form-control"
          placeholder="Wpisz email"
        />
      </div>
      <div className="m-3">
        <Form.Label>Hasło</Form.Label>
        <Form.Control 
          type="password"
          className="form-control"
          placeholder="Wpisz hasło"
        />
      </div>
      
      <div className="d-grid">
        <Button type="submit" className="btn btn-primary m-3">
          Zarejestruj konto
        </Button>
      </div>
      <p className="forgot-password text-right m-3">
        Masz już konto? <a href="#">Zaloguj się</a>
      </p>
    </Form>
    </Card>
    )
  }
}

export default Login
