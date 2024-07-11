import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" className="section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Контакты</h2>
        <p className="text-center">Телефон: +7 (123) 456-78-90</p>
        <p className="text-center">Email: info@degazation-site.com</p>
        <p className="text-center">Адрес: г. Москва, ул. Примерная, д. 1</p>
      </Container>
    </div>
  );
};

export default Contact;
