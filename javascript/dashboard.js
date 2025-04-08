if (!localStorage.getItem("gameName")) {
    localStorage.setItem("gameName", "simon");
}

document.getElementById("plan-btn").onclick = function () {
    window.location.href = "plan.html";
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "../index.html";
};

document.getElementById("resourceSearch-btn").onclick = function () {
    window.location.href = "resources.html";
};

document.getElementById("change-btn").onclick = function () {
    changeGame();
};

function changeGame() {
    const current = localStorage.getItem("gameName");

    if (current === "3x3") {
        localStorage.setItem("gameName", "simon");
    } else {
        localStorage.setItem("gameName", "3x3");
    }

    alert("Game set to " + current);
}