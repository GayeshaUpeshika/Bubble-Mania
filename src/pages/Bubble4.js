import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from ".././assets/promotion/pro.jpg";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Calling All Bubble Tea Enthusiasts: Enjoy 50 Free Bubble Teas in Malabe!</h2>
              <p>
              Nothing brings people together like a good bubble tea! On March 30, 2024, we're thrilled to offer
               an exclusive opportunity to the first 50 customers at our Malabe location: claim your free bubble tea!
              </p>
              <ul>
                <li>
                  <p>
                  Indulge in the refreshing flavors and delightful textures of our handcrafted bubble teas, on us. 
                
                  </p>
                </li>
                <li>
                  <p>Whether you're a seasoned bubble tea connoisseur or new to the craze, this is an offer you won't want to miss.</p>
                </li>
                <li>
                  <p>
                  Be one of the first 50 customers at our Malabe location and receive a complimentary bubble tea. Don't miss out on this exclusive offer!
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;