document.addEventListener("DOMContentLoaded", function () {
    const calendarButton = document.getElementById('calendar-btn');
    const backButton = document.getElementById('back-btn');

    calendarButton.addEventListener('click', function () {
        window.location.href = '/html/calendar.html';
    });

    backButton.addEventListener('click', function () {
        window.location.href = '/html/dashboard.html';
    });
});