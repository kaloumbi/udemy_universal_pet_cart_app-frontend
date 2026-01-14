import React from "react";
import { Accordion, Card, Col, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";

const VeterinarianCard = ({ vet }) => {
  return (
    <Col key={vet.id} className="mb-4 xs={12}" >
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center" >
              <Link>
                {vet.photo ? (
                  <Card.Img
                    src={`data:image/png;base64, ${vet.photo}`}
                    className="user-image"
                    alt="User Photo"
                  />
                ) : (
                  <Card.Img
                    src={Placeholder}
                    className="user-image"
                    alt="User Photo"
                  />
                )}
              </Link>
            </div>

            <div>
              <Card.Title className="title" >
                Dr.{vet.firstName} {vet.lastName}{" "}
              </Card.Title>
              <Card.Title>
                <h6> {vet.specialization} </h6>
              </Card.Title>
              <Card.Title className="review rating-stars" >
                Reviews: Some stars
                <Link to {""} >Book appointment</Link>
              </Card.Title>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <div>
                <Link to={""} className="link-2" >See what people are saying about</Link> 
                <span className="margin-letf-space" >Dr.{vet.firstName} </span>
            </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};

export default VeterinarianCard;
