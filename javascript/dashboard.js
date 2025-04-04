document.addEventListener("DOMContentLoaded", function () {
    const resourceSearchButton = document.getElementById('resourceSearch-btn');
    const planButton = document.getElementById('plan-btn');

    resourceSearchButton.addEventListener('click', function () {
        window.location.href = '..html/resources.html';
    });

    planButton.addEventListener('click', function () {
        window.location.href = '..html/plan.html';
    });
});