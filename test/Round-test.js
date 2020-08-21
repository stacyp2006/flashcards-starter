const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe ('Round', function() {
  let round;
  beforeEach((done) => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    done();
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start round with a deck of cards', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start round with no turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should start round with no correct guesses', () => {
    expect(round.correctGuesses).to.equal(0);
  });

  it('should start round with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should count turns', () => {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
  });

  it.skip('should record a correct guess', () => {
    round.takeTurn(guess);
    expect(round.correctGuesses).to.equal(1);
  });

  it.skip('should record an incorrect guess', () => {
    round.takeTurn(guess);
    expect(round.incorrectGuesses).to.deep.equal([card.id]);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it.skip('should make the next card the current card', () => {
    round.takeTurn(guess);
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it.skip('should calculate the percent correct', () => {
    round.calculatePercentCorrect(5, 10);
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should end the round', () => {
    round.endRound(50);
    expect(round.endRound).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
})
