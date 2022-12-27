/* Helper Functions --------------------------------------------------------------------------------------------------------*/

// For miscellaneous functions that are literally just there to help make another function easier to write


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

function createDeck() {
    // Parameters: none
    // Actions: create a 'deck' array of length 52 filled with one of each card value [0 - 51]
    // Return: the 'deck' array
}

function createhand(deck) {
    // Parameters: (deck) a 52-length fully populated 'deck' array
    // Actions: create a 'hand' array of length 5, randomly fill it with cards from the deck, remove those cards from the deck
    // Return: the 'hand' array
}

function chooseGoalNumber() {
    // Parameters: none
    // Actions: randomly choose a suitable 'score' number for both players to aim for
    // Return: the 'score' number
}


/* Runtime Functions -------------------------------------------------------------------------------------------------------*/

function takeTurn() {
    // Parameters: none
    // Actions: idk lol
    // Return: none
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

/* UI Functions ------------------------------------------------------------------------------------------------------------*/

// How do click event handlers work in JS??