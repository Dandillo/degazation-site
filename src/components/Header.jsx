import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="bg-navbar-gray px-2 " expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#hero">
          Дегазация вагонов-цистерн
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white hover-red" href="#hero">
              Главная
            </Nav.Link>
            <Nav.Link className="text-white" href="#services">
              Наши услуги
            </Nav.Link>
            <Nav.Link className="text-white" href="#about">
              О компании
            </Nav.Link>
            <Nav.Link className="text-white" href="#media">
              Медиа
            </Nav.Link>
            <Nav.Link className="text-white" href="#contact">
              Контакты
            </Nav.Link>
          </Nav>
          <span className="text-white">+7 (919) 982-99-99</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
