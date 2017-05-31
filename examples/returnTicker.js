const TradingApi = require('../index').tradingApi;

const tradingApi = TradingApi.create('', '', true);

tradingApi.returnTicker()
.then((msg) => {
    console.log(msg);
})
.catch(err => console.log(err));
