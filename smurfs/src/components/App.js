import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs/SmurfList';
import SmurfForm from './smurfs/SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
