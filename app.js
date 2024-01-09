// Mensaje de cerrado

var disponibleCheck = false

function disponible(){
    const date = new Date();

    const day = date.getDay();
    const hour = date.getHours();

    var cerrado = false
    
    switch (day) {
        case 0:
            cerrado = true
            break;
        case 6:
            cerrado = true
        default:
            break;
    }
    
    if(cerrado == false){
        if(hour >= 20 || hour <= 8){
            cerrado = true
        }
    }
    
    if(cerrado == true){

        if (disponibleCheck == false){
            const body = document.querySelector("body")
            var div = document.createElement("div")
            body.insertAdjacentElement("afterbegin",div)
            div.style.width = "100%"
            div.style.height = "40px"
            div.style.backgroundColor = "red"
            div.style.color = "white"
            div.style.fontSize = "1.05em"
            div.style.textAlign = "center"
            div.innerHTML = "Actualmente Cerrado <br> Lunes a viernes 8 a 20hs"
            disponibleCheck = true
        }
    
        

    }
    

}

window.onload = disponible()
