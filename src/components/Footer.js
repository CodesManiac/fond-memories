import React from "react";
import {
  Navbar,
  CardDeck,
  Card,
  ListGroup,
  Container,
  Nav,
} from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <CardDeck>
          <Card className="foot">
            <Navbar.Brand href="#home">
              <h2 className="logo">
                M<span className="ee">ee</span>
                <span>m</span>o
              </h2>
            </Navbar.Brand>
          </Card>
          <Card className="foot">
            <ListGroup>
              <Card.Header>
                <h4>Company</h4>
              </Card.Header>
              <Nav.Link href="#jobs">
                <h6 className="footLinks">Jobs</h6>
              </Nav.Link>
              <Nav.Link href="#about">
                <h6 className="footLinks">About</h6>
              </Nav.Link>
            </ListGroup>
          </Card>
          <Card className="foot">
            <ListGroup>
              <Card.Header>
                <h4>Useful Links</h4>
              </Card.Header>
              <Nav.Link href="#about">
                <h6 className="footLinks">Get The Mobile App</h6>
              </Nav.Link>
              <Nav.Link href="#help">
                <h6 className="footLinks">Help</h6>
              </Nav.Link>
              <Nav.Link href="#investors">
                <h6 className="footLinks">Investors</h6>
              </Nav.Link>
            </ListGroup>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}
export default Footer;
