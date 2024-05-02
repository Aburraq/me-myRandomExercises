// DOM 
const containerEl = document.getElementById("divContainer");
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const buttonContainerEl = document.querySelector(".button-container");
let color = "red";


function populateDiv(number){

    const squareSize = 70 / number;
    for(let i = 0 ; i < number ; i++){
        for(let k = 0 ; k < number ; k++){

                const newDiv = document.createElement("div");
                newDiv.classList.add("sketch");
                newDiv.style.width = `${squareSize}vh`;
                newDiv.style.height = `${squareSize}vh`;
                containerEl.appendChild(newDiv);    
        
        }
    }
}
populateDiv(16);
buttonEl.addEventListener("click", () => {
    const gridSize = +inputEl.value;
    if(gridSize> 75 || gridSize < 0){
        return alert("Grid size must be between 0 and 75")
    }
    containerEl.innerHTML = "";
    populateDiv(gridSize);
});

containerEl.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor=color;
}); 

buttonContainerEl.addEventListener("click", (e) => {
    
    switch(e.target.value){
        case "red":
            color = "red";
            break;
        case "green":
            color = "green";
            break;
        case "blue":
            color = "blue";
            break;
        case "white":
            color = "white";
            break;
        case "random":
            color = generateRandomColor();
            break;
        case "reset":
            containerEl.innerHTML = "";
            populateDiv(16);
            break;              
    }
});

function generateRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b}) `;
    return rgb;

}

