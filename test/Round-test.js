const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', function() {
  let round;
  beforeEach((done) => {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    done();
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start round with a deck of cards', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start round with no turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should start round with no correct guesses', function() {
    expect(round.correctGuesses).to.equal(0);
  });

  it('should start round with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it.skip('should count turns', function() {
    round.takeTurn(guess);
    expect(round.turns).to.equal(1);
  });

  it('should instantiate a new Turn when a guess is made', function() {
    round.takeTurn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should record a correct guess', function() {
    round.takeTurn(guess);
    expect(round.correctGuesses).to.equal(1);
  });

  it.skip('should record an incorrect guess', function() {
    round.takeTurn(guess);
    expect(round.incorrectGuesses).to.deep.equal([card.id]);
  });

  it.skip('should return the current card being played', function() {
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1.detail);
  });

  it.skip('should make the next card the current card', function() {
    round.takeTurn(guess);
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card2.detail);
  });

  it.skip('should calculate the percent correct', function() {
    round.calculatePercentCorrect(5, 10);
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should end the round', function() {
    round.endRound(50);
    expect(round.endRound).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
})
