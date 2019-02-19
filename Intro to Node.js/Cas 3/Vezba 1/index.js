const fs = require("fs")
const validator = require('./helpers/validator')

// reading from file

// fs.readFile("example.txt", "utf-8", (error, data) => {
//     if(error) {
//         throw error;
//     } else {
//         console.log(data);
//     }
// });

// dodavanje vo file

// fs.appendFile("example.txt", " Ova e nov tekst vo example.txt", (error) => {
//     if(error) {
//         throw error;
//     } else {
//         console.log("Uspeshno zapishano");
//     }
// })


// Find users in json

// fs.readFile("users.json", "utf-8", (error, data) => {
//     if(error) {
//         throw error;
//     } else {
//        var parsedJSON = JSON.parse(data);
//        var name = "blazenka"
//        var flag = false;
//        for(let i = 0 ; i < parsedJSON.length ; i++) {
//            if(parsedJSON[i].name === name) {
//                console.log("Postoi vo baza");
//                flag = true;
//                break;
//            }
//        }

//        if(flag === false) {
//            console.log("User with name: " + name + " doesn't exists");
//        }
//     }
// });

 // Find info about a city

//  fs.readFile("weather.json", "utf-8", (err, data) => {
//      if(err) {
//          throw err;
//      } else {
//         var parsedJSON = JSON.parse(data);
//         var city = "Kumanovo";
//         var flagPostoi = false;

//         for(let i = 0 ; i < parsedJSON.length; i++) {
//             if(parsedJSON[i].city === city) {
//                 flagPostoi = true;
//                 console.log("Temperaturata vo " + city + " e " + parsedJSON[i].temp + " izmerena vo " + parsedJSON[i].time + "h");
//             }
//         }
//         if(flagPostoi === false) {
//             console.log("Ne postojat informacii za " + city);
//         }
//      }
//  })


var email = "test@yahoo.com"
var password = "123456"

if(validator.validatePassword(password) && validator.validateEmail(email)) {
    console.log("Uspesno registracija")
}else {
    console.log(" NOOOOOT !")
}

