let addResources = false;
let confirmQ = false;

let newName = "";
let newAddress = "";
let newPhoneNumber = "";
let newZipCode = "";
let results = document.getElementById("return");

document.getElementById("enter-btn").onclick = function () {
    createNewResource();
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "resources.html";
};

document.getElementById("newResourceConfirm-btn").onclick = function () {
    submitResource()
}

document.getElementById("newResourceDecline-btn").onclick = function() {
    window.location.href = "newResource.html";
}

function createNewResource() {
    newName += document.getElementById("nameInput").value.trim();
    newAddress += document.getElementById("addressInput").value.trim();
    newPhoneNumber += document.getElementById("phoneInput").value.trim();
    newZipCode += document.getElementById("zipCodeInput").value.trim();

    const newResource = "-----------\n" + newName + "\n" + newPhoneNumber + "\n" + newAddress;

    results.innerText = "Is this information correct?\n" + newZipCode +"\n" + newResource;
    confirmQ = true;
    document.getElementById("enter-btn").style.display = "none";
    document.getElementById("back-btn").style.display = "none";
    document.getElementById("newResourceDecline-btn").style.display = "inline-block";
    document.getElementById("newResourceConfirm-btn").style.display = "inline-block";

}

function submitResource() {
    
    results.innerText = "Thank you for helping those around you find safety";
}