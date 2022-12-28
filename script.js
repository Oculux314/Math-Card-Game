
/* Card Manipulator Functions ----------------------------------------------------------------------------------------------*/

function addCardToDeck(card) {
    // Parameters: (card) card value to add to deck [0 - 51]
    // Actions: add the specifed card to the end of the deck
    // Return: the number of cards now in the deck
}

function removeCardFromDeck(card) {
    // Parameters: (card) card value to remove from deck [0 - 51]
    // Actions: find the index of the specified card in the deck, remove it
    // Return: the number of cards left in the deck, or -1 if the specified card was not in the deck
}

function setPlayerCard(player, position, card) {
    // Parameters: (player) the player to set the card for [0 - 1], (position) index of hand [0 - 4], (card) card value [0 - 51]
    // Actions: set the specified array element to the specified card value
    // Return: the original card value at that position
}

function swapPlayerCards(player1, position1, player2, position2) {
    // Parameters: (player1,position1) position of card 1, (player2,position2) position of card 2
    // Actions: swap the card values at these two positions
    // Return: none
}

/* Logic Functions ---------------------------------------------------------------------------------------------------------*/

function evaluateHand(hand) {
    // Parameters: (hand) a 5-length 'hand' array
    // Actions: calculate the value of the hand
    // Return: the hand value
}

/* Setup Functions ---------------------------------------------------------------------------------------------------------*/

function restart() {
    // Parameters: none
    // Actions: calls all the other setup functions when restarting a game
    // Return: none

    const deck = setUpDeck();
    const p1Hand = setUpHand(deck);
    const p2Hand = setUpHand(deck);
    const goalNum = chooseGoalNumber();

    takeTurn();
}

function setUpDeck() {
    // Parameters: none
    // Actions: create a 'deck' array of length 52 filled with one of each card value [0 - 51]
    // Return: the 'deck' array

    const deck = [];

    for (let i = 0; i < 52; i++) { // [0 - 51]
        deck.push(i);
    }

    return deck;
}

function setUpHand(deck) {
    // Parameters: (deck) a 52-length fully populated 'deck' array
    // Actions: create a 'hand' array of length 5, randomly fill it with cards from the deck, remove those cards from the deck
    // Return: the 'hand' array

    const hand = [];

    for (i = 1; i <= 5; i++) {
        let index = Math.trunc(Math.random() * deck.length); // choose random card from deck
        hand.push(deck[index]); // add to hand
        deck.splice(index, 1); // remove from deck
    }

    return hand;
}

function chooseGoalNumber() {
    // Parameters: none
    // Actions: randomly choose a suitable 'score' number for both players to aim for
    // Return: the 'score' number

    const goalNum = Math.trunc(Math.random() * 1000); // [0 - 999]
    return goalNum;
}

/* Runtime Functions -------------------------------------------------------------------------------------------------------*/

function takeTurn() {
    // Parameters: none
    // Actions: idk lol
    // Return: none

    console.log("Success!");
}

/* Render Functions --------------------------------------------------------------------------------------------------------*/

function render() {
    // Parameters: tbc
    // Actions: update all the html and css elements
    // Return: none
}

function renderCard(id, cardValue) {
    // Parameters: (id) id of card element, (cardValue) card value [0 - 51] of card in that position
    // Actions: update a single card html element
    // Return: none
}

function renderHandScore(id, score) {
    // Parameters: (id) id of score element, (score) score of current hand
    // Actions: update a single score html element
    // Return: none
}

function renderGoalScore(score) {
    // Parameters: (score) score both players are aiming for to win the game
    // Actions: update the goal score html element
    // Return: none
}

function highlightElement(id) {
    // Parameters: (id) id of element to highlight
    // Actions: 'highlight' (enlarge slightly) the specified element
    // Return: none
}

function unhighlightElement(id) {
    // Parameters: (id) id of element to stop highlighting
    // Actions: 'dehighlight' (return to original size) the specified element
    // Return: none
}

function changeDeck(card) {
    // Parameters: (card) card value to reveal from deck [0 - 51, or -1 for deck]
    // Actions: switch deck card graphic to specified value
    // Return: none
}

/* UI Functions ------------------------------------------------------------------------------------------------------------*/

// How do click event handlers work in JS??

function onDeckClick() {
    // Parameters: none
    // Actions: handler for when deck clicked
    // Return: none
}

function onCardClick() {
    // Parameters: none
    // Actions: handler for when card clicked
    // Return: id of card clicked
}


/* Global Calls ------------------------------------------------------------------------------------------------------------*/

restart();