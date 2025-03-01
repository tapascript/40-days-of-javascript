/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
    console.log("Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game");
    const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You the User WIN, yay!!!!");
    } else if ( userChoice === computerChoice) {
        console.log("The Game is a Tie");
    } else if(
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("Oh Ho... Computer Wins!!!!");
    } else {
        console.log("Please check the input, We didn't understand it.")
    }

    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for Playing! See you Next Time")
    }
}

// Start This Game
rockPaperScissorsGame();