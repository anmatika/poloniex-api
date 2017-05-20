/* globals describe it */
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const sinon = require('sinon');
const assert = chai.assert;
const request = require('request');
const target = require('../tradingApi.js').create('', '');
chai.should();

describe('makeRequestPublic', () => {
  const stubYield = { body: JSON.stringify({ foo: 'bar' }) };
  sinon.stub(request, 'get').yields(null, null, stubYield);

  // const requestStub = sinon.stub(request, 'get').resolves(JSON.stringify({ foo: 'bar' }))

  it('should return balances', () => {
    // const spy = sinon.spy(request, 'post');
    sinon.stub(request, 'post').yields(null, stubYield, JSON.stringify({ foo: 'bar' }))
    const expected = { body: JSON.stringify({ foo: 'bar' }) };
    target.returnBalances().should.eventually.deep.equal(expected);
  });
});
