/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to CISE - the home of learning and fun</h1>
    </div>
  );
}

function App = () =>
  return (
    <div className="App">
      <h1>Welcome to CISE - the home of learning and fun</h1>
    </div>
  

export default App;
*/

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
    )
  }
}

export default App;
