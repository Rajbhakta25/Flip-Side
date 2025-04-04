document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById('chat-btn');
    const backButton = document.getElementById('back-btn');

    chatButton.addEventListener('click', function () {
        window.location.href = 'chat.html';
    });

    backButton.addEventListener('click', function () {
        window.location.href = '../index.html';
    });
});