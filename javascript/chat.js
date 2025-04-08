document.addEventListener("DOMContentLoaded", function () {
    const entButton = document.getElementById('enter-btn');
    const backButton = document.getElementById('back-btn');

    backButton.addEventListener('click', function () {
        window.location.href = '/html/help.html';
    });

    entButton.addEventListener('click', function () {
        chatSend();
    });
});

window.onload = function () {
    document.getElementById("result").innerText = "Feel free to ask our built-in chat bot about any game-related question you might have!";
};

let setPass = false;

async function chatSend() {
    const chatinp = document.getElementById("chatInput").value.trim().toLowerCase();
    const resultElement = document.getElementById("result");

    if (["help", "sos", "911"].includes(chatinp)) {
        setPass = true;
        resultElement.innerText = "We understand. Please set your password.";
    } else if (setPass) {
        const password = document.getElementById("chatInput").value.trim();
        localStorage.setItem("userPassword", password);
        resultElement.innerText = "Your password has been set.";
    } else {
        resultElement.innerText = "We currently can not help. We apologize for any inconvenience.";
    }
}

//         