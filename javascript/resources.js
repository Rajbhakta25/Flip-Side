document.getElementById("enter-btn").onclick = function () {
    //window.location.href = "resourceReturn.html";
    findResource();
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "dashboard.html";
};

async function findResource() {
    const zipCode = document.getElementById("zipInput").value.trim();
    const resultElement = document.getElementById("result");

    if (!zipCode) {
        resultElement.innerText = "Please enter a ZIP code.";
        return;
    }
    try {
        const response = await fetch("../resources/storedResources.json");

        if (!response.ok) throw new Error("Failed to load resources.");

        const data = await response.json();

        resultElement.innerText = data[zipCode] || "No resource found for this ZIP code.";
        document.getElementById("zipInput").style.display = "none";
        document.getElementById("enter-btn").style.display = "none";
        document.getElementById("zipMessage").textContent = ``;

    } catch (error) {
        console.error("Error loading resources:", error);
        resultElement.innerText = "Error loading resources.";
    }
}
