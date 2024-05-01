// === DOM ===
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const listContainerEl = document.getElementById("listContainer");

function addListItem(){
    if(inputEl.value === ""){
        alert("Please write something before adding.");
    } else{
        let li = document.createElement("li");
        li.innerText = inputEl.value;
        listContainerEl.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputEl.value = "";
    saveLocalStorage();
}

buttonEl.addEventListener("click", () => {
    addListItem();
});

listContainerEl.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveLocalStorage();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveLocalStorage();
    }

});

function saveLocalStorage(){
    localStorage.setItem("data", listContainerEl.innerHTML);
}
function getLocalStorage(){
    listContainerEl.innerHTML = localStorage.getItem("data");
}
getLocalStorage();