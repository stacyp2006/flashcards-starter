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

    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should start round with a deck of cards', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should start round with no turns', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turn).to.equal(0);
  });

  it.skip('should start round with no correct guesses', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.correctGuesses).to.equal(0);
  });

  it.skip('should start round with no incorrect guesses', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should count turns', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it.skip('should record a correct guess', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.correctGuesses).to.equal(1);
  });

  it.skip('should record an incorrect guess', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal([card.id]);
  });

  it.skip('should return the current card being played', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1.detail);
  });

  it.skip('should instantiate a new Turn when a guess is made', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should make the next card the current card', function() {
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card2.detail);
  });

  
})
