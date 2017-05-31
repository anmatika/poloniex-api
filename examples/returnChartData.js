const TradingApi = require('../index').tradingApi;

const tradingApi = TradingApi.create('', '', true);

tradingApi.returnChartData({
    currencyPair: 'BTC_ETH',
    start: 1405699200,
    end: 9999999999,
    period: 14400

})
.then((msg) => {
    console.log(msg);
})
.catch(err => console.log(err));