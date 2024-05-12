// === Global Variables ===
let second = 0;
let minute = 0;
let hour = 0;
let intervalId = null;
let isTimerRunning = false; 

// === DOM ===
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const buttonGroupEl = document.getElementById("buttonGroup");

// === Event Listener ===
buttonGroupEl.addEventListener("click", handleButtonClick);

// === Functions ===
function handleButtonClick(e) {
    const buttonId = e.target.id;

    if (buttonId === "play") {
        startStopToggle();
    } else if (buttonId === "stop") {
        stopTimer();
    } else if (buttonId === "restart") {
        resetTimer();
    }
}

function startStopToggle() {
    if (!isTimerRunning) {
        startTimer();
    } else {
        stopTimer();
    }
}

function startTimer() {
    if (!isTimerRunning) {
        intervalId = setInterval(() => {
            second++;
            if (second >= 60) {
                second = 0;
                minute++;
                if (minute >= 60) {
                    minute = 0;
                    hour++;
                }
            }
            updateTimerDisplay();
        }, 1000);
        isTimerRunning = true;
    }
}

function stopTimer() {
    clearInterval(intervalId);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(intervalId);
    second = 0;
    minute = 0;
    hour = 0;
    updateTimerDisplay();
    isTimerRunning = false;
}

function updateTimerDisplay() {
    secondEl.innerText = second.toString().padStart(2, "0");
    minuteEl.innerText = minute.toString().padStart(2, "0");
    hourEl.innerText = hour.toString().padStart(2, "0");
}