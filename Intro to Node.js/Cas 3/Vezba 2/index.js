const http = require('http')
const url = require('url')

// Create local server
http.createServer((request, response) => {
        
    if(request.url === "/home") {
        response.writeHead(200,"OK");
        response.write("Home page");
        response.end();
    } else {
        response.writeHead(400,"OK");
        response.write("Error");
        response.end();
    }

}).listen(3000);
