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

  it.skip('should store an array of cards', function() {
    const deck = new Deck();
    expect(deck.cards).to.equal([]);
  });

  it.skip('should know how many cards are in the deck', function() {
    const deck = new Deck();
    deck.countCards();
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
})
