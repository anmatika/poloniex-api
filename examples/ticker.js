const streamApi = require('../index').streamApi;

streamApi.create({ 
  subscriptionName: 'ticker', 
  currencyPair: 'BTC_ETH', 
  debug: true }, (obj) => {
  console.log(obj)
});
