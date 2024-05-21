// === DOM ===
const firstNameInputEl = document.getElementById("firstName");
const lastNameInputEl = document.getElementById("lastName");
const phoneNumberInputEl = document.getElementById("phoneNumber");
const addressInputEl  = document.getElementById("address");
const buttonEl = document.getElementById("button");

// === Event Listener ===
buttonEl.addEventListener("click", () => {

    document.querySelectorAll(".display-none").forEach((item) => { item.classList.remove("display-none")});

    validateFirstName();
    validateLastName();
    validatePhoneNumber();
    validateAddress();  
    

})

// === Functions ===
function validateFirstName(){
    const firstName = firstNameInputEl.value;
    const validation = document.getElementById("firstNameValidation");
    const iconElement = validation.previousElementSibling;

    if (firstName === "") {
        validation.innerText = "Please enter a first name";
        resetValidation(validation, iconElement);
    } else if (!/[A-Za-z]/.test(firstName)) {
        validation.innerText = "First name must contain at least one letter";
        resetValidation(validation, iconElement);
    } else if (/[0-9]/.test(firstName)) {
        validation.innerText = "First name cannot contain numbers";
        resetValidation(validation, iconElement);
    } else if (/[\.\&\(\)\+\-\*\/\,\;\:\!\?\@\#\$\%\^\&\*\(\)\[\]\{\}\|\\]/.test(firstName)) {
        validation.innerText = "First name cannot contain special characters";
        resetValidation(validation, iconElement);
    } else {
        validation.innerText = "Valid";
        applyValidationStyles(validation, iconElement);
    }
}

function validateLastName(){
    const lastName = lastNameInputEl.value;
    const validation = document.getElementById("lastNameValidation");
    const iconElement = validation.previousElementSibling;

    if (lastName === "") {
        validation.innerText = "Please enter a last name";
        resetValidation(validation, iconElement);
    } else if (!/[A-Za-z]/.test(lastName)) {
        validation.innerText = "Last name must contain at least one letter";
        resetValidation(validation, iconElement);
    } else if (/[0-9]/.test(lastName)) {
        validation.innerText = "Last name cannot contain numbers";
        resetValidation(validation, iconElement);
    } else if (/[\.\&\(\)\+\-\*\/\,\;\:\!\?\@\#\$\%\^\&\*\(\)\[\]\{\}\|\\]/.test(lastName)) {
        validation.innerText = "Last name cannot contain special characters";
        resetValidation(validation, iconElement);
    } else {
        validation.innerText = "Valid";
        applyValidationStyles(validation, iconElement);
    }
}

function validatePhoneNumber(){
    const phoneNumber = phoneNumberInputEl.value;
    const validation = document.getElementById("phoneNumberValidation");
    const iconElement = validation.previousElementSibling;

    if (phoneNumber === "") {
        validation.innerText = "Please enter a phone number";
        resetValidation(validation, iconElement);
    } else if (!/^\d+$/.test(phoneNumber)) {
        validation.innerText = "Phone number must contain only digits";
        resetValidation(validation, iconElement);
    } else if (phoneNumber.length < 5) {
        validation.innerText = "Phone number must contain at least five numbers";
        resetValidation(validation, iconElement);
    } else {
        validation.innerText = "Valid";
        applyValidationStyles(validation, iconElement);
    }
}
function validateAddress(){
    const address = addressInputEl.value;
    const validation = document.getElementById("addressValidation");
    const iconElement = validation.previousElementSibling;

    if (address.trim() === "") {
        validation.innerText = "Please enter an address";
        resetValidation(validation, iconElement);
    } else if (address.length < 10) {
        validation.innerText = "Address should be at least 10 characters long";
        resetValidation(validation, iconElement);
    } else {
        validation.innerText = "Valid";
        applyValidationStyles(validation, iconElement);
    }
}

function resetValidation(validation, iconElement) {
    validation.style.color = ""; 
    iconElement.style.color = ""; 
    iconElement.classList.remove("fa-check");
    iconElement.classList.add("fa-x"); 
}

function applyValidationStyles(validation, iconElement) {
    validation.style.color = "green"; 
    iconElement.style.color = "green"; 
    iconElement.classList.remove("fa-x");
    iconElement.classList.add("fa-check"); 
}