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

    if (!inputZip) {
        returnResult.innerText = "Thank you for helping us grow our database. \nPlease enter ONLY the zipcode you will be adding to";
        addResources = true;
    } else if (textboxVisible) {
        returnResult.innerText = "Please reload the page and keep the input box empty.";
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
            try {
                // Fetch data from SheetBest API
                const response = await fetch("https://api.sheetbest.com/sheets/9c289fdb-a444-4481-a7f2-bd45fd9e6cd4");

                // Log response status and check if it's OK
                console.log("Response Status:", response.status);
                if (!response.ok) {
                    console.log("Response failed with status:", response.status);
                    throw new Error("Failed to load data.");
                }

                const data = await response.json();
                console.log("Data from SheetBest:", data); // Log to check structure

                // Check if the ZIP code exists in the data
                const resource = data.find(entry => entry.ZipCode && entry.ZipCode.toString().trim() === zipCode.toString().trim());

                if (resource) {
                    resultElement.innerText = `We found this data for this ZIP code:\n ${resource.Name}, ${resource.Number}, ${resource.Address}`;
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
            } catch (error) {
                console.error("Error fetching data:", error);
                resultElement.innerText = "Error fetching data. Please try again.";
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
            // Fetch data from SheetBest API
            const response = await fetch("https://api.sheetbest.com/sheets/9c289fdb-a444-4481-a7f2-bd45fd9e6cd4");

            // Log response status and check if it's OK
            console.log("Response Status:", response.status);
            if (!response.ok) {
                console.log("Response failed with status:", response.status);
                throw new Error("Failed to load resources.");
            }

            const data = await response.json();
            console.log("Data from SheetBest:", data); // Log to check structure

            // Check if the ZIP code exists in the data
            const resource = data.find(entry => entry.ZipCode && entry.ZipCode.toString().trim() === zipCode.toString().trim());

            if (resource) {
                resultElement.innerText = `Resource for ZIP code ${zipCode}:\n${resource.Name}, ${resource.Number}, ${resource.Address}`;
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
}

