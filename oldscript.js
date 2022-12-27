
const deck = [];
const p1Hand = [];
const p2Hand = [];
const setUpDeck = function(){
    for (let i=0; i<=51; i++){
        deck.push(i);
    };
}

const setUpHand = function(hand){
    // Randomize 5 cards from 52 and put into slots for each player
    // Input: none
    // Action: change card-div to random cards
    // Return: None
    for (i=1; i<=5; i++) {
        let pick = Math.trunc(Math.random() * 52);
        console.log(pick);
        while (pick > deck.length) {
            pick = Math.trunc(Math.random() * 52);
        }
        hand.push(pick);
        deck.pop(pick);
    }

    
}
setUpDeck();
console.log(deck);
setUpHand(p1Hand);
setUpHand(p2Hand);
console.log(deck);
console.log(p1Hand);
console.log(p2Hand);