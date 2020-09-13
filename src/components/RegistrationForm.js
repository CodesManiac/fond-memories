import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      phone: "",
      residentialAddress: "",
      gender: "selectGender",
    };
    this.changeGender = this.changeGender.bind(this);
    this.saveData = this.saveData.bind(this);
  }
  fieldChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  changeGender(event) {
    this.setState({
      gender: event.target.value,
    });
  }
  // validateFields = () => {
  //   let firstNameError = "",
  //     lastNameError = "",
  //     emailError = "",
  //     password = "",
  //     phoneError = "",
  //     residenceError = "",
  //     genderError = "";

  //   if (this.state.emailAddress.includes("@")) {
  //     emailError='The entered email address is an invalid email';
  //   }
  //   if(emailError){
  //     this.setState({emailError});
  //     return false;
  //   }
  // };
  saveData = event => {
    alert(`You are welcome ${this.state.firstName}`);

    event.preventDefault();
    // const validInputs = this.validateFields();
    // if (validInputs) {
    //   // this.setState(this.state);
    // }
  };

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      phone,
      residentialAddress,
      gender,
    } = this.state;
    return (
      <form onSubmit={this.saveData}>
        <h4 id="regHead">Take a few minutes to sign up here</h4>

        <input
          type="text"
          placeholder="FirstName"
          name="firstName"
          value={firstName}
          onChange={this.fieldChange}
          required
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          name="lastName"
          value={lastName}
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
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.fieldChange}
        />
        <br />

        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={this.fieldChange}
        />
        <br />
        <textarea
          placeholder="Residence"
          name="residentialAddress"
          value={residentialAddress}
          rows={5}
          onChange={this.fieldChange}
        />
        <br />
        <select className="s" value={gender} onChange={this.changeGender}>
          <option value="selectGender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        {/* <input type="button" value="Submit" /> */}
        <button>Submit</button>
        <p>
          Already have an account?{" "}
          <Link to="/form/sign-in" className="li">
            Login
          </Link>
        </p>
      </form>
    );
  }
}

export default RegistrationForm;
