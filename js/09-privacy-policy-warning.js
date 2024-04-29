const btnClose = document.getElementById("btnClose");
const btnAccept = document.getElementById("btnAccept");
const btnReject = document.getElementById("btnReject");
const offcanvasEl = document.getElementById("offcanvas");

btnClose.addEventListener("click", event => {
    offcanvasEl.style.display="none";
    localStorage.setItem("privacy-policy", "closed");

    if(localStorage.getItem("privacy-policy") !== "accepted"){
        setTimeout(() => {
            offcanvasEl.style.display = "block";
        }, 5000);
    
    }


  });

btnAccept.addEventListener("click", () => {
    const offcanvasBodyEl = document.querySelector(".offcanvas-body");
    const offcanvasLabelEl = document.getElementById("offcanvasLabel");
    offcanvasLabelEl.innerText = "Thank you for accepting our privacy policy.";
    offcanvasBodyEl.innerText = "";

    localStorage.setItem("privacy-policy", "accepted");

    setTimeout(() => {
        offcanvasEl.remove();
    }, 2000);
});
btnReject.addEventListener("click", () => {
    const offcanvasBodyEl = document.querySelector(".offcanvas-body");
    const offcanvasLabelEl = document.getElementById("offcanvasLabel");
    offcanvasLabelEl.innerText = "All I wanted from you is accepting me :(";
    offcanvasBodyEl.innerText = "Mb you clicked reject by mistake? You can take your shot again :=)";

    localStorage.setItem("privacy-policy", "rejected");

    setTimeout(() => {
    offcanvasLabelEl.innerText = "Privacy Policy";
    offcanvasBodyEl.innerText = "We use cookies to personalise and enhance your experience on our site and improve the delivery of ads to you. Visit our Cookie Policy to learn more. By clicking 'accept', you agree to our use of cookies.";
    offcanvasEl.style.display="none";
    }, 2000);

    if(localStorage.getItem("privacy-policy") !== "accepted"){
        setTimeout(() => {
            offcanvasEl.style.display = "block";
        }, 5000);
    
    }

});


