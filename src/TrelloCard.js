import React, { Component } from 'react';

class TrelloCard extends Component {
  render() {
    return (
      <div className="TrelloCard">
        <p>Card with id: {this.props.data.id}</p>
      </div>
    );
  }
}

export default TrelloCard;
