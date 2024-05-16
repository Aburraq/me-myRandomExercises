const outputEl = document.getElementById("output");
const divEl = document.querySelectorAll("div.row div");
let currentNumber = ""; 

document.addEventListener("click", (e) => {

    if (e.target.tagName === "DIV" && !e.target.classList.contains("row")) {
        const text = e.target.innerText;
        if (text === "=") {
            outputEl.innerText = execute(currentNumber);
            currentNumber = "";
        } else if (text === "AC") {
            currentNumber = "";
        } else if(text === "DE"){
            currentNumber = currentNumber.substring(0, currentNumber.length-1);
        } else {
            currentNumber += text;
            outputEl.innerText = currentNumber;

        }

    }
});

function execute(number) {
    try {
        const result = eval(number);
        return result;
    } catch (error) {
        return "Error";
    }
}
