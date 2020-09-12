import React from "react";
import { CardDeck, Card, Container } from "react-bootstrap";
import card from "../assets/card6.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card5.jpg";

function View() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={card} className="cardImg" />
          <Card.Body className="cardBody">
            <Card.Title><h4>Save Images</h4></Card.Title>
            <Card.Text>
              <h6>Explore and understand simple moments that otherwise would be
              forgotten in the next moment.</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={card2} className="cardImg" />
          <Card.Body className="cardBody">
            <Card.Title><h4>Save video clips</h4></Card.Title>
            <Card.Text>
              <h6>What's is better than saving videos that really shows the energy and fun you and your loved ones display during those exciting moments</h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="gr">
          <Card.Img variant="top" src={card3} className="cardImg" />
          <Card.Body className="cardBody">
            <Card.Title><h4>Save thoughts</h4></Card.Title>
            <Card.Text><h6>Saving your thoughts and feelings enables you to relive them another day</h6></Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default View;
