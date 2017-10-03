import React, { Component } from 'react';

import './App.css';
import Trello from './Trello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">MyToDo</h1>
        </header>
        <div className="Trello-container">
          <Trello />
        </div>
      </div>
    );
  }
}

export default App;
