document.getElementById('login-both').onclick = function () {
    const errorMessage = document.getElementById('error-message');
    const inputPassword = document.getElementById('passwordInput').value.trim();

    const savedPassword = localStorage.getItem("userPassword");

    if (inputPassword === savedPassword) {
        window.location.href = "../html/dashboard.html";
    } else {
        errorMessage.innerHTML = "Invalid password.";
        errorMessage.style.color = "red";
    }

};


document.getElementById("back-btn").onclick = function () {
    window.location.href = "../index.html";
};

// If the log in required a password, try 12345. if not, set it