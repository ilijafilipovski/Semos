var broj1 = prompt("vnesi prv broj");
var broj2 = prompt("vnesi vtor broj");
var znak = prompt("vnesi znak");
var rezultat;

switch (znak) {
    case "+":{
        rezultat = Number(broj1) + Number(broj2);
        alert(rezultat);
        break;
    }
    case "-":{
        rezultat = Number(broj1) - Number(broj2);
        alert(rezultat);
        break;
    }
    case "*":{
        rezultat = Number(broj1) * Number(broj2);
        alert(rezultat);
        break;
    }
    case "/":{

        rezultat = Number(broj1) / Number(broj2);
        if (broj2 == 0) {
            alert(" ne e vozmozno delenje so nula ");
            break;
        }
        alert(rezultat);
        break;
    }
    default:{
        alert("vnesi validen znak");
    }
    console.log(rezultat);
}

// vtor nacin:

// var broj1 = parseInt(prompt("vnesi prv broj") , "0");
// var broj2 = parseInt(prompt("vnesi vtor broj") , "0");
// var znak = prompt("vnesi znak");
// var rezultat;
// if (znak == "+"){
//     rezultat = broj1 + broj2;
// } else if (znak =="-"){
//     rezultat = broj1 - broj2;
// } else if (znak =="*"){
//     rezultat = broj1 * broj2;
// }  else{
//     rezultat = broj1 / broj2;
//     if (broj2 == 0){
//         alert("ne e mozno delenje so nula")
//     }

// }

// alert(rezultat);