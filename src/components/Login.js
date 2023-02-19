import React, { Component } from 'react'
import { Button, Form, Row, Col , InputGroup, ButtonGroup, Card } from 'react-bootstrap';

export class Login extends Component {
  render() {
    return (
      <Card className="p-3 m-5">
      <Form >
      <h3 >Zaloguj się</h3>
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
        <p className="mt-3">
        Zapomniałeś <a href="#">hasła</a>?
      </p>
      </div>
      <div className="m-3">
        <Form.Check 
        type="checkbox"
        label="Zapamiętaj mnie"
      />
      </div>
      <div className="d-grid">
        <Button type="submit" className="btn btn-primary m-3">
          Zaloguj
        </Button>
      </div>
      <p className="forgot-password text-right m-3">
        Nie masz konta? <a href="#">Zarejestruj się.</a>
      </p>
    </Form>
    </Card>
    )
  }
}

export default Login
