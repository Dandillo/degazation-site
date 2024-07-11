import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <p className="mb-0 text-center">
          &copy; 2024 Дегазация вагонов-цистерн. Все права защищены.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
