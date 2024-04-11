import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/HomeStyle.css";

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden" id="card-body">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">Rs.{price}.00</h5>
            </div>
            <div className="add_to_card">
              <Link to="/">
                <i class="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;