
let taskDOM = document.querySelector("#task")
let ulLength = document.getElementsByTagName("li")

let buttonDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")


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

    if(taskDOM.value != ""){
        let toastBasarili = document.querySelector('.success');
        let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
        toastAlertBasarili.show();
        let liDOM = document.createElement("li");
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.innerHTML = "";
    
    }
    else{
        let toastBasarisiz = document.querySelector('.error');
        let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
        toastAlertBasarisiz.show();
    }




    liDOM.onclick = check

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeLine;
    
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");

}

