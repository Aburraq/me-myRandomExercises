// === DOM ===
const createBtnEl = document.getElementById("createBtn");
const notebookEl = document.getElementById("notebook");

// === Event Listeners
createBtnEl.addEventListener("click", () =>{
    populateNote();

});

document.addEventListener("click", (e) => {
    if(e.target.id === "eraserIcon"){
        const outerDiv = e.target.closest(".note");
        if (outerDiv) {
            outerDiv.remove();
            saveLocalStorage();
        }
    }
});

// === Functions ===
function populateNote(){
    
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("note", "pending");

    const headerInputEl = document.createElement("input");
    headerInputEl.setAttribute("id", "headerInput");
    headerInputEl.setAttribute("placeholder", "Header");


    const detailsInputEl = document.createElement("textarea");
    detailsInputEl.setAttribute("id", "detailsInput");

    const iconEl = document.createElement("i");
    iconEl.classList.add("fa-regular", "fa-floppy-disk");
    iconEl.setAttribute("id", "saveIcon");

    outerDiv.appendChild(headerInputEl);
    outerDiv.appendChild(detailsInputEl);
    outerDiv.appendChild(iconEl);

    notebookEl.appendChild(outerDiv);

    iconEl.addEventListener("click", () => {
        populateSave();
    });

    detailsInputEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            populateSave();
        }
    });

}

function populateSave(){
    
    const outerDiv = document.querySelector(".pending");
    const headerInputEl = document.getElementById("headerInput");
    const detailsInputEl = document.getElementById("detailsInput");

    while (outerDiv.firstChild) {
        outerDiv.removeChild(outerDiv.firstChild);
    }
    outerDiv.classList.remove("pending");
    outerDiv.classList.add("saved");

    const headerEl = document.createElement("h1");
    headerEl.innerText = headerInputEl.value;

    const pEl = document.createElement("p");
    pEl.innerText = detailsInputEl.value;

    const iconEl = document.createElement("i");
    iconEl.classList.add("fa-solid", "fa-eraser");
    iconEl.setAttribute("id", "eraserIcon");


    outerDiv.appendChild(headerEl);
    outerDiv.appendChild(pEl);
    outerDiv.appendChild(iconEl);

    notebookEl.appendChild(outerDiv);

    iconEl.addEventListener("click", (e) => {
        outerDiv.remove();
        saveLocalStorage();
    });
    saveLocalStorage();

}


function saveLocalStorage() {
    localStorage.setItem("notebook", notebookEl.innerHTML);
}

function getLocalStorage() {
    if (localStorage.getItem("notebook")) {
        notebookEl.innerHTML = localStorage.getItem("notebook");
    }
}

getLocalStorage();