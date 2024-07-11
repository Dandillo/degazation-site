import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Media = () => {
  return (
    <div id="media" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Медиа</h2>
        <Row>
          <Col md={6}>
            <img src="" alt="Company" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <video controls className="w-100 rounded shadow">
              <source src="" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Media;
