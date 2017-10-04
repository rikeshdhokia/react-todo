import React, { Component } from 'react';

import './TrelloPane.css';
import TrelloBoard from './TrelloBoard';

class TrelloPane extends Component {

  render() {
    const boardId = 'ZCTrZtOW';
    
    return (
      <div className="TrelloPane">
        Boards will live here
        <TrelloBoard boardId={boardId} />
      </div>
    );
  }
}

export default TrelloPane;
