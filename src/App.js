import React, { Component } from 'react';
// import logo from './logo.svg';
import EntryForm from './entry-form.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Lottery App</h1>
        </header>
        <p className="App-intro">
          To get started, enter your info.
        </p>
        <EntryForm />
      </div>
    );
  }
}

export default App;
