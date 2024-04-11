import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bubble from ".././assets/about/bubble.jpeg";
import Salad from ".././assets/about/salad.jpeg";
import Delivery from ".././assets/about/delivery-bike.jpeg";

// Mock Data Cards
const mockData = [
  {
    image: Bubble,
    title: "Original",
    paragraph: `Food quality is a concept often based on the organoleptic characteristics (e.g., taste, aroma, appearance) and nutritional value of food. `,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Food quality is a concept often based on the organoleptic characteristics (e.g., taste, aroma, appearance) and nutritional value of food. `,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Food quality is a concept often based on the organoleptic characteristics (e.g., taste, aroma, appearance) and nutritional value of food. `,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The bubble tastes better when you eat it with your family</h2>
              <p>
              Let the bubbles talk ! Bubble Tea / Waffle Heaven! NAREHENPITA | KOTTAWA | KIRIBATHGODA | MALABE Come & Make Memories With Us 
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;