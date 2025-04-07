let addResources = false;
let confirmQ = false;

let newName = "";
let newAddress = "";
let newPhoneNumber = "";
let cityName = "";
let newZipCode = "";
let results = document.getElementById("return");

document.getElementById("enter-btn").onclick = function () {
    createNewResource();
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "resources.html";
};

document.getElementById("newResourceConfirm-btn").onclick = function () {
    submitResource();
}

document.getElementById("newResourceDecline-btn").onclick = function () {
    window.location.href = "newResource.html";
}

function createNewResource() {
    newName = document.getElementById("nameInput").value.trim();
    newAddress = document.getElementById("addressInput").value.trim();
    newPhoneNumber = document.getElementById("phoneInput").value.trim();
    newZipCode = document.getElementById("zipCodeInput").value.trim();
    newCityName = document.getElementById("cityInput").value.trim();

    const newResource = "-----------\n" + newName + "\n" + newPhoneNumber + "\n" + newAddress;


    results.innerText = "\n" + "Is this information correct?\n" + newZipCode + "\n" + newCityName + "\n" + newResource;
    confirmQ = true;
    document.getElementById("enter-btn").style.display = "none";
    document.getElementById("back-btn").style.display = "none";
    document.getElementById("newResourceDecline-btn").style.display = "inline-block";
    document.getElementById("newResourceConfirm-btn").style.display = "inline-block";
}

function submitResource() {
    const resourceData = {
        "Zip Code": newZipCode,
        "City": newCityName,
        "Name": newName,
        "Number": newPhoneNumber,
        "Address": newAddress,
        "Together formatted": `${cityName}:\n-----------\n\n${newName}:\n${newPhoneNumber} \n${newAddress}\n\nThis list of shelters and help centers is NOT final. More may become available as time goes on. Please do not lose hope.`
    };

    function submitResourceToSheet() {
        fetch("https://api.sheetbest.com/sheets/9c289fdb-a444-4481-a7f2-bd45fd9e6cd4", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resourceData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Resource successfully submitted! Thank you for helping those around you find safety");
                window.location.href = "resources.html";
            })
            .catch(err => {
                console.error("Error submitting resource:", err);
                alert("Something went wrong. Please try again.");
            });
    }

    submitResourceToSheet();
}