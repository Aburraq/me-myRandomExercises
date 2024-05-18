// === DOM ===
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const spanEl = document.querySelector("span");

// === Event Listener
buttonEl.addEventListener("click", () => {
    if(inputEl.type === "password"){
        inputEl.type="text";
        document.querySelector("i").classList.toggle("fa-lock");
        document.querySelector("i").classList.toggle("fa-key");
    } else{
        inputEl.type="password";
        document.querySelector("i").classList.toggle("fa-lock");
        document.querySelector("i").classList.toggle("fa-key");
    }
});

inputEl.addEventListener("input", () => {
    const password = inputEl.value;
    const strength = checkStrength(password);
    spanEl.innerText = strength;
    spanEl.className = strength.toLowerCase();
});

// === Functions === 
function containsLetters(password) {
    return /[a-zA-Z]/.test(password);
}

function containsNumbers(password) {
    return /\d/.test(password);
}

function containsSigns(password) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
}

function checkStrength(password) {
    if (containsLetters(password) && containsNumbers(password) && containsSigns(password)) {
        return "Strong";
    } else if (containsLetters(password) && containsNumbers(password)) {
        return "Normal";
    } else {
        return "Weak";
    }
}


