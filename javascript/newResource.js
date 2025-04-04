let addResources = false;

document.getElementById("enter-btn").onclick = function () {
    createNewResource;
};

document.getElementById("back-btn").onclick = function () {
    window.location.href = "resources.html";
};


function createNewResource() {
    const newName = document.getElementById("nameInput").value.trim();
    const newAddress = document.getElementById("addressInput").value.trim();
    const newPhoneNumber = document.getElementById("phoneInput").value.trim();
    const result = document.getElementById("result");

    const newResource = "-----------\n" + newName + "\n" + newPhoneNumber + "\n" + newAddress;

    resultElement.innerText = "Is this correct?\n" + newResource;
}
