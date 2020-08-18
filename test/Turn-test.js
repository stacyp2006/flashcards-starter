const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a user guess', function() {
    const turn = new Turn('object');
    expect(turn.userGuess).to.equal('object');
  });

  it.skip('should store the current card', function() {
    const turn = new Turn('object', card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(turn.card).to.equal(card);
  });

  it.skip('should return the users guess', function() {
    const turn = new Turn('object', card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it.skip('should return the current card', function() {
    const turn = new Turn('object', card);
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    turn.returnCard();

    expect(turn.returnCard()).to.equal(turn.card);
  });

  


}
