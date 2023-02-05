// Assign the buttons to variable
const buttons = document.getElementsByClassName('button')
const hands = [{
    name: 'rock',
    beats: ['scissors', 'lizard']
},
{
    name: 'paper',
    beats: ['rock', 'spock']
},
{
    name: 'scissors',
    beats: ['paper', 'lizard']
},
{
    name: 'lizard',
    beats: ['paper', 'spock']
},
{
    name: 'spock',
    beats: ['rock', 'scissors']
}
];
// When the user clicks the button, we need to get the value of the button


for (let button of buttons) {
    button.addEventListener('click', function(){
        let playerGuess = hands.find((hand)=> hand.name === button.value);
        let computerGuess = getComputerGuess();
        console.log(playerGuess, computerGuess);
        compare(playerGuess, computerGuess)
    });
};


// Let the computer guess

function getComputerGuess() {
    const randomNumber = hands[Math.floor(Math.random() * 5) + 1]

    if (randomNumber === 1) {
        computerGuess = 'rock'
      }
      if (randomNumber === 2) {
        computerGuess = 'scissors'
      }
      if (randomNumber === 3) {
        computerChoice = 'paper'
      }
      if (randomNumber === 4) {
        computerGuess = 'lizard'
      }
      if (randomNumber === 5) {
        computerChoice = 'spock'
      }

    }
    

// Compare the players and computers choice

function compare(playerGuess, computerGuess) {
    console.log(playerGuess, computerGuess);
    if (computerGuess === playerGuess) {
        alert = 'Tie!'
    } else if (playerGuess === 'rock') {
        if (computerGuess === 'paper') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (playerGuess === 'paper') {
        if (computerGuess === 'scissors') {
          return 'computer';
        } else {
          return 'player';
        }
      } else if (playerGuess === 'scissors') {
        if (computerGuess === 'rock') {
          return 'computer';
        } else {
          return 'player';
        } 
      } else if (playerGuess === 'spock') {
        if (computerGuess === 'rock') {
          return 'computer';
        } else {
          return 'player';
        } 
      } else if (playerGuess === 'lizard') {
        if (computerGuess === 'paper') {
          return 'computer';
        } else {
          return 'player';
        } 
      } 
      }

// If computer wins, add to the computers score

// If player wins, add to the players score
// If it is a tie we do nothing
// Update the score
// If player has a score 10 we have a winner
// Allow the user to reset the game
