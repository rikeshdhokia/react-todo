import mockCards from './cards.json';

const getBoardCards = function(boardId) {
  console.log('TrelloApiService.getBoardCards: will fetch cards from ' + boardId);
  return mockCards;
};

const TrelloApiService = {getBoardCards};

export default TrelloApiService;
