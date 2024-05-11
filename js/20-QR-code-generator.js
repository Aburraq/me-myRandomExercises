// === DOM ===
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const outputDiv = document.getElementById("outputDiv");
const paragraphEl = document.getElementById("generatedText");
const img = document.getElementById("img");

// === Event Listener ===

buttonEl.addEventListener("click",  async() => {
    if(inputEl.value === ""){
        paragraphEl.innerText = "Please write some text or URL";
        img.src = "";
    } else{
        paragraphEl.innerText = "QR code is generated:"
        generateQR(inputEl.value);
    }

});


// === Functions ===

function generateQR(qr){
    img.src = `http://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${qr}`;
}