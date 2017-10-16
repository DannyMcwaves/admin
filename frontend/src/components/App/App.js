import React, { Component } from 'react';
import {WindowGridFluid} from "../lib/containers";
import Homepage from '../homepage/Homepage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <WindowGridFluid className="App">
        <Homepage/>
      </WindowGridFluid>
    );
  }

}

export default App;
