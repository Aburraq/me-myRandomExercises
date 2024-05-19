const BASE_URL = "https://v2.jokeapi.dev/joke";
let blacklist ="";
let amount = 1;
let category = "Any";

// === DOM ===
const advancedInputGroupEl = document.getElementById("advancedInputGroup");
const filterEl = document.getElementById("filter");
const generateEl = document.getElementById("generate");
const outputEl = document.getElementById("output");

// === Event Listeners ===
filterEl.addEventListener("click", () => {
    advancedInputGroupEl.classList.toggle("display-none");
    if(!advancedInputGroupEl.classList.contains("display-none")){
        filterEl.innerText = "Keep it simple";
    } else {
        filterEl.innerText = "Advanced Filter";

    }
    updateFilterOptions()
});

generateEl.addEventListener("click", async () => {

    if(!advancedInputGroupEl.classList.contains("display-none")){
        updateFilterOptions()
    } else{
        blacklist = "";
        category = "Any";
        amount = 1;
    }

    getJoke();
    
});

document.querySelector(".blacklist-buttons").addEventListener("click", (e) => {

    if(e.target.tagName == "BUTTON"){
        e.target.classList.toggle("active");
        let activeButtons = document.querySelectorAll(".active");


        let blacklisted = Array.from(activeButtons).map((item) => item.value );
    
        blacklist = blacklisted.join(",");
    }
})

document.getElementById("amount").addEventListener("change", function() {
    const amount = parseInt(this.value);
    if (isNaN(amount) || amount < 0) {
        this.value = 0;
    } else if (amount > 10) {
        this.value = 10;
    }
});

// === Functions ===
async function getJoke() {
    const data = await getData();

    if (amount > 1) {
        outputEl.innerHTML = "";

        data.jokes.forEach((joke, index) => {
            const newOutput = document.createElement("div");
            if (joke.joke) {
                newOutput.innerText = `${index+1}: ${joke.joke}`;
            } else {
                newOutput.innerText = `${index+1}: -: ${joke.setup} -: ${joke.delivery}`;
            }
            outputEl.appendChild(newOutput);
        });
    } else {
        outputEl.innerText = data.joke || `-: ${data.setup} -: ${data.delivery}`;
    }
}


function updateFilterOptions() {
    const categorySelect = document.getElementById("select");
    category = categorySelect.value;

    const amountEl = document.getElementById("amount");
    amount = parseInt(amountEl.value);


}


async function getData (){

    try {
        const response = await fetch(BASE_URL + `/${category}` + `?blacklistFlags=${blacklist}` + `&amount=${amount}`);
        const data = await response.json();

        if(!response.ok){
            throw new Error("Connection error!");
        }

        return data;
        
    } catch (error) {
        outputEl.innerText = error;
    }

}