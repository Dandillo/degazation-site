import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" className="section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">О компании</h2>
        <p>Описание компании, миссия, видение и т.д.</p>
      </Container>
    </div>
  );
};

export default About;
