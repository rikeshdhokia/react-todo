import React, { Component } from 'react';

import './TrelloCard.css'

class TrelloCard extends Component {
  render() {
    const lastActivity = new Date(this.props.data.dateLastActivity);
    return (
      <div className="TrelloCard">
        <p>{this.props.data.name}</p>
        <p className="TrelloCard-last-activity">last activity: <span>{lastActivity.toDateString()}</span></p>
      </div>
    );
  }
}

export default TrelloCard;
