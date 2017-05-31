const isBrowser = typeof window !== 'undefined'
    && ({}).toString.call(window) === '[object Window]';

let request;
if(isBrowser) {
  request = require('superagent');
} else {
  request = require('request');
}

const ApiHelper = require('./apiHelper');

const create = (apiKey, secret, debug = false) => {

  const PRIVATE_API_URL = 'https://poloniex.com/tradingApi';
  const apiHelper = ApiHelper.create(apiKey, secret);

  function makeRequest(command, opts) {
    const promise = new Promise((resolve, reject) => {
      request.post(apiHelper.createOptions({
        url: PRIVATE_API_URL,
        queryString: apiHelper.createQueryString(command, opts),
        method: opts.method || 'post' }), (err, res, body) => {
        if (err) {
          reject(err);
          return;
        }
        debug && console.log('makeRequest resolve', res)
        resolve(res);
      })
    });
    return promise;
  }

  return {
    returnBalances: () => makeRequest('returnBalances', {}),
    returnCompleteBalances: () => makeRequest('returnCompleteBalances', {}),
    buy: ({ currencyPair, amount, rate }) => makeRequest('buy', { currencyPair, amount, rate }),
    sell: ({ currencyPair, amount, rate }) => makeRequest('sell', { currencyPair, amount, rate }),
    returnTradeHistory: ({ currencyPair, start, end }) => makeRequest('returnTradeHistory', { currencyPair, start, end }),
    cancelOrder: ({ orderNumber }) => makeRequest('cancelOrder', { orderNumber }),
    returnOpenOrders: ({ currencyPair }) => makeRequest('returnOpenOrders', { currencyPair })
  }
}

module.exports.create = create;