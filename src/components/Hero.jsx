import React from "react";
import heroImage from "../img/hero.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-container">
        <Row>
          <Col className="text-center text-white hero-text p-4">
            <h2>Добро пожаловать на наш сайт</h2>
            <p>
              Профессиональная дегазация вагонов-цистерн. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Soluta repudiandae porro
              accusamus vel fuga dignissimos saepe animi, quos perspiciatis
              aspernatur est ex voluptas voluptates beatae inventore
              voluptatibus facere ea eligendi? Nam, quae labore, officia maiores
              dolorem error explicabo, sint perferendis ducimus commodi dicta
              ipsa consequuntur placeat. Vero expedita officiis non nesciunt ab,
              distinctio hic fuga exercitationem totam a molestias dolores!
            </p>
            <Button size="lg" className="button-red">
              УЗНАТЬ ПОДРОБНЕЕ
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
