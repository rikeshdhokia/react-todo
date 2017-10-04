// var jsonfile = require('jsonfile')
// var file = '/tmp/data.json'
// jsonfile.readFile(file, function(err, obj) {
//   console.dir(obj)
// })

const getBoardCards = function(boardId) {
  console.log('TrelloApiService.getBoardCards: will fetch cards from ' + boardId);
  return [{id: "abc"}, {id: "zxc"}];
};

const TrelloApiService = {getBoardCards};

export default TrelloApiService;
