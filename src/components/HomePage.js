import React from "react";
import LoginDisplay from "./LoginDisplay";
import SubHeader from './SubHeader'
import View from './View'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function HomePage(props) {
  return (
    <>
    <SubHeader/>
    <View/>
    </>
  );
}
export default HomePage;
