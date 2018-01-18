import React, { Component } from 'react';
import logo from '../images/logo-circle.png';
import EntryForm from './entry-form.js';
import Clock from './countdown-timer.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {deadline: 'February, 20, 2018'};
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lottery App</h1>
          <div className='Clock'>
            <Clock deadline={this.state.deadline}/>
          </div>
          </header>
        </div>
        <div>
          <p className="App-intro">
          To get started, enter your info.
          </p>
          <p className="Prize-Description">Prize Description Here </p>
        </div>
        <EntryForm />
      </div>
    );
  }
}

export default App;
