document.addEventListener("DOMContentLoaded", function () {
    const planBox = document.getElementById("Plan");
    const savedPlan = localStorage.getItem("userPlan");

    if (savedPlan) {
        planBox.value = savedPlan;
    }

    planBox.addEventListener("input", function () {
        localStorage.setItem("userPlan", planBox.value);
    });

    document.getElementById("back-btn").onclick = function () {
        window.location.href = "../html/dashboard.html";
    };

    document.getElementById("calendar-btn").onclick = function () {
        window.location.href = "../html/calendar.html";
    };
});
