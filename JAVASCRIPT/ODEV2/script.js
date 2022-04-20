let buttonDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulLength = document.getElementsByTagName("li")

for (let i = 0; i < ulLength.length; i++ ){

    let closeButton = document.createElement("span");
    closeButton.textContent =  "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeLine;
    ulLength[i].append(closeButton);
    ulLength[i].onclick = check;
    
}

function removeLine(){
    this.parentElement.remove()
}

function check(){
    this.classList.toggle("checked")
}

buttonDOM.addEventListener("click", elemanekle)

function elemanekle(){



    if(taskDOM = ""){
        $(".error").toast("show")
    }
    else
    {
        $(".success").toast("show")
    }

    let liDOM = document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

    liDOM.onclick = check

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeLine;
    
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");








}

