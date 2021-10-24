import React from 'react'
import {Form, Button} from 'react-bootstrap'

function RegisterPage() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="아이디를 입력해주세요" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control type="password" placeholder="비밀번호 확인을 입력해주세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>닉네임</Form.Label>
              <Form.Control type="text" placeholder="Enter your Nickname" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이름</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>


            
            <Button variant="outline-primary" type="submit">
              회원가입
            </Button>
          </Form>
        </div>
      </div>
    );
}

export default RegisterPage
