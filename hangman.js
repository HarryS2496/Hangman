let chosenEntry = words[Math.floor(Math.random() * words.length)];
let chosenWord = chosenEntry.word.toUpperCase();
let chosenHint = chosenEntry.hint;
let guessedLetters = [];
let remainingAttempts = 6;

// Get references to HTML elements
const wordDisplay = document.getElementById("word-display");
const hintDisplay = document.getElementById("hint-display");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");
const hangmanImage = document.getElementById("hangman-image");

// Display word with guessed letters
function updateWordDisplay() {
  wordDisplay.innerHTML = chosenWord
    .split("") // Convert to array
    .map((letter) =>
      guessedLetters.includes(letter) ? letter.toUpperCase() : "_"
    ) // Show guessed letters, hide others
    .join(" "); // Convert back to string
}

// Check if game is won/lost
function checkGameStatus() {
  // If no underscores remain in the displayed word, then you win
  // If attempts hit 0, you lose
  message.innerText = !wordDisplay.innerHTML.includes("_")
    ? `CONGRATULATIONS! You got the word right!`
    : remainingAttempts === 0
    ? `GAME OVER! The word was ${chosenWord}...`
    : message.innerText;
  // In either condition the ternary operator sets, the keyboard is disabled
  if (!wordDisplay.innerHTML.includes("_") || remainingAttempts === 0) {
    disableKeyboard();
  }
}

// Generate and display keyboard
function createKeyboard() {
  keyboard.innerHTML = ""; // Clear previous keyboard beforehand
  for (let i = 65; i <= 90; i++) {
    // Loop through A-Z (ASCII values)
    let letter = String.fromCharCode(i).toUpperCase(); // Convert ASCII value to letter
    let button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", () => handleGuess(letter, button)); // Pass `letter` correctly here
    keyboard.appendChild(button); // Append button to keyboard
    /*
    <div id="keyboard"></div> after appendChild(button) is called becomes the following:
    <div id="keyboard">
      <button>a</button>
      <button>b</button>
      <button>c</button>
      ...etc.
    </div>
    */
  }
}

// Disable keyboard after game ends
function disableKeyboard() {
  document.querySelectorAll("#keyboard-button").forEach((button) => {
    button.disabled = true;
  });
}

// Updates image representing the hangman
function updateHangmanImage() {
  hangmanImage.src = `images/hangman-${6 - remainingAttempts}.svg`; // Update image according to remaining attempts
}

// Handle guessed letters
function handleGuess(letter, button) {
  button.disabled = true; // Disable the button after it's clicked
  /* Debugging output
  console.log(`Letter Guessed: ${letter}`); 
  console.log(`Chosen Word: ${chosenWord}`);
  console.log(`Letter in word: ${chosenWord.includes(letter)}`);
  */
  if (chosenWord.includes(letter)) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter); // Add the letter if it's correct and hasn't been guessed before
    }
    button.classList.add("correct");
  } else {
    remainingAttempts--; // If letter is incorrect
    updateHangmanImage();
    button.classList.add("incorrect");
  }
  updateWordDisplay();
  checkGameStatus();
}

// Reinitialization when you click the restart button
restartButton.addEventListener("click", () => {
  chosenEntry = words[Math.floor(Math.random() * words.length)];
  chosenWord = chosenEntry.word.toUpperCase();
  chosenHint = chosenEntry.hint;
  guessedLetters = [];
  remainingAttempts = 6;
  message.innerText = "";
  hintDisplay.innerText = `Hint: ${chosenHint}`;
  createKeyboard();
  updateWordDisplay();
  updateHangmanImage();
});

// Initialize when page loads
hintDisplay.innerText = `Hint: ${chosenHint}`;
createKeyboard();
updateWordDisplay();
updateHangmanImage();
