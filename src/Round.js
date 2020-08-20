class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
  }
  takeTurn() {
    this.turns += 1; 
  }
}

module.exports = Round;
