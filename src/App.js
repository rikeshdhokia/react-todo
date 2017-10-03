import React, { Component } from 'react';

import './App.css';
import TrelloPane from './TrelloPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">MyToDo</h1>
        </header>
        <div className="Trello-container">
          <TrelloPane />
        </div>
      </div>
    );
  }
}

export default App;
