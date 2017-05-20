const autobahn = require('autobahn');
const wsuri = 'wss://api.poloniex.com';

const create = ({ subscriptionName, currency }, callback) => {
  const connection = new autobahn.Connection({
    url: wsuri,
    realm: 'realm1'
  });

  connection.onopen = (session) => {
    function marketEvent(args, kwargs) {
      console.log(args);
    }
    function tickerEvent(args, kwargs) {
      const [
          currencyPair,
          lastPrice,
          lowestAsk,
          highestBid,
          percentChange,
          baseVolume,
          quoteVolume,
          isFrozen,
          high24,
          low24
      ] = args;

      if (currencyPair !== currency) {
        return;
      }

      callback({
        currencyPair,
        lastPrice,
        lowestAsk,
        highestBid,
        percentChange,
        baseVolume,
        quoteVolume,
        isFrozen,
        high24,
        low24
      });
    }
    function trollboxEvent(args, kwargs) {
      console.log(args);
    }

    switch (subscriptionName) {
    case 'ticker':
      session.subscribe('ticker', tickerEvent);
      break;
    case 'market':
      session.subscribe('BTC_XMR', marketEvent);
      break;
    case 'trollbox':
      session.subscribe('trollbox', trollboxEvent);
      break;
    }
  }

  connection.onclose = () => {
    console.log('Websocket connection closed');
  }

  connection.open();

  return {
    close: () => connection.close('user', 'connection closed.'),
    session: connection.session
  }
}

module.exports.create = create;