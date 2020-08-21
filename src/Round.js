const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let turn = new Turn();
    return turn.returnCard();
    //for (let i = 0; i < this.deck.length; i++) {
      // if (turn.card === this.deck[i]) {
      //   return this.deck[i];
      // }
    //}
  }

  takeTurn(guess) {
    this.turns += 1;
  //   let turn = new Turn();
  //   // // if (turn.evaluateGuess() === true) {
  //   // //   this.correctGuesses += 1;
  //   // }
  }
}

module.exports = Round;
