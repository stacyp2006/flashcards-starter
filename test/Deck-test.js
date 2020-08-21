const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');


describe ('Deck', function() {
  let deck;
  beforeEach((done) => {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    deck = new Deck([card1, card2, card3]);
    done();
  })
  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of cards', function() {

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {

    deck.countCards();
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
})
