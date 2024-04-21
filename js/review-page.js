// ==== DATA ====
let rating;

// ==== DOM ELEMENT ====
const listButtons = document.querySelectorAll(".list-item");
const submitEl = document.getElementById("button");
const tyEl = document.querySelectorAll(".ty");
const tySubmitEl = document.querySelector(".ty-submit");
const initialEl = document.querySelectorAll(".initial");

listButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        listButtons.forEach((btn) => btn.classList.remove("clicked"));
        button.classList.add("clicked");
        
        rating = +button.getAttribute("name");
    });
});
submitEl.addEventListener("click", () => {
    const ratingEl = document.getElementById("rating");
    initialEl.forEach((item) => item.classList.add("d-none"));
    tyEl.forEach((item) => item.classList.remove("d-none"));
    tySubmitEl.classList.add("submitted");
    ratingEl.innerText = rating;
});

