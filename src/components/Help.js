import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      emailAddress: "",
      message: "",
    };
  }
  fieldChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });

  };
  submitMessage=event=>{
      event.preventDefault();
      alert(`Hi ${this.state.userName} your message has been submitted, we'll get back to you very soon.thanks`)
  }

  render() {
    const { userName, emailAddress, message } = this.state;
    return (
      <div id="helpBody">
        <Container>
          <div>
            <h1 id="heading">Need Help?</h1>
          </div>
          <div>
            <form onSubmit={this.submitMessage}>
              <h4>Write to us</h4>
              <input
                type="text"
                placeholder="Name"
                name="userName"
                value={userName}
                onChange={this.fieldChange}
              />
              <br />

              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={emailAddress}
                onChange={this.fieldChange}
              />
              <br/>
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                rows={5}
                onChange={this.fieldChange}
              />
              <br/>
              <button>Submit</button>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
export default Help;
