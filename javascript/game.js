// Game state variables
let score = 0;
let level = 1;
let colorSequence = [];
let userInput = [];
let isFlashing = false;

// List of color names
const colors = ['Red', 'Yellow', 'Blue', 'Green'];

// Function to get a random color from the color list
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("back-btn").onclick = function () {
    window.location.href = "index.html";
};

// Function to flash a color box
function flashColor(color) {
    const element = document.getElementById(color);
    element.style.opacity = 1; // Highlight the color box
    setTimeout(() => {
        element.style.opacity = 0.5; // Reset opacity after flashing
    }, 300);
}

// Start a new round of the game by adding a color to the sequence
function startNewGame() {
    const newColor = getRandomColor();
    colorSequence.push(newColor);
    userInput = [];
    isFlashing = true;
    flashSequence();
}

// Flash the color sequence for the player to follow
function flashSequence() {
    let index = 0;
    const interval = setInterval(() => {
        flashColor(colorSequence[index]);
        index++;
        if (index >= colorSequence.length) {
            clearInterval(interval);
            isFlashing = false;
        }
    }, 1000);
}

// Handle user input when a color is clicked
function handleUserInput(color) {
    if (!isFlashing) {
        userInput.push(color);
        if (userInput.length === colorSequence.length) {
            if (JSON.stringify(userInput) === JSON.stringify(colorSequence)) {
                score += 10;
                level++;
                updateGameInfo();
                setTimeout(startNewGame, 1000); // Start the next round after a short delay
            } else {
                alert("Game Over! Incorrect sequence.");
                resetGame();
            }
        }
    }
}

// Reset the game to its initial state
function resetGame() {
    score = 0;
    level = 1;
    colorSequence = [];
    userInput = [];
    updateGameInfo();
    setTimeout(startNewGame, 1000);
}

// Update the score and level displayed on the screen
function updateGameInfo() {
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('level').innerText = `Level: ${level}`;
}

// Set up event listeners for color box clicks
colors.forEach(color => {
    const element = document.getElementById(color);
    element.addEventListener('click', () => handleUserInput(color));
});

// Reset game button functionality
document.getElementById('resetButton').addEventListener('click', resetGame);

// Start the game when the page loads
window.onload = startNewGame;
