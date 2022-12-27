/*-------------- META PLANNING --------------*/
/*
Working title: Ace the 5th
Fun rating: infinity
*/


/*------------------- HTML ------------------*/
/*
2x player divs          class="player--div" id="player--X"
    Header div          class="header--div"
        Header          class="header"
    Card rack div       class="card--rack"
        5x card divs    class="card--div" id="pX--cY"
            Card          <-- text for now but probably card images later
Controls div              <-- Do we actually need this? I think we can just use mouse input!
*/


/*---------------- CSS/ASSETS ---------------*/
/*
None for now - we can do this at the end.
*/


/*----------- JS FUNCTION HEADERS -----------*/

/* Helper Functions --------------------------------------------------------------------------------------------------------*/



/* Card Manipulator Functions ----------------------------------------------------------------------------------------------*/

function toggleCard() {
    // Parameters:
    // Actions:
    // Return:
}

/* Logic Functions ---------------------------------------------------------------------------------------------------------*/

function evaluateHand() {

}

/* Setup Functions ---------------------------------------------------------------------------------------------------------*/

function createDeck() {
    // Parameters: none
    // Actions: create a 'deck' array of length 52 filled with one of each card value [0 - 51]
    // Return: the array
}

function createhand(deck) {
    // Parameters: (deck) a 52-length fully populated deck array
    // Actions: create a 'hand' array of length 5, randomly fill it with cards from the deck, remove those cards from the deck
    // Return: the array
}

function chooseGoalNumber() {
    // Parameters: none
    // Actions: randomly choose a suitable number for both players to aim for
    // Return: the number
}

/* Runtime Functions -------------------------------------------------------------------------------------------------------*/

function takeTurn() {

}

function render() {

}