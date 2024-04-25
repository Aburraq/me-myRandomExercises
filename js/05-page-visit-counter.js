// ==== ACCESSING DOM ELEMENTS ====
const counterEl = document.getElementById("visitCount");

// ==== FUNCTIONS ====
function countVisit() {

    // retrieve the visits in local storage
    let visits = localStorage.getItem("visits");

    // increment the visit count in local storage
    visits = visits ? +visits + 1 : 1;

    // initialize visits in local storage
    localStorage.setItem("visits", visits);

    counterEl.innerText = visits;
}

// ==== CALL THE FUNCTION ====
window.onload = countVisit;