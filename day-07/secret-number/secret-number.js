/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

function startSecretNumberGame() {
    const secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    let attempts = 0;
    let guess = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    while (guess !== secretNumber) {
        const guessPrompt = prompt("Enter your guess: ");
        guess = parseInt(guessPrompt);

        if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
            console.log(`Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            console.log("Too Low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too High! Try again.");
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    if (playAgain === "yes") {
        startSecretNumberGame();
    } else {
        console.log("Thanks for playing! See you next time.");
    }
}

// Start the game
startSecretNumberGame();