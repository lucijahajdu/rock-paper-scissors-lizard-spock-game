// Assign the buttons to variable
const buttons = document.getElementsByClassName('button');
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
]
// When the user clicks the button, we need to get the value of the button
// Let the computer guess
// Compare the players and computers choice
// If computer wins, add to the computers score
// If player wins, add to the players score
// If it is a tie we do nothing
// Update the score
// If player has a score 10 we have a winner
// Allow the user to reset the game
