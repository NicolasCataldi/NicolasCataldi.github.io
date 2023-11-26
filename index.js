
var tiempo = document.querySelector(".nav-hora p")

function cambiar_hora() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    if (min < 10){
        tiempo.innerHTML = `${hour}:0${min}`
    }else{
        tiempo.innerHTML = `${hour}:${min}`
    }

    if (hour > 12){
        tiempo.innerHTML = tiempo.innerHTML + "PM"
    } else{
        tiempo.innerHTML = tiempo.innerHTML + "AM"
    }
    
    

};

window.onload = cambiar_hora()
setInterval(cambiar_hora, 500)


