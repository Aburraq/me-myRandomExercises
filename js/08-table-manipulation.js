// ==== DATA ====
let ID = 1;

// ==== DOM ELEMENTS =====
const nameInputEl = document.getElementById("nameInput");
const gradeInputEl = document.getElementById("gradeInput");
const buttonEl = document.getElementById("btnAdd");
const tableBodyEl = document.getElementById("tblBody");
const tableEl= document.getElementById("studentsTable");


// ==== EVENT LISTENER ====
buttonEl.addEventListener("click", () => {

    const name = nameInputEl.value;
    const grade = gradeInputEl.value;
    if(grade < 0 || grade > 100){
        return alert("Grade must be between 0 and 100.")
    }
    if(Boolean(name) === false || Boolean(grade) === false ){
        return alert("Please fill name and grade areas!");
        
    }
    const tableRow = document.createElement("tr");
    tableRow.classList.add("table-dark", "text-center");
    
    const tableId = document.createElement("th");
    tableId.innerText = ID++;
    tableRow.appendChild(tableId);

    const tableName = document.createElement("th");
    tableName.innerText = name;
    tableRow.appendChild(tableName);

    const tableGrade = document.createElement("th");
    tableGrade.innerText = grade;
    tableRow.appendChild(tableGrade);

    tableRow.appendChild(addIcons());

    tableBodyEl.appendChild(tableRow);

    nameInputEl.value = "";
    gradeInputEl.value = "";

});

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("fa-pencil")) {

        e.target.classList.toggle("fa-pencil");
        e.target.classList.toggle("fa-check");
        e.target.nextElementSibling.classList.toggle("fa-x");
        e.target.nextElementSibling.classList.toggle("fa-trash-can");
        
        e.target.classList.toggle("update");
        e.target.nextElementSibling.classList.toggle("update");

        nameInputEl.value = "";
        gradeInputEl.value = "";
        buttonEl.innerText = "UPDATE";
        buttonEl.disabled="true";     

    } else if(e.target.classList.contains("fa-check") && e.target.classList.contains("update")){
        
        
            const updatedName = nameInputEl.value;
            const updatedGrade = gradeInputEl.value;

        if(updatedGrade < 0 || updatedGrade > 100){
            return alert("Grade must be between 0 and 100.")
        }
        if(Boolean(updatedName) === false || Boolean(updatedGrade) === false ){
            return alert("Please fill name and grade areas!");
        }

            const tableRow = e.target.closest("tr");
            tableRow.children[1].innerText = updatedName;
            tableRow.children[2].innerText = updatedGrade;

            e.target.classList.toggle("fa-pencil");
            e.target.classList.toggle("fa-check");
            e.target.nextElementSibling.classList.toggle("fa-trash-can");
            e.target.nextElementSibling.classList.toggle("fa-x");
            e.target.classList.toggle("update");
            e.target.nextElementSibling.classList.toggle("update");

    
            nameInputEl.value = "";
            gradeInputEl.value = "";

            nameInputEl.value = "";
            gradeInputEl.value = "";
            buttonEl.innerText = "+ADD";
            buttonEl.removeAttribute("disabled"); 

            e.target.closest("tr").children[1].innerText = updatedName;
            e.target.closest("tr").children[2].innerText = updatedGrade;

    } else if (e.target.classList.contains("fa-x") && e.target.classList.contains("update")){
        alert("Update Operation is cancelled!");
        nameInputEl.value = "";
        gradeInputEl.value = "";
        buttonEl.innerText = "+ADD";
        buttonEl.removeAttribute("disabled");
        
        e.target.previousElementSibling.classList.toggle("fa-pencil");
        e.target.previousElementSibling.classList.toggle("fa-check");
        e.target.classList.toggle("fa-trash-can");
        e.target.classList.toggle("fa-x");
        e.target.classList.toggle("update");
        e.target.previousElementSibling.classList.toggle("update");

    } else if (e.target.classList.contains("fa-trash-can")) {
        e.target.previousElementSibling.classList.toggle("fa-pencil");
        e.target.previousElementSibling.classList.toggle("fa-check");
        e.target.classList.toggle("fa-x");
        e.target.classList.toggle("fa-trash-can");

        e.target.previousElementSibling.classList.toggle("remove");
        e.target.classList.toggle("remove");

        nameInputEl.value = "";
        gradeInputEl.value = "";
        buttonEl.innerText = "REMOVE";
        buttonEl.disabled="true";    
    } else if(e.target.classList.contains("fa-check") && e.target.classList.contains("remove")){

        e.target.closest("tr").remove();

        nameInputEl.value = "";
        gradeInputEl.value = "";
        buttonEl.innerText = "+ADD";
        buttonEl.removeAttribute("disabled");
        

    } else if (e.target.classList.contains("fa-x") && e.target.classList.contains("remove")){
        alert("Delete operation is cancelled!");
        e.target.previousElementSibling.classList.toggle("fa-pencil");
        e.target.previousElementSibling.classList.toggle("fa-check");
        e.target.classList.toggle("fa-x");
        e.target.classList.toggle("fa-trash-can");
        e.target.previousElementSibling.classList.toggle("remove");
        e.target.classList.toggle("remove");
        nameInputEl.value = "";
        gradeInputEl.value = "";
        buttonEl.innerText = "+ADD";
        buttonEl.removeAttribute("disabled");
    }
});


function addIcons(){

    const tableIcons = document.createElement("th");

    const logo1 = document.createElement("i");
    logo1.style.color="purple";
    logo1.classList.add("fa-solid", "fa-pencil", "m-2");

    const logo2 = document.createElement("i");
    logo2.style.color="red";
    logo2.classList.add("fa-regular", "fa-trash-can", "m-2");

    

    tableIcons.appendChild(logo1);
    tableIcons.appendChild(logo2);
    return tableIcons;
}