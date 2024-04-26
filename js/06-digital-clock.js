// ==== DOM ELEMENTS ====
const clock = document.getElementById("clock");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const spanElements = document.getElementsByClassName("colon"); 

// ==== FUNCTIONS ====
function updateClock(){
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

    hourEl.innerText = String(currentHour).padStart(2,"0");
    // padstart takes a look at string it is called on. 
    // It counts the string and if its less than 2 chars 
    // It will add the second argument ("0") to the beginning of the string.
    // Until the string is the length of the first argument (2).
    minuteEl.innerText = String(currentMinute).padStart(2,"0");
    secondEl.innerText = String(currentSecond).padStart(2,"0");
    // create an array from the HTMLCollection of colon elements
    const colons = Array.from(spanElements);
    // toggle the hidden class on each colon element
    colons.forEach((colon) => colon.classList.toggle("hidden"));

}

// don't forget to initially call the function, so the clock is displayed from the start
updateClock();

// call the intervals to update the clock every second
setInterval(() => {
    updateClock();
}, 1000);