// === DOM ===
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");

// === Event Listener
buttonEl.addEventListener("click", () => {
    
    if(inputEl.type === "password"){
        inputEl.type="text";
        inputEl.disabled=true;
        document.querySelector("i").classList.toggle("fa-lock");
        document.querySelector("i").classList.toggle("fa-key");
    } else{
        inputEl.type="password";
        inputEl.disabled=false;
        document.querySelector("i").classList.toggle("fa-lock");
        document.querySelector("i").classList.toggle("fa-key");
    }
});

