const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', function() {
  it('should be a function', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should start round with a deck of cards', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start round with no turns', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should start round with no correct guesses', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.correctGuesses).to.equal(0);
  });

  it('should start round with no incorrect guesses', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should count turns', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it.skip('should record a correct guess', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.correctGuesses).to.equal(1);
  });

  it.skip('should record an incorrect guess', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal([card.id]);
  });

  it.skip('should return the current card being played', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1.detail);
  });

  it.skip('should instantiate a new Turn when a guess is made', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should make the next card the current card', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn();
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card2.detail);
  });

  it.skip('should calculate the percent correct', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.calculatePercentCorrect(5, 10);

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should end the round', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.endRound(50);

    expect(round.endRound).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
})
