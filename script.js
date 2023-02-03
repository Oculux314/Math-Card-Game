
/* SETUP FUNCTIONS ---------------------------------------------------------------------------------------------------------*/

// Declaring global variables
let 
activePlayer, 
handSize, 
deck, 
discards, 
p1Hand,
p2Hand, 
p1CardImg,
p2CardImg,
goalNum,
p1Score,
p2Score;

function init() {
  // Inputs:  none
  // Action:  calls all the other setup functions when restarting a game
  // Return:  none

  activePlayer = 0;
  // let phase = 0;

  handSize = 7;

  // Initialise card arrays
  deck = shuffle(setUpDeck());
  discards = setUpDiscards();
  p1Hand = setUpHand(deck, handSize);
  p2Hand = setUpHand(deck, handSize);

  // Creating DOM hand containers
  createHandSlots(1, handSize);
  createHandSlots(2, handSize);

  // Rendering hand cards
  p1CardImg = cardDOMCollator(1, handSize);
  p2CardImg = cardDOMCollator(2, handSize);
  renderHand(p1CardImg, p1Hand);
  renderHand(p2CardImg, p2Hand);

  // Choosing goal score
  goalNum = chooseGoalNumber();

  // Evaluating and rendering hand scores
  p1Score = evaluateHand(p1Hand);
  p2Score = evaluateHand(p2Hand);
      // NEEDED: 2x render hand scores
      
  setUpEventListeners();
}


function setUpDeck() {
  // Inputs:  none
  // Action:  create a 'deck' array of length 52 filled with one of each card value [0 - 51]
  // Return:  the deck array

  const deck = [];

  // Populate empty deck in order [0 - 51]
  for (let i = 0; i < 52; i++) {
    deck.push(i);
  }

  return deck;
}


function setUpDiscards() {
  // Inputs:  none
  // Action:  create an empty 'discards' array
  // Return:  the discards array

  // Empty
  const discardDeck = [];
  return discardDeck;
}


function setUpHand(deck, len) {
  // Inputs:  (deck) a 52-length fully populated 'deck' array
  //          (len) the number of cards in each hand
  // Action:  create a 'hand' array of variable length, randomly fill it with cards from the deck, remove those cards from the deck
  // Return:  the hand array

  const hand = [];

  for (i = 1; i <= len; i++) {
    const index = deck.length - 1;                       // pick top card from deck
    hand.push(deck[index]);                              // add to hand
    deck.splice(index, 1);                               // remove from deck
  }

  return hand;
}


function createHandSlots(player, len) {
  // Inputs:  (player) the player [1 - 2] to create slots for
  //          (len) the number of slots to make
  // Action:  creates a variable number of DOM div nested images 'hand card slots' for specified player
  // Return:  none

  // Getting the cardRack DOM element
  const playerDiv = document.getElementById(`player--${player}`);
  const cardRack = playerDiv.children[1];

  // Making slots
  for (let i = 0; i < len; i++) {
    slotMaker(cardRack, player, i + 1);
  }
}


function slotMaker(parent, player, card) {
  // Inputs:  (parent) the card rack DOM element to add the slot to
  //          (player) the player[1 - 2] the slot is for
  //          (card) which hand slot the card is for [1,2,3...]
  // Action:  creates a single div nested image 'hand card slot' in specified parent card rack
  // Return:  none

  // Div
  const imgDiv = document.createElement("div");
  parent.appendChild(imgDiv);

  // Img
  const img = document.createElement("img");
  imgDiv.appendChild(img);

  // Class + ID
  imgDiv.setAttribute("id", `p${player}--c${card}`);
  imgDiv.setAttribute("class", `card--div`);
}


function cardDOMCollator(player, len) {
  // Inputs:  (player) player [1 - 2] to collate card DOM elements from
  //          (len) the number of cards in the player's hand
  // Action:  collates all the card img DOM elements for a specific player hand into an array
  // Return:  the img element array

  const cardArr = [];

  for (let i = 1; i <= len; i++) {
    const cardDiv = document.getElementById(`p${player}--c${i}`); // Get div
    const card = cardDiv.children[0];                             // Get img
    cardArr.push(card);                                           // Add img to array
  }

  return cardArr;
}


function chooseGoalNumber() {
  // Inputs:  none
  // Action:  randomly choose a suitable goal score number for both players to aim for
  // Return:  the goal number

  const goalNum = Math.trunc(Math.random() * 1000); // [0 - 999]
  return goalNum;
}



