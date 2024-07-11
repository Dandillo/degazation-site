import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    id: 1,
    title: "Дегазация вагонов из под СУГ",
    description:
      "Дегазация вагонов из под СУГ (газов, пропан-бутан и иных углеводородных газов) с помощью вакуума без применения пара.",
  },
  {
    id: 2,
    title: "Удаление влаги и ржавчины",
    description:
      "Удаление влаги, воды, частично ржавчины, остатков масла. Все работы проводятся без вскрытия котла.",
  },
  {
    id: 3,
    title: "Предотвращение ржавчины",
    description:
      "Разработана технология предотвращения образования ржавчины на внутренней поверхности котла.",
  },
  {
    id: 4,
    title: "Заполнение  азотом",
    description: "Заполнение азотом перед плановыми ремонтами и наливом.",
  },
  {
    id: 5,
    title: "Профилактический ремонт",
    description:
      "Проведение ППР и ЗПА, профилактический ремонт запорной арматуры и клапанов.",
  },
  {
    id: 6,
    title: "Коммерческий ремонт",
    description: "Коммерческий ремонт по котлу.",
  },
];

const Services = () => {
  return (
    <div id="services" className="section py-5">
      <Container>
        <h2 className="text-center mb-5 text-white">Наши услуги</h2>
        <Row>
          {services.map((service) => (
            <Col md={4} className="mb-4" key={service.id}>
              <Card className="bg-gray border-danger border-3 card-rectangle h-100">
                <Card.Body className="text-white text-center  flex flex-column justify-content-around">
                  <Card.Title className="fs-3 border-bottom border-danger px-2 pb-2 ">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="fs-5 mt-9">
                    {service.description}
                  </Card.Text>
                </Card.Body>{" "}
                <Card.Footer className=" fs-4 border-top border-danger text-white text-center">
                  Цена: по запросу
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
