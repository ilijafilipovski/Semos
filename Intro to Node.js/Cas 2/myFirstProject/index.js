const fs = require('fs');

// citanje na sodrzina od myText.txt file

// fs.readFile('myText.txt', "utf-8", (err, data) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// })

// zapisuvanje vo myText.txt file (so prebrisuvanje na postoeckata data vo fajlot)

// fs.writeFile("myText.txt", "Data to be saved!", (err) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("Podatocite se uspeshno zapishani");
//     }
// })

// dodavanje vo myText.txt file

fs.appendFile("myText.txt", "'\n' This is new line.", (err) => {
    if(err) {
        throw err;
    } else {
        console.log("Podatocite se uspeshno dodadeni");
    }
})