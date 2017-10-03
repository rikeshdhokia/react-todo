import React, { Component } from 'react';

import './TrelloPane.css';
import TrelloBoard from './TrelloBoard';

class TrelloPane extends Component {
  render() {
    return (
      <div className="TrelloPane">
        Board will live here
        # loop through boards
        <TrelloBoard />
      </div>
    );
  }
}

export default TrelloPane;
