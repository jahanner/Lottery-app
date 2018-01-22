import React, { Component } from 'react';
import logo from '../images/logo-circle.png';
import Clock from './countdown-timer.js';
import '../styles/App.css';
import Header from './Header.js';

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {deadline: 'January, 27, 2018'}; {/*have to put in a componentwillmount method*/}
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='title/odds'>
            <h1 className="App-title">Lottery Status</h1>
            <p>Odds of winning 1:1</p>
          </div>
          <div className='Clock'>
            <Clock deadline={this.state.deadline}/>
          </div>
          </header>
        </div>
        <div>
          <Header />
          <h2 className="Prize-Description">The winner is...</h2>
        </div>
      </div>
    );
  }
}

export default StatusPage;
