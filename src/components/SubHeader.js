import { Jumbotron, Button, Container } from "react-bootstrap";

import React, { Component } from "react";

class SubHeader extends Component {
  state = {
    quote: "",
  };
  quotes = [
    "We take photos as a return ticket to a moment otherwise gone",
    "Today's moments are tomorrow's memories",
    "The best things in life are the people you love, the places you go, and the memories you make",
    "Happy times come and go, but the memories stay forever",
    "Some memories never fade",
    "Every picture has a story to tell",
    "Sometimes you will never know the value of a moment, until it becomes a memory",
  ];
  randomItemGenerator = () =>
    this.quotes[Math.floor(Math.random() * this.quotes.length)];

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ quote: this.randomItemGenerator() });
    }, 10000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  render() {
    return (
      <Jumbotron className="subHeader">
        <Container>
          <h1>Saving Precious Memories</h1>
          <h2 id="quote">
            {this.state.quote}</h2>
          <p>
            <Button id="getStarted">Get Started</Button>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
export default SubHeader;
