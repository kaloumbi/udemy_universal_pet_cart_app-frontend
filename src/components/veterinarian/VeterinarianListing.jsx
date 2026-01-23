import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import VeterinarianCard from "./VeterinarianCard";
import { getVeterinarians } from "./VeterinarianService";

const VeterinarianListing = () => {
  const [veterinarians, setVeterinarians] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getVeterinarians()
      .then((data) => {
        console.log("Données reçues de l'API :", data.data); // <--- AJOUTE CECI
        setVeterinarians(data.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      }, []);
  });

  return (
    <Row>
      <h6>Meet our Veterinarians</h6>
      {errorMessage && <div style={{color : 'red'}} > {errorMessage} </div>}
      <Col>
        <Container>
          <Row>The search goes here</Row>
        </Container>
      </Col>
      <Col>
        <Container>
          <Row>
            {veterinarians.map((vet, index) => {
              <VeterinarianCard key={index} vet={vet} />;
            })}
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default VeterinarianListing;
