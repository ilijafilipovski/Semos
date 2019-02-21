const fs = require("fs")
const http = require("http")
const url = require("url")
const articles = require("./articles")

// Print total price

// fs.readFile("products.txt", "utf-8", (err, data) => {
//     if(err) {
//         throw err;
//     } else {
//         var products = data.split("\n");
//         var total = 0;

//         for(let i = 0 ; i< products.length; i++) {
//             var product = products[i].split(" ");
//             total += parseInt(product[1]) * parseInt(product[2])
//         }
//         console.log("Total: " + total);
//     }
// })

// fs.readFile("products.json", "utf-8", (err, data) =>{
//     if(err) {
//         throw err;
//     } else {
//         var parsedData = JSON.parse(data);
//         var total = 0;

//         for(let i = 0 ; i < parsedData.length; i++) {
//                 var product = parsedData[i];
//                 console.log(product)
//                 total += product.price * product.quantity
//         }
//         console.log(total)
//     }
// })

var ar1 = new articles.create("1", "Name 1", "Content ContentContentContentContent 1")
var ar2 = new articles.create("2", "Name 2", "Content ContentContentContentContent 2")
var ar3 = new articles.create("1", "Name 3", "Content ContentContentContentContent 3")

var niza = [];
niza.push(ar1,ar2,ar3);

http.createServer((request, response) =>{
    if(request.url == "/articles") {
        var names = "";
        niza.forEach(article =>{
               names += article.name + "\n" 
        })
        response.writeHead(200, "OK")
        response.write(names);
        response.end();
    } else {
        var contents = "";
        niza.forEach(article =>{
            contents += article.content + "\n" 
        })
        response.writeHead(200, "OK")
        response.write(contents);
        response.end();
    }
}).listen(3000)