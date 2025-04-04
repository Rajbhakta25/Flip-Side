document.getElementById('login-both').onclick = function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validCredentials = {
        username: "pi",
        password: "pi"
    };

    if (username === validCredentials.username && password === validCredentials.password) {
        window.location.href = "../html/dashboard.html";
    } else {
        errorMessage.innerHTML = "Invalid username or password.";
        errorMessage.style.color = "red";        
    }
};