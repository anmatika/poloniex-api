const streamApi = require('../index').streamApi;

streamApi.create({ 
  subscriptionName: 'market', 
  currencyPair: 'BTC_ETH', 
  debug: true }, (obj) => {
  console.log(obj)
});