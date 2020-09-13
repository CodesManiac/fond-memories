import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { Route,Switch } from "react-router-dom";
import '../styles/Registration.css';

class LoginDisplay extends Component {
  render() {
    return (
      <div className="registrationContainer">
      <div id="imageDiv">
       <h1 id="welcome">WELCOME</h1>
      </div>
      <div id="regForm">
      <Switch>
        <Route  exact path="/form/sign-up" component={RegistrationForm}></Route>
        <Route path="/form/sign-in" component={LoginForm}></Route>
      </Switch>
      </div>
    </div>
     
    );
  }
}
export default LoginDisplay;
