# Poloniex API


## 1. Trading API

### methods currently supported
* buy
* sell
* returnBalances
* returnCompleteBalances
* returnTradeHistory
* cancelOrder
* returnOpenOrders
* returnTicker

### init
````

const TradingApi = require('poloniex-api').tradingApi;
const tradingApi = TradingApi.create(YOUR_POLONIEX_API_KEY, YOUR_POLONIEX_SECRET_KEY);

````
#### init with console logging
````
const tradingApi = TradingApi.create(YOUR_POLONIEX_API_KEY, YOUR_POLONIEX_SECRET_KEY, true);
````

### returnBalances
````
a.returnBalances().then((r)=> { console.log(r) }, (err) => { console.log('err', err)});
api.returnBalances.then(res => console.log(res));
````

### returnTradeHistory
````
tradingApi.returnTradeHistory({
  'BTC_ETH',
  start: new Date('1970-01-01 00:00:00').getTime() / 1000
}).then(msg => resolve(JSON.parse(msg.body)))
  .catch(err => reject(err))

````
## 2. StreamAPI
### init

````
const streamApi = require('poloniex-api').streamApi;
````

### Subscribe to ticker events
````

  streamApi.create({ subscriptionName: 'ticker', currencyPair: 'BTC_ETH' }, (obj) => {
    console.log(obj)
  });

````

### Subscribe to market events
````
  streamApi.create({ subscriptionName: 'market', currencyPair: 'BTC_ETH' }, (obj) => {
    console.log(obj)
  });

````

### Subscribe to trollbox events
````
  streamApi.create({ subscriptionName: 'trollbox' }, (obj) => {
    console.log(obj)
  });
````