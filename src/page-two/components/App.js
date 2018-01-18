import React, { Component } from 'react';
import logo from '../images/logo-circle.png';
import EntryForm from './entry-form.js';
import Clock from './countdown-timer.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {deadline: 'January, 19, 2018'};
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='title/odds'>
            <h1 className="App-title">Welcome to Lottery App</h1>
            <h3>Your odds of winning are: 1:1</h3>
          </div>
          <div className='Clock'>
            <Clock deadline={this.state.deadline}/>
          </div>
          </header>
        </div>
        <div>
          <h2 className="Prize-Description">Prize Description Here...</h2>
          <p className="App-intro">
          To get started, enter your info.
          </p>
        </div>
        <EntryForm />
      </div>
    );
  }
}

export default App;
