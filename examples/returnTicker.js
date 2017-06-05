const PublicApi = require('../index').publicApi;

const publicApi = PublicApi.create('', '', true);

publicApi.returnTicker()
.then((msg) => {
  console.log(msg);
})
.catch(err => console.log(err));
