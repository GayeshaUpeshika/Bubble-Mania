import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bubble from ".././assets/hero/NewBubble.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Bubble} className="img-fluid" alt="Hero" width="600px"/>
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">Rs.800</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text" color="#e3000e">New Bubble</h1>
              <h2 className="text">With Boba</h2>
              <p className="text pt-2 pb-4">
              Pop into the world of sweetness with Bubble Mania's irresistible bubble waffles! 
              Our newest outlet is bubbling up soon to bring joy to every bite! .
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;