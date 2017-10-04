import React, { Component } from 'react';
import TrelloApiService from './TrelloApiService';
import TrelloCard from './TrelloCard';
import './TrelloBoard.css';

class TrelloBoard extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const cards = TrelloApiService.getBoardCards(this.props.boardId);
    this.setState({cards: cards});
  }

  render() {

    const trelloCards = this.state.cards.map((card) =>
      <TrelloCard key={card.id} data={card} />
    );

    return (
      <div className="TrelloBoard">
        <p>Looking at Board: {this.props.boardId}</p>
        { trelloCards }
      </div>
    );
  }
}

export default TrelloBoard;
