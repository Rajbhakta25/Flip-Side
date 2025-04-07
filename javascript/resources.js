let addResources = false;
let textboxVisible = true;

document.getElementById("enter-btn").onclick = function () {
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
    window.location.href = "newResource.html";
    addResources = false;
}

async function findResource() {
    const zipCode = document.getElementById("zipInput").value.trim();
    const resultElement = document.getElementById("result");

    if (!zipCode) {
        resultElement.innerText = "Please enter a ZIP code.";
        return;
    }

    try {
        const response = await fetch("https://api.sheetbest.com/sheets/9c289fdb-a444-4481-a7f2-bd45fd9e6cd4");
        console.log("Response Status:", response.status);

        if (!response.ok) throw new Error("Failed to load resources.");

        const data = await response.json();
        console.log("Data from SheetBest:", data);

        // Find the resource that matches the entered ZIP code
        const resource = data.find(item => item["Zip Code"].toString().trim() === zipCode);

        const matches = data.filter(item => item["Zip Code"].toString().trim() === zipCode);

        if (matches.length > 0) {
            let formattedResources = matches.map(resource => {
                return `${resource.Name}:\n${resource.Number} \n${resource.Address}`;
            }).join("\n\n");

            resultElement.innerText = formattedResources + "\n\nThis list of shelters and help centers is NOT final. More may become available as time goes on. Please do not lose hope.";
        } else {
            resultElement.innerText = "No resources found for this ZIP code.";
        }


        document.getElementById("zipInput").style.display = "none";
        document.getElementById("enter-btn").style.display = "none";
        textboxVisible = false;

    } catch (error) {
        console.error("Error loading resources:", error);
        resultElement.innerText = "Error loading resources. Please make sure the ZipCode is 5 digits.";
    }
}


/* In the event we can not use the internet to have the API connection, run this below instead of what is above

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

*/