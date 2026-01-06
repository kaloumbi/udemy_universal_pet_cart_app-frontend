import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import d5 from "../../assets/images/d5.jpg";
//import vett from "../../assets/vett.jpg";

const Home = () => {
  return (
    <Container className="home-container mt-5 " >
      <Row>
        <Col md={6} className="mb-3" >  
          <Card>
            <Card.Img variant="top" src={d5} alt="About Us" className="hero-image" />
            <Card.Body>
              <h2 className="text-info">Who we are</h2>
              <Card.Title>
                Comprehensive Care for your car Furry Friends
              </Card.Title>
              <Card.Text>
                At Universal Pet Care, we believe every pet deserves the best.
                Our team of dedicated professionals is here to ensure your pet's
                health and happiness through comprehensive veterinary services.
                With decades of combined experience, our veterinarians and
                support staff are committed to providing personalized care
                tailored to the unique needs of each pet.our veterinarians and
                support staff are committed to providing personalized care
                tailored to the unique needs of each pet.
              </Card.Text>
              <Card.Text>
                We offer a wide range of services, from preventive care and
                routine check-ups to advanced surgical procedures and emergency
                care. Our state-of-the-art facility is equipped with the latest
                in veterinary technology, which allows us to deliver
                high-quality care with precision and compassion. We offer a wide
                range of services, from preventive care and routine check-ups to
                advanced surgical procedures and emergency care. Our
                state-of-the-art facility is equipped with the latest in
                veterinary technology, which allows us to deliver high-quality
                care with precision and compassion. Our state-of-the-art
                facility is equipped with the latest in veterinary technology,
                which allows us to deliver high-quality care.
              </Card.Text>
              <Button variant="outline-info"> Meet Our veterinarians</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-3" >  
          <Card>
            <Card.Img variant="top" src={d5} alt="About Us" className="hero-image" />
            <Card.Body>
              <h2 className="text-info">Who we are</h2>
              <Card.Title>
                Comprehensive Care for your car Furry Friends
              </Card.Title>

              <ListGroup variant="flush" className="services-list" >
                <ListGroup.Item> Veterinary Check-ups </ListGroup.Item>
                <ListGroup.Item> Emergency Surgery </ListGroup.Item>
                <ListGroup.Item> Pet Vaccinations </ListGroup.Item>
                <ListGroup.Item> Dental Care </ListGroup.Item>
                <ListGroup.Item> Spaying and neutering </ListGroup.Item>
                <ListGroup.Item> And many more ... </ListGroup.Item>
              </ListGroup>
              <Card.Text>
                We offer a wide range of services, from preventive care and
                routine check-ups to advanced surgical procedures and emergency
              </Card.Text>
              <Button variant="outline-info"> Meet Our veterinarians</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="card m-5 ">
        <h4>
          What people are saying about us {""}
          <span className="text-info">Universal Pet Care</span> Veterinarians
        </h4>
        <hr />

        <p className="text-center" >Here, we are going to be sliding veterinarians accross</p>
      </div>
    </Container>
  );
};

export default Home;
