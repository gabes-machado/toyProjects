// defines a random number between 1 and 10 
let difficultyMeter = prompt('Select your difficulty, a number from 1 to infinity');
let secretNumber = parseInt(Math.random() * difficultyMeter) + 1;
let guess;
let guesses = 1;

while (guess != secretNumber) {
    guess = prompt(`Guess a number between 1 and ${difficultyMeter}`);
    if (guess == secretNumber) {
        alert(`Congratulations! You guessed the number. With only ${guesses} guesses`);
    } else {
        if (guess > secretNumber) {
            alert('Too high! Try again.');
        } else {
            alert('Too low! Try again.');
        }
        guesses++
    }
}