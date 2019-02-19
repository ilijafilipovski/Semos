console.log("Hello from Nodejs")

// Promenlivi

var string = "ProBA";
string.toLocaleLowerCase();
var string1 = string.toLowerCase();
console.log(string1)

// Uslovi
// zadaca 1
var name = "Blazenka"
var pass = "000"

if(name === "Blazenka" && pass === "000") {
    console.log("Uspesno logiran korisnik")
} else {
    console.log("Imate greska. Obidete se povtorno")
}

// Array

var array = [1, "welcome", "to", true, 5,6, "node.js"];

var result = "";
for(let i = 0; i < array.length ; i++) {
    if(isNaN(array[i])) {
        result =  array[i] + " "
    }
}
console.log(result);

// 

var usernames = ["iva", "ana", "marija"];
var passwords = ["123", "213", "321"];
var isLogged = false;

var user = "iva"
var pass = "123";

for(let i = 0; i <= 2; i++) {
    if(usernames[i] === user && passwords[i] === pass) {
        console.log("uspeshno logiran");
        isLogged = true;
        break;
    }
}
 if(!isLogged) {
    console.log("neuspeshno login")
 }

 // Parni i neparni broevi

 var niza = [1,2,3,4,5,6,7,8,9,10]

 var parni = [];
 var neparni = [];

 for(let i = 0 ; i < niza.length ; i++) {
        if(niza[i] % 2 === 0) {
            parni.push(niza[i])
        } else {
            neparni.push(niza[i])
        }
 }
 console.log("Parni " + parni)
 console.log("Neparni "  + neparni)

// zbir na dva broja

function sum(a,b) {
    return a + b;
}

var x = function() {
    console.log("Hi from anonymous function");
}

// console.log(x())


(function() {
    console.log("function")
}())

var zbir = sum(2,3)
console.log(zbir)

// Soberi sledbenik 

var niza = ["hi", 7, 2 , "asdsada", "dad", 10]



