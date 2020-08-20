const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', function() {
  it.skip('should be a function', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(deck).to.be.an.instanceof(Round);
  });

  
})
