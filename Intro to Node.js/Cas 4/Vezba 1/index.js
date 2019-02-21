const http = require('http')
const url = require('url')

// Create local server
// http.createServer((request, response) => {
        
//     if(request.url === "/home") {
//         response.writeHead(200,"OK");
//         response.write("Home page");
//         response.end();
//     } else {
//         response.writeHead(400,"OK");
//         response.write("Error");
//         response.end();
//     }

// }).listen(3000);

var niza = ["blazenka", "mario", "jana", "martin"];

// http.createServer((request, response) => {
//     var query = url.parse(request.url, true).query;
//     console.log(query);
//     var name = query.name;
//     var flag = false;
//     for(let i = 0 ; i < niza.length ; i++) {
//             if(niza[i] === name) {
//                 flag = true;
//                 response.writeHead(200,"OK");
//                 response.write("Hello " + niza[i]);
//                 response.end();
//             }
//     }
//     if(flag === false) {
//         response.writeHead(400,"OK");
//         response.write("Error. There is no such user in db");
//         response.end();
//     }


// }).listen(3000);

var shapes = ["rectangle", "circle", "triangle", "square"]
var colors = ["blue", "yellow", "red", "pink" ]

http.createServer((request, response) => {
    var query = url.parse(request.url, true).query;

    var shape = query.shape;
    var color = query.color;

    if(request.url == "/home") {
        response.writeHead(200, "OK");
        response.write("Home page");
        response.end();
    } else if(request.url.includes("/profile")) {
        var result = "";
        for(let i = 0 ; i < shapes.length ; i++) {
            result += "Shape: " + shapes[i] + " . Color: " + colors[i];
        }
        result += " . You picked: " + shape + " and " + color;

        response.writeHead(200,"OK");
        response.write(result);
        response.end();

    } else {
        response.writeHead(400,"OK");
        response.write("Error");
        response.end();
    }
}).listen(3000);



