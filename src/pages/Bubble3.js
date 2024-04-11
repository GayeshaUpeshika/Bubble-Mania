import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from ".././assets/menu/bubble01.jpeg";
import Image2 from ".././assets/menu/bubble02.jpeg";
import Image3 from ".././assets/menu/bubble03.jpeg";
import Image4 from ".././assets/menu/bubble04.jpeg";
import Image5 from ".././assets/menu/bubble05.jpeg";
import Image6 from ".././assets/menu/bubble06.jpeg";
import Image7 from ".././assets/menu/bubble07.jpeg";
import Image8 from ".././assets/menu/bubble08.jpeg";
import Cards from ".././components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Tiger Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 5,
    price: 1520.00,
  },
  {
    id: "0002",
    image: Image2,
    title: "Thai Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 4.5,
    price: 1250.00,
  },
  {
    id: "0003",
    image: Image3,
    title: "Lychee Fruit Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 4,
    price: 1320.00,
  },
  {
    id: "0004",
    image: Image4,
    title: "Matcha Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 3.5,
    price: 1100.00,
  },
  {
    id: "0005",
    image: Image5,
    title: "Coffee Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 3.0,
    price: 1450.00,
  },
  {
    id: "0006",
    image: Image6,
    title: "Strawberry Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 3,
    price: 1780.00,
  },
  {
    id: "0007",
    image: Image7,
    title: "Milo Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 2.5,
    price: 2100.00,
  },
  {
    id: "0008",
    image: Image8,
    title: "Mango Milk Tea",
    paragraph: "Almond, Coffee, Caramel, Taro, Barley, Chocolate, Custard",
    rating: 2.0,
    price: 1850.00,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR POPULAR BUBBLE TEA</h2>
            <p className="para">
            Bubble tea is a Taiwanese recipe made by blending tea with milk, fruit and fruit juices, 
            then adding tasty tapioca pearls and shaking vigorously.
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>Bubble Waffles</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>Bubble Waffles</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;