const deck = [];
const p1Hand = [];
const p2Hand = [];
const setUpDeck = function () {
  for (let i = 0; i <= 51; i++) {
    deck.push(i);
  }
};

const setUpHand = function (hand) {
  // Randomize 5 cards from 52 and put into slots for each player
  // Input: none
  // Action: change card-div to random cards
  // Return: None
  for (i = 1; i <= 5; i++) {
    let index = Math.trunc(Math.random() * deck.length);
    console.log(index);
    hand.push(deck[index]);
    deck.pop(index);
  }
};
setUpDeck();
console.log(deck);
setUpHand(p1Hand);
setUpHand(p2Hand);

console.log(p1Hand);
console.log(p2Hand);
