// === API_URL ===
const API_URL= "https://api.quotable.io/random";

// === DOM ===
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const generateBtnEl = document.getElementById("generate");
const shareBtnEl = document.getElementById("share");

// === Evenet Listener ===
generateBtnEl.addEventListener("click", async() => {

    const data = await getQuote();
    quoteEl.innerText = data.content;
    authorEl.innerText = data.author;

});

shareBtnEl.addEventListener("click", () => {
    shareOnX();
});

// === Functions ===
async function getQuote(){
    try {
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);
        return data;

    } catch (error) {
        return {
            content: error, 
            author: "Developer"
        }
    }
}


function shareOnX(){
    const quote = quoteEl.innerText;
    const author = authorEl.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(twitterUrl, "_blank", "width=550,height=420");
}

