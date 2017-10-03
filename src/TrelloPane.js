import React, { Component } from 'react';

import './TrelloPane.css';
import TrelloBoard from './TrelloBoard';

class TrelloPane extends Component {
  render() {
    return (
      <div className="TrelloPane">
        Boards will live here
        <TrelloBoard />
        <TrelloBoard />
      </div>
    );
  }
}

export default TrelloPane;
