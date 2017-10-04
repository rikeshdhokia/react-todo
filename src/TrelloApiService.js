import mockCards from './cards.json';
import _ from 'lodash';

const getBoardCards = function(boardId) {
  const sorted = _.chain(mockCards).sortBy('dateLastActivity').reverse().value();
  return sorted;
};

const TrelloApiService = {getBoardCards};

export default TrelloApiService;
