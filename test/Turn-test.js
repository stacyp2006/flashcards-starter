const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  beforeEach((done) => {
    turn = new Turn();
    done();
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn('object');
    expect(turn.userGuess).to.equal('object');
  });

  it('should store the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should say if guess was right', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess('object');
    expect(turn.evaluateGuess('object')).to.equal(true);
  });

  it('should say if a guess was wrong', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess('array');
    expect(turn.evaluateGuess('array')).to.equal(false);
  })

  it('should give a positive feedback message', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess('object');
    turn.giveFeedback();
    expect(turn.evaluateGuess('object')).to.equal(true);
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should give a negative feedback message', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess('array');
    turn.giveFeedback();
    expect(turn.evaluateGuess('array')).to.equal(false);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
})
