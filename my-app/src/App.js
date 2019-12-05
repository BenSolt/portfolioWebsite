import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/navbar.css';
import './css/navbarMedia.css';
import './css/home.css';
import './css/artworkk.css';
import './css/artworkkMedia.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Artwork from './components/home/Artwork';
import Codework from './components/home/Codework';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/artwork" component={Artwork}/>
        <Route exact path="/codework" component={Codework}/>
        
      </div>
    </div>
  );
}

export default App;
