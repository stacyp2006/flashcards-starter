const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');

describe ('Deck', function() {
  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });
})
