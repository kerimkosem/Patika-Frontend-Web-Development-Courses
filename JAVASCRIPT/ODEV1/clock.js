// İsim girebileceğimiz Javascript kodunu yazalım

let myName = prompt("Lütfen adınızı giriniz.")

document.querySelector("#myName").innerHTML = myName

// Zaman Bilgisi için kodu yazalım 

function tarih() {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayName = date.getDay();

     switch (dayName) {
        case 1:
           dayName = "Pazartesi";
           break; 
        case 2:
           dayName = "Salı";
           break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
            break;           
     }

     h = h < 10 ? "0" + h : h; 
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
     
     var timer = ` ${h} : ${m} : ${s}  - ${dayName} `;
    document.querySelector('#myClock').innerHTML = timer ; 

    setInterval(tarih, 1000);
}
tarih(); 
