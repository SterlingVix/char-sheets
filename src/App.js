import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

import CardExample from './CardExample';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <RaisedButton label="Default">RaisedButton Content</RaisedButton>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <CardExample />

      </div>
    );
  }
}

export default App;
