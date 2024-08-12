// Get the player's move from the command line arguments
const playerMove = process.argv[2];

// Define the possible moves
const moves = ['rock', 'paper', 'scissors'];

// Function to generate a random move for the computer
function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'win';
    }
    return 'lose';
}

// Validate the player's move
if (!moves.includes(playerMove)) {
    console.log('Invalid move! Please choose rock, paper, or scissors.');
    process.exit(1);
}

// Generate the computer's move
const computerMove = getComputerMove();

// Determine the result
const result = determineWinner(playerMove, computerMove);

// Output the result
console.log(`You chose ${playerMove}. Computer chose ${computerMove}. You ${result}!`);