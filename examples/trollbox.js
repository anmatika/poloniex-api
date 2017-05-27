const streamApi = require('../index').streamApi;

streamApi.create({ subscriptionName: 'trollbox' }, (msg) => {
  console.log(msg)
});