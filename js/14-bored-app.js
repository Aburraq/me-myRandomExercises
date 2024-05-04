// === Data ===
const API_URL = `http://www.boredapi.com/api/activity`;

// === DOM ===
const generateBtnEl = document.getElementById("generate");
const advancedFilterBtnEl = document.getElementById("filter");
const outputEl = document.getElementById("output");
const advancedInputGroupEl =document.getElementById("advancedInputGroup");
const  outputContainer = document.querySelector(".output-container");

const accessibilityButtonsEl = document.querySelector(".accessibility-buttons");
const selectTypeEl = document.getElementById("select");
const participantsEl = document.getElementById("participants");
const budgetEl = document.getElementById("budget");


// === Event Listener ===
generateBtnEl.addEventListener("click" , async () => {
    

    if(!outputContainer.classList.contains("display")){
        generateBtnEl.innerText = "Generate again!";
        outputContainer.classList.toggle("display");
        
    }
    outputEl.innerHTML = await generateActivity();

    if(advancedInputGroupEl.classList.contains("display")){

        // Add smt if advanced filter is on

    }


});

accessibilityButtonsEl.addEventListener("click", async (e) => {
    if(e.target.classList.contains("easy-accessibility")){
        let easyRandom = (Math.random() / 3);
        if(!outputContainer.classList.contains("display")){
            generateBtnEl.innerText = "Generate again!";
            outputContainer.classList.toggle("display");  
        }
        outputEl.innerHTML = await generateActivityBasedOnAccessibility(easyRandom.toFixed(1));

    } else if(e.target.classList.contains("medium-accessibility")){
        let mediumRandom = ((Math.random()  * .34)+ 0.33);
        if(!outputContainer.classList.contains("display")){
            generateBtnEl.innerText = "Generate again!";
            outputContainer.classList.toggle("display");
            
        }
        outputEl.innerHTML = await generateActivityBasedOnAccessibility(mediumRandom.toFixed(1));

    } else if(e.target.classList.contains("high-accessibility")){
        let highRandom = ((Math.random()  * .34)+ .66);
        if(!outputContainer.classList.contains("display")){
            generateBtnEl.innerText = "Generate again!";
            outputContainer.classList.toggle("display");
            
        }
        outputEl.innerHTML = await generateActivityBasedOnAccessibility(highRandom.toFixed(1));
    }
});

selectTypeEl.addEventListener("change", async (e) => {    

    if(!outputContainer.classList.contains("display")){
        generateBtnEl.innerText = "Generate again!";
        outputContainer.classList.toggle("display");
        
    }
    outputEl.innerHTML = await generateActivityBasedOnType(e.target.value);
});

participantsEl.addEventListener("change" , async () => {
    const number = participantsEl.value;

    

    if(!outputContainer.classList.contains("display")){
        generateBtnEl.innerText = "Generate again!";
        outputContainer.classList.toggle("display");
        
    }

    outputEl.innerHTML = await generateActivityBasedOnParticipants(number);
});

budgetEl.addEventListener("change", async (e) => {
    const budget = ((+e.target.value)/125).toFixed(1);

    if(!outputContainer.classList.contains("display")){
        generateBtnEl.innerText = "Generate again!";
        outputContainer.classList.toggle("display");
    }

    outputEl.innerHTML = await generateActivityBasedOnBudget(budget);

    
});

advancedFilterBtnEl.addEventListener("click", () => {
    advancedInputGroupEl.classList.toggle("display");
    advancedFilterBtnEl.innerText = "Advanced Filter";
    generateBtnEl.classList.toggle("display-none");
    const  outputContainer = document.querySelector(".output-container");
    outputContainer.classList.remove("display");

    if(advancedInputGroupEl.classList.contains("display")){
        advancedFilterBtnEl.innerText = "Keep it simple";
    }

});


// === Functions ===
async function generateActivity(){

    try {
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("Failed to fetch data.")
        }

        const data = await response.json();
        return data.activity;
    } catch (error) {
        return error.message;
    }

}


async function generateActivityBasedOnAccessibility(difficulty){

    try {
        const response = await fetch(`${API_URL}?accessibility=${difficulty}`);
        if(!response.ok){
            throw new Error("Failed to fetch data.")
        }

        const data = await response.json();
        return data.activity;
    } catch (error) {
        return error.message;
    }

}

async function generateActivityBasedOnType(type){

    try {
        const response = await fetch(`${API_URL}?type=${type}`);
        if(!response.ok){
            throw new Error("Failed to fetch data.")
        }

        const data = await response.json();

        return data.activity;
    } catch (error) {
        return error.message;
    }

}

async function generateActivityBasedOnParticipants(participants){

    try {
        if(participants < 0 || participants > 5){
            throw new Error(`Participants should be between 0 and 5`);
          }
        const response = await fetch(`${API_URL}?participants=${participants}`);
        if(!response.ok){
            throw new Error("Failed to fetch data.")
        }

        const data = await response.json();
        if(Boolean(data.error)){
            throw new Error(`We could not find any activity with ${participants} participants.`)
        }
        return data.activity;
    } catch (error) {
        return error.message;
    }

}

async function generateActivityBasedOnBudget(budget){

    try {
        const response = await fetch(`${API_URL}?price=${budget}`);
        if(!response.ok){
            throw new Error("Failed to fetch data.")
        }

        const data = await response.json();

        if(Boolean(data.error)){
            throw new Error(`We could not find any activity with that budget.`)
        }

        return data.activity;
    } catch (error) {
        return error.message;
    }

}