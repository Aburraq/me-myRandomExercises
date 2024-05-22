// === Variables ===
const speech = new SpeechSynthesisUtterance();
let voices = [];

// === DOM ===
const inputEl = document.getElementById("text");
const buttonEl = document.getElementById("button");
const selectEl = document.getElementById("select");

// === Event Listeners ===
buttonEl.addEventListener("click", () => {
    speech.text = inputEl.value;
    window.speechSynthesis.speak(speech);
});

selectEl.addEventListener("change", () => {
    const selectedVoiceIndex = selectEl.value;
    speech.voice = voices[selectedVoiceIndex];
});

// === Function ===
function populateVoices() {
    const allVoicesObtained = new Promise(function(resolve, reject) {
        voices = window.speechSynthesis.getVoices();
        if (voices.length !== 0) {
            resolve(voices);
        } else {
            window.speechSynthesis.addEventListener("voiceschanged", function() {
                voices = window.speechSynthesis.getVoices();
                resolve(voices);
            });
        }
    });

    allVoicesObtained.then(voices => {
        for (let i = 0; i < voices.length; i++) {
            const optionEl = document.createElement("option");
            optionEl.innerText = `${voices[i].name} (${voices[i].lang})`;
            optionEl.value = i;
            selectEl.appendChild(optionEl);
        }
    });
}

populateVoices();