/* RUNTIME FUNCTIONS -------------------------------------------------------------------------------------------------------*/


/* CARD MANIPULATOR FUNCTIONS ----------------------------------------------------------------------------------------------*/


/*
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
*/

function swapPlayerCards(arr1, arr2, pos1, pos2) {
  // Parameters: (player1,position1) position of card 1, (player2,position2) position of card 2
  // Actions: swap the card values at these two positions
  // Return: none
  const temp = arr1[pos1];
  arr1[pos1] = arr2[pos2];
  arr2[pos2] = temp;
  
}


function shuffle(deck) {
  // Inputs:  (deck) the array to be shuffled
  // Action:  randomises the order of elements in an array (e.g. deck)
  // Return:  the shuffled deck

  const shuffledDeck = [];

  for (let i = 0; i < deck.length; i++){
    const index = Math.trunc(Math.random() * deck.length); // Choose random card
    shuffledDeck.push(deck.splice(index, 1)[0]);           // Add to new, remove from old
  }

  return shuffledDeck;
}



/* LOGIC FUNCTIONS ---------------------------------------------------------------------------------------------------------*/


function evaluateHand(hand) {
  // Inputs:  (hand) a hand array
  // Action:  evaluate the score of the hand
  // Return:  the hand score

  let evaStr = "";

  // hand array --> string
  for (const card of hand.entries()) {
    evaStr += findCardValue(card[1]);
  }

  return safeRun(evaStr); // Evaluate
}


function findCardValue(cardNumber) {
  // Inputs:  (cardNumber) a numerical raw card value
  // Action:  translates card value to appropriate string value for calculation
  // Return:  the hand score

  // Get raw card number, independent of suit [1 - 13]
  cardNumber %= 13;
  cardNumber += 1;

  // Picture card library
  const operators = {
    11: "+", // J
    12: "-", // Q
    13: "*", // K
  };

  // Picture card handler
  if (cardNumber > 10) {
    cardNumber = operators[cardNumber];
  }

  return cardNumber;
}


function safeRun(string) {
  // Inputs:  (string) string containing mathematical expression to evaluate
  // Action:  safely evaluates a mathmatical expression, with error handling
  // Return:  the value of the expression, or NaN if expression invalid

  try {
    return math.evaluate(string);
  } catch {
    return NaN;
  }
}



/* UI FUNCTIONS ------------------------------------------------------------------------------------------------------------*/
function onDeckClick() {
  // Parameters: none
  // Actions: handler for when deck clicked
  // Return: none
  renderCard(document.getElementById('deck--img'), deck[deck.length-1]);
  console.log('yes');
}
function onCardClick(deck) {
  // Parameters: none
  // Actions: handler for when card clicked
  // Return: id of card clicked

  
}

function setUpEventListeners() {
  // Inputs:  none
  // Action:  central function to add event listeners
  // Return:  none

  document.getElementById('deck--img').addEventListener('click', onDeckClick);
      // INCOMPLETE
}



/* RENDER FUNCTIONS --------------------------------------------------------------------------------------------------------*/


/*
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
*/


function renderHand(imgCardArr, hand) {
  // Inputs:  (imgCardArr) array containing each img DOM element for a player's hand
  //          (hand) array containing a player's hand card values
  // Action:  Renders an entire hand
  // Return:  none

  for (let i = 0; i < imgCardArr.length; i++) {
    renderCard(imgCardArr[i], hand[i]);
  }
}


function renderCard(imgTag, cardValue) {
  // Inputs:  (imgTag) the img DOM element to be updated
  //          (cardValue) the card value to update to
  // Action:  Renders a single card
  // Return:  none

  // Name library for suits and numbers
  const group = ["spades", "clubs", "diamonds", "hearts"];
  const cardNames = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  // Get suit
  const suitNum = Math.trunc(cardValue / 13);

  // Get num
  const cardNum = cardValue % 13;
  const cardNumPadded = String(cardNum).padStart(3, "0");

  // Rendering
  imgTag.src = `assets/${group[suitNum]}/tile${cardNumPadded}.png`; // Change image
  imgTag.alt = `${cardNames[cardNum]} of ${group[suitNum]}.`;       // Change alt text   #accessibility
}



/* GLOBAL VARIABLES --------------------------------------------------------------------------------------------------------*/

init();