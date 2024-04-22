// ==== DATA ====
const listItems = new Array();

// ==== DOM ELEMENTS ====
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btnAdd");
const unorderedListEl = document.getElementById("list");

const btnSortEl = document.getElementById("btnSort");
const btnReverseEl = document.getElementById("btnReverse");
const btnRemoveFirstEl = document.getElementById("btnRemoveFirst");
const btnRemoveLastEl = document.getElementById("btnRemoveLast");
const btnRemoveAllEl = document.getElementById("btnRemoveAll");
const btnMixEl = document.getElementById("btnMix");

// ==== EVENT LISTENERS ====
buttonEl.addEventListener("click", () => {
    const listEl = document.createElement("li");
    listEl.innerText = inputEl.value;
    unorderedListEl.appendChild(listEl);
    listItems.push(listEl);
    inputEl.value = "";

});

btnSortEl.addEventListener("click", () => {
    unorderedListEl.innerText = "";
    const cityNames = new Array();
    for(let i = 0; i < listItems.length ; i++){
        cityNames.push(listItems[i].innerText);
    }
    const sortedCityNames = cityNames.sort();

    for(let k = 0; k< sortedCityNames.length; k++){
        const listEl = document.createElement("li");
        listEl.innerText = sortedCityNames[k];
        unorderedListEl.appendChild(listEl);
    }

});

btnReverseEl.addEventListener("click", () => { 
    unorderedListEl.innerText = "";
    listItems.reverse(); 

    listItems.forEach((item) => {
        unorderedListEl.appendChild(item);
        console.log(item);
    });

});

btnRemoveFirstEl.addEventListener("click", () => {
    unorderedListEl.innerText = "";
    listItems.shift();

    listItems.forEach((item) => {
        unorderedListEl.appendChild(item);
    });
});

btnRemoveLastEl.addEventListener("click", () => {
    unorderedListEl.innerText = "";
    listItems.pop(); 

    listItems.forEach((item) => {
        unorderedListEl.appendChild(item);
    });

});

btnRemoveAllEl.addEventListener("click", () => {
    unorderedListEl.innerText = "";
});

btnMixEl.addEventListener("click", () => {
    unorderedListEl.innerText = "";
    shuffleArray(listItems);

    listItems.forEach((item) => {
        unorderedListEl.appendChild(item);
    });
});

// ==== FUNCTION ====

function shuffleArray(arr){
    for(let i = arr.length-1 ; i>0 ; i--){
        let randomNumber = Math.floor(Math.random() * arr.length)
        let temp = arr[i];
        arr[i] = arr[randomNumber];
        arr[randomNumber] = temp;
    }
    return arr;
}