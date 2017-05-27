const TradingApi = require('./index').tradingApi;

const APIKEY = '<Yours here>';
const SECRET = '<Yours here>';
const tradingApi = TradingApi.create(APIKEY, SECRET);

tradingApi.returnTradeHistory({
  currencyPair,
  start: new Date('1970-01-01 00:00:00').getTime() / 1000
  // end: new Date('2017-05-05 05:43:30').getTime() / 1000
}).then(msg => resolve(JSON.parse(msg.body)))
  .catch(err => reject(err))