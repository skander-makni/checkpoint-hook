import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Rater from "./Rating";

const Movie = ({ cardMovie }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "black",
          border: "#11ffee00",
          borderRadius: "5%",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={cardMovie.posterUrl}
          width="260"
          height="260"
        />
        <Card.Body>
          <Card.Title> {cardMovie.title}</Card.Title>
          <Card.Text>{cardMovie.description}</Card.Text>
          <Rater rating={cardMovie.rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
