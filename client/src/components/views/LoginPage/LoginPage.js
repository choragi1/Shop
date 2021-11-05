import React from 'react'
import {Form, Button} from 'react-bootstrap'

function LoginPage() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter your ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              로그인
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default LoginPage
