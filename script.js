
let fecha = new Date();
let hora = fecha.getHours(); 


let hora1;

if (hora >= 0 && hora < 12) {
    hora1 = "Buenos días";
} else if (hora >= 12 && hora < 18) {
    hora1 = "Buenas tardes";
} else {
    hora1 = "Buenas noches";
}


alert(hora1) 