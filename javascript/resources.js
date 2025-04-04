let addResources = false;
let textboxVisible = true;

document.getElementById("enter-btn").onclick = function () {
    //window.location.href = "resourceReturn.html";
    findResource();
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "dashboard.html";
};

document.getElementById("new-btn").onclick = function () {
    newResource();
};

document.getElementById("create-btn").onclick = function () {
    window.location.href = "newResource.html";
}

async function newResource() {
    const inputZip = document.getElementById("zipInput").value.trim();
    const returnResult = document.getElementById("result");

    if (!inputZip) {
        returnResult.innerText = "Thank you for helping us grow our database. \nPlease enter ONLY the zipcode you will be adding to";
        addResources = true;
    } else if (textboxVisible) {
        returnResult.innerText = "Please reload the page and keep the input box empty."
        addResources = false;
    } else {
        window.location.href = "newResource.html";
        addResources = false;
    }
}


async function findResource() {
    const zipCode = document.getElementById("zipInput").value.trim();
    const resultElement = document.getElementById("result");

    if (addResources) {
        if (zipCode.length === 5) {
            const response = await fetch("../resources/storedResources.json");

            if (!response.ok) throw new Error("Failed to load.");
            const data = await response.json();
            if (data[zipCode]) {
                resultElement.innerText = "We have found this data for this ZipCode\n " + data[zipCode] + "\n\n If you would like to add more information please select below.";
                document.getElementById("new-btn").style.display = "none";
                document.getElementById("zipInput").style.display = "none";
                document.getElementById("create-btn").style.display = "inline-block";
                textboxVisible = false;
            } else {
                resultElement.innerText = "No resource found for this ZIP code. Please select below if you would like to add more information.";
                document.getElementById("new-btn").style.display = "none";
                document.getElementById("zipInput").style.display = "none";
                document.getElementById("create-btn").style.display = "inline-block";
                textboxVisible = false;
            }

        } else {
            resultElement.innerText = "Please enter a valid 5-digit ZipCode";
        }
    } else {

        if (!zipCode) {
            resultElement.innerText = "Please enter a ZIP code.";
            return;
        }
        try {
            const response = await fetch("../resources/storedResources.json");

            if (!response.ok) throw new Error("Failed to load resources.");

            const data = await response.json();

            resultElement.innerText = data[zipCode] || "No resources found for this ZIP code.";
            document.getElementById("zipInput").style.display = "none";
            document.getElementById("enter-btn").style.display = "none";
            textboxVisible = false;
            // Is this line needed?
            //            document.getElementById("zipMessage").textContent = ``;

        } catch (error) {
            console.error("Error loading resources:", error);
            resultElement.innerText = "Error loading resources. Please make sure the ZipCode is 5 digits.";
        }
    }
}
