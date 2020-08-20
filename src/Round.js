class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = []; 
  }
}

module.exports = Round;
