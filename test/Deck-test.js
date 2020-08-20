const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');


describe ('Deck', function() {
  it('should be a function', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of cards', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);

    deck.countCards();
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
})
