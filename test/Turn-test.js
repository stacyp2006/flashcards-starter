const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  beforeEach((done) => {
    turn = new Turn();
    done();
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', () => {
    const turn = new Turn('object');
    expect(turn.userGuess).to.equal('object');
  });

  it('should store the current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.equal(card);
  });

  it('should return the users guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal(turn.userGuess);
  });

  it('should return the current card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it('should say if guess was right', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess('object');
    expect(turn.evaluateGuess('object')).to.equal(true);
  });

  it('should say if a guess was wrong', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess('array');
    expect(turn.evaluateGuess('array')).to.equal(false);
  })

  it('should give a positive feedback message', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluateGuess('object');
    turn.giveFeedback();
    expect(turn.evaluateGuess('object')).to.equal(true);
    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should give a negative feedback message', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess('array');
    turn.giveFeedback();
    expect(turn.evaluateGuess('array')).to.equal(false);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });
})
