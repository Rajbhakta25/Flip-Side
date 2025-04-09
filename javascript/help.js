document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById('chat-btn');
    const backButton = document.getElementById('back-btn');

    const instructions = document.getElementById("instructions");
    const savedGame = localStorage.getItem("gameName");


    chatButton.addEventListener('click', function () {
        window.location.href = 'chat.html';
    });

    backButton.addEventListener('click', function () {
        window.location.href = '../index.html';
    });

    if (savedGame === "3x3") {
        instructions.innerText = "In Flip Side, players must remember and replicate increasingly difficult patterns of four colors: Red, Blue, Yellow, and Green. Tap the correct order of colors and advance to the next pattern. Good luck!";
    } else {
        instructions.innerText = "In Flip-Side, players slide numbered tiles around a 3x3 grid to put the numbers in order from 1 to 8, with the empty space at the end. Tap the tiles next to the blank space to move them. Keep sliding until everything’s in the right spot.";
    }

});




