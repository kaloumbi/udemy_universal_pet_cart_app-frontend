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
        console.log("Données reçues de l'API :", data.data);
        setVeterinarians(data.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []); // <-- La dépendance est maintenant placée ici

  return (
    <Container>
      <Row className="justify-content-center">
        <h6 className="text-center mb-4">Meet our Veterinarians</h6>
      </Row>
      <Row className="justify-content-center">
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <Col md={4}>The search goes here</Col>
        <Col md={7}>
          {veterinarians.map((vet, index) => (
            <VeterinarianCard key={index} vet={vet} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VeterinarianListing;
