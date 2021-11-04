/*eslint-disable*/
import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">로그인</Nav.Link>
                <Nav.Link as={Link} to="/register">회원가입</Nav.Link>
                <Nav.Link as={Link} to="/cart">장바구니</Nav.Link>
                <NavDropdown title="카테고리" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/product/clothes">의류/잡화</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/beauty">뷰티</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/babies">출산/유아용품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/foods">식품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/kitchen">주방용품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/living">생활용품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/home">홈/인테리어</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/digital">가전/디지털</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/sports">스포츠/레저</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/car">차량용품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/books">도서/음반/CD</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/hobby">취미/완구</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/office">문구/오피스</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/pet">반려동물용품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/health">헬스/건강식품</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/product/travel">여행/티켓</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavBar
