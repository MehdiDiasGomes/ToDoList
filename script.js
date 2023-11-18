const input = document.getElementById('input');
const listContainer = document.getElementById('list');

function AddTache(){
    if(input.value === ''){
        alert("Veuillez entrer un texte")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '<i class="ri-close-line"></i>'
        li.appendChild(span)
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener ("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        console.log("Removing parent element:", e.target.parentElement);
        e.target.parentElement.remove();
        saveData();
    }
}, false)

showData();

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}