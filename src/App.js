import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './styles/Help.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginDisplay from "./components/LoginDisplay";
import Help from './components/Help'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import VideoClip from './components/VideoClip'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage}></Route>
           <Route path='/form' component={LoginDisplay}></Route>
           <Route path='/help' component={Help}></Route>

        </Switch>
      </Router>
      <Footer />
      {/* <VideoClip/> */}
    </div>
  );
}

export default App;
