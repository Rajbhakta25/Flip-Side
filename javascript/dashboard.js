document.addEventListener("DOMContentLoaded", function () {
    const resourceSearchButton = document.getElementById('resourceSearch-btn');
    const planButton = document.getElementById('plan-btn');

    document.getElementById("plan-btn").onclick = function () {
        window.location.href = "plan.html";
    };

    document.getElementById("back-btn").onclick = function () {
        window.location.href = "index.html";
    };
});
