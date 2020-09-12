import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// import VideoClip from './components/VideoClip'

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
      {/* <VideoClip/> */}
    </div>
  );
}

export default App;
